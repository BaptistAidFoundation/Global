import { useState, useEffect } from 'react';
import { CreditCard, Wallet, Building2, ArrowRight, DollarSign, Bitcoin, CreditCard as CardIcon, X, Copy, Check, AlertCircle } from 'lucide-react';
import DonateHero from '../Assets/images/bg_5.jpg';

export default function Donate() {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState<string | null>(null);
  const [cardError, setCardError] = useState<string | null>(null);
  const [expiryDate, setExpiryDate] = useState('');
  const [expiryError, setExpiryError] = useState<string | null>(null);
  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState<string | null>(null);
  const [cardName, setCardName] = useState('');
  const [cardNameError, setCardNameError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const openModal = (content: string) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
    if (method === 'crypto') {
      openModal('crypto');
    } else if (method === 'bank') {
      openModal('bank');
    }
  };

  // Detect card type based on card number
  useEffect(() => {
    if (!cardNumber) {
      setCardType(null);
      return;
    }

    // Remove spaces and non-numeric characters
    const cleanNumber = cardNumber.replace(/\D/g, '');

    // Visa
    if (/^4/.test(cleanNumber)) {
      setCardType('visa');
    }
    // Mastercard
    else if (/^5[1-5]/.test(cleanNumber)) {
      setCardType('mastercard');
    }
    // American Express
    else if (/^3[47]/.test(cleanNumber)) {
      setCardType('amex');
    }
    // Discover
    else if (/^6(?:011|5)/.test(cleanNumber)) {
      setCardType('discover');
    }
    // Unknown
    else {
      setCardType(null);
    }
  }, [cardNumber]);

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const cleanValue = value.replace(/\D/g, '');
    let formattedValue = '';

    // Format based on card type
    if (cardType === 'amex') {
      // AMEX: XXXX XXXXXX XXXXX
      for (let i = 0; i < cleanValue.length; i++) {
        if (i === 4 || i === 10) {
          formattedValue += ' ';
        }
        formattedValue += cleanValue[i];
      }
    } else {
      // Other cards: XXXX XXXX XXXX XXXX
      for (let i = 0; i < cleanValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
          formattedValue += ' ';
        }
        formattedValue += cleanValue[i];
      }
    }

    return formattedValue;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
    
    // Validate card number
    const cleanNumber = formattedValue.replace(/\D/g, '');
    if (cleanNumber.length > 0 && !luhnCheck(cleanNumber)) {
      setCardError('Invalid card number');
    } else if (cleanNumber.length > 0 && (
      (cardType === 'visa' && cleanNumber.length !== 16) ||
      (cardType === 'mastercard' && cleanNumber.length !== 16) ||
      (cardType === 'amex' && cleanNumber.length !== 15) ||
      (cardType === 'discover' && cleanNumber.length !== 16)
    )) {
      setCardError('Incorrect card number length');
    } else {
      setCardError(null);
    }
  };

  // Format expiry date (MM/YY)
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
      // Format as MM
      formattedValue = value.substring(0, 2);
      
      // Add slash and YY if we have more than 2 digits
      if (value.length > 2) {
        formattedValue += '/' + value.substring(2, 4);
      }
    }

    setExpiryDate(formattedValue);

    // Validate expiry date
    if (formattedValue.length === 5) {
      const [month, year] = formattedValue.split('/');
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits
      const currentMonth = currentDate.getMonth() + 1; // 1-12
      
      const expMonth = parseInt(month, 10);
      const expYear = parseInt(year, 10);
      
      if (expMonth < 1 || expMonth > 12) {
        setExpiryError('Invalid month');
      } else if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        setExpiryError('Card expired');
      } else {
        setExpiryError(null);
      }
    } else if (formattedValue.length > 0) {
      setExpiryError('Invalid format');
    } else {
      setExpiryError(null);
    }
  };

  // Handle CVV input
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCvv(value);

    // Validate CVV
    if (value.length > 0) {
      const expectedLength = cardType === 'amex' ? 4 : 3;
      if (value.length !== expectedLength) {
        setCvvError(`CVV must be ${expectedLength} digits`);
      } else {
        setCvvError(null);
      }
    } else {
      setCvvError(null);
    }
  };

  // Handle card name input
  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardName(value);

    // Validate card name
    if (value.trim().length > 0 && value.trim().split(' ').length < 2) {
      setCardNameError('Please enter full name');
    } else {
      setCardNameError(null);
    }
  };

  // Luhn algorithm for card number validation
  const luhnCheck = (cardNumber: string) => {
    if (!cardNumber) return false;
    
    let sum = 0;
    let shouldDouble = false;
    
    // Loop through values starting from the rightmost digit
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
      
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    
    return (sum % 10) === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields if payment method is card
    if (paymentMethod === 'card') {
      const cleanCardNumber = cardNumber.replace(/\D/g, '');
      const hasCardError = !cleanCardNumber || !luhnCheck(cleanCardNumber);
      const hasExpiryError = !expiryDate || expiryDate.length !== 5;
      const hasCvvError = !cvv || (cardType === 'amex' ? cvv.length !== 4 : cvv.length !== 3);
      const hasNameError = !cardName || cardName.trim().split(' ').length < 2;
      
      if (hasCardError) {
        setCardError('Please enter a valid card number');
      }
      
      if (hasExpiryError) {
        setExpiryError('Please enter a valid expiry date');
      }
      
      if (hasCvvError) {
        setCvvError('Please enter a valid CVV');
      }
      
      if (hasNameError) {
        setCardNameError('Please enter your full name');
      }
      
      if (hasCardError || hasExpiryError || hasCvvError || hasNameError) {
        return;
      }
      
      // Simulate payment processing
      setIsProcessing(true);
      
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentSuccess(true);
        
        // Reset form after successful payment
        setTimeout(() => {
          setPaymentSuccess(false);
          setCardNumber('');
          setExpiryDate('');
          setCvv('');
          setCardName('');
          setPaymentMethod(null);
        }, 3000);
      }, 2000);
    } else {
      // Handle other payment methods
      alert('Thank you for your donation, we appreciat ');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={DonateHero}
            alt="People helping in community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0F2C] bg-opacity-60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl text-gray-300 max-w-3xl">Your generosity helps us continue our mission of serving communities in need.</p>
          </div>
        </div>
      </div>

      {/* Donation Options */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">One-Time Donation</h3>
              <p className="text-gray-600 mb-6">Make an immediate impact with a single contribution to support our cause.</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                Donate Now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Monthly Giving</h3>
              <p className="text-gray-600 mb-6">Join our community of monthly donors and help create sustainable change.</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                Start Monthly <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Corporate Giving</h3>
              <p className="text-gray-600 mb-6">Partner with us to make a significant impact in communities worldwide.</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Payment Methods</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-white rounded-lg p-8 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handlePaymentMethodChange('card')}
            >
              <div className="flex justify-center mb-6">
                <CardIcon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Credit/Debit Card</h3>
              <p className="text-gray-600 mb-6 text-center">Secure payment via credit or debit card.</p>
              <div className="flex justify-center space-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-8" />
              </div>
            </div>
            
            <div 
              className="bg-white rounded-lg p-8 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handlePaymentMethodChange('bank')}
            >
              <div className="flex justify-center mb-6">
                <DollarSign className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Bank Transfer</h3>
              <p className="text-gray-600 mb-6 text-center">Direct bank transfer to our foundation account.</p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p><span className="font-semibold">Bank:</span> First National Bank</p>
                <p><span className="font-semibold">Account:</span> Baptist-Aid Foundation</p>
                <p className="truncate"><span className="font-semibold">Account #:</span> 1234567890</p>
                <p className="truncate"><span className="font-semibold">Routing #:</span> 987654321</p>
              </div>
            </div>
            
            <div 
              className="bg-white rounded-lg p-8 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handlePaymentMethodChange('crypto')}
            >
              <div className="flex justify-center mb-6">
                <Bitcoin className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Cryptocurrency</h3>
              <p className="text-gray-600 mb-4 text-center">Support our cause with as little as $2 in cryptocurrency.</p>
              <div className="bg-gray-50 p-3 rounded text-sm mb-4">
                <p className="mb-2"><span className="font-semibold">Bitcoin (BTC):</span></p>
                <p className="text-xs truncate">3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</p>
                <p className="mt-2 mb-2"><span className="font-semibold">Ethereum (ETH):</span></p>
                <p className="text-xs truncate">0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7</p>
              </div>
              <p className="text-xs text-gray-500 text-center">Click to view full addresses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Form */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Make Your Donation</h2>
          <form className="bg-white rounded-lg shadow-md p-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Donation Amount</label>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <button type="button" className="px-4 py-2 border rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500">$25</button>
                <button type="button" className="px-4 py-2 border rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500">$50</button>
                <button type="button" className="px-4 py-2 border rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500">$100</button>
                <button type="button" className="px-4 py-2 border rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500">Other</button>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center p-3 border rounded-md hover:bg-blue-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    className="mr-2" 
                    onChange={() => handlePaymentMethodChange('card')}
                    checked={paymentMethod === 'card'}
                  />
                  <CardIcon className="w-4 h-4 mr-2" />
                  <span>Credit Card</span>
                </label>
                <label className="flex items-center p-3 border rounded-md hover:bg-blue-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    className="mr-2" 
                    onChange={() => handlePaymentMethodChange('bank')}
                    checked={paymentMethod === 'bank'}
                  />
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span>Bank Transfer</span>
                </label>
                <label className="flex items-center p-3 border rounded-md hover:bg-blue-50 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    className="mr-2" 
                    onChange={() => handlePaymentMethodChange('crypto')}
                    checked={paymentMethod === 'crypto'}
                  />
                  <Bitcoin className="w-4 h-4 mr-2" />
                  <span>Cryptocurrency</span>
                </label>
              </div>
            </div>

            {/* Dynamic Payment Form Fields */}
            {paymentMethod === 'card' && (
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-semibold mb-4">Credit Card Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Card Number
                      {cardType && (
                        <span className="ml-2 text-sm text-blue-600">
                          {cardType === 'visa' && 'Visa'}
                          {cardType === 'mastercard' && 'Mastercard'}
                          {cardType === 'amex' && 'American Express'}
                          {cardType === 'discover' && 'Discover'}
                        </span>
                      )}
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="1234 5678 9012 3456" 
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          cardError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={cardType === 'amex' ? 17 : 19} // Account for spaces
                      />
                      {cardType && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {cardType === 'visa' && (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
                          )}
                          {cardType === 'mastercard' && (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
                          )}
                          {cardType === 'amex' && (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-6" />
                          )}
                          {cardType === 'discover' && (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Discover_Card_logo.svg/1280px-Discover_Card_logo.svg.png" alt="Discover" className="h-6" />
                          )}
                        </div>
                      )}
                    </div>
                    {cardError && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" /> {cardError}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Expiration Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY" 
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          expiryError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        maxLength={5}
                      />
                      {expiryError && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" /> {expiryError}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        CVV
                        <span className="ml-1 text-xs text-gray-500">
                          ({cardType === 'amex' ? '4 digits' : '3 digits'})
                        </span>
                      </label>
                      <input 
                        type="text" 
                        placeholder={cardType === 'amex' ? "1234" : "123"} 
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          cvvError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        value={cvv}
                        onChange={handleCvvChange}
                        maxLength={cardType === 'amex' ? 4 : 3}
                      />
                      {cvvError && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" /> {cvvError}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Name on Card</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        cardNameError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                      }`}
                      value={cardName}
                      onChange={handleCardNameChange}
                    />
                    {cardNameError && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" /> {cardNameError}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Message (Optional)</label>
              <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
            </div>

            <button 
              type="submit" 
              className={`mt-8 w-full px-6 py-3 rounded-md text-white font-medium flex items-center justify-center ${
                isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } transition duration-300`}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : paymentSuccess ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Payment Successful!
                </>
              ) : (
                'Complete Donation'
              )}
            </button>
            
            {/* Payment security notice */}
            <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center">
              <CreditCard className="w-4 h-4 mr-2" />
              <span>Your payment information is secure and encrypted</span>
            </div>
          </form>
        </div>
      </div>

      {/* Crypto FAQ */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cryptocurrency Donation FAQ</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What is cryptocurrency?</h3>
              <p className="text-gray-600">Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on a technology called blockchain, which is a distributed ledger enforced by a network of computers.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Why donate with cryptocurrency?</h3>
              <p className="text-gray-600">Cryptocurrency donations offer several advantages: they're secure, have lower transaction fees than credit cards, provide tax benefits in many jurisdictions, and allow for global participation without currency conversion issues.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I donate cryptocurrency?</h3>
              <p className="text-gray-600">Simply send your preferred cryptocurrency to our wallet address listed above. You can donate any amount, starting from as little as $2 worth of cryptocurrency. After sending, please email us at crypto@baptist-aid.org with your transaction details so we can acknowledge your donation.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Which cryptocurrencies do you accept?</h3>
              <p className="text-gray-600">We currently accept Bitcoin (BTC) and Ethereum (ETH). We're working on expanding to accept more cryptocurrencies in the future. If you'd like to donate using another cryptocurrency, please contact us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$25</div>
              <p className="text-gray-600">Provides essential medical supplies for one person</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$50</div>
              <p className="text-gray-600">Supports education materials for a student</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$100</div>
              <p className="text-gray-600">Helps provide clean water for a family</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            {modalContent === 'crypto' && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">Cryptocurrency Donation</h3>
                <p className="text-gray-600 mb-6">Send your cryptocurrency to one of the following addresses:</p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Bitcoin (BTC)</span>
                      <button 
                        onClick={() => copyToClipboard('3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5', 'btc')}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {copied === 'btc' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                    <p className="text-sm break-all">3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Ethereum (ETH)</span>
                      <button 
                        onClick={() => copyToClipboard('0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7', 'eth')}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {copied === 'eth' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                    <p className="text-sm break-all">0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7</p>
                  </div>
                </div>
                
                <p className="mt-6 text-sm text-gray-600">
                  After sending your donation, please email us at crypto@baptist-aid.org with your transaction details.
                </p>
              </div>
            )}
            
            {modalContent === 'bank' && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">Bank Transfer Details</h3>
                <p className="text-gray-600 mb-6">Please use the following details to make your bank transfer:</p>
                
                <div className="bg-gray-50 p-4 rounded space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Bank Name:</span>
                    <span>First National Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Account Name:</span>
                    <span>Baptist-Aid Foundation</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Account Number:</span>
                    <div className="flex items-center">
                      <span>1234567890</span>
                      <button 
                        onClick={() => copyToClipboard('1234567890', 'account')}
                        className="text-blue-600 hover:text-blue-800 ml-2"
                      >
                        {copied === 'account' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Routing Number:</span>
                    <div className="flex items-center">
                      <span>987654321</span>
                      <button 
                        onClick={() => copyToClipboard('987654321', 'routing')}
                        className="text-blue-600 hover:text-blue-800 ml-2"
                      >
                        {copied === 'routing' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">SWIFT/BIC:</span>
                    <span>FNBAUS12</span>
                  </div>
                </div>
                
                <p className="mt-6 text-sm text-gray-600">
                  Please include your name and "Donation" in the reference field. After making the transfer, please email us at donations@baptist-aid.org with your transfer details.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}