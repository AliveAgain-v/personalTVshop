import React from 'react';
import { Phone, Mail, MapPin, Star, Tv, Shield, Zap, Award, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [selectedModel, setSelectedModel] = React.useState('');
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    model: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');

  const openForm = (model = '') => {
    setSelectedModel(model);
    setFormData(prev => ({ ...prev, model }));
    setShowForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedModel('');
    setFormData({
      name: '',
      phone: '',
      email: '',
      model: '',
      comments: ''
    });
    setSubmitMessage('');
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Initialize EmailJS with public key
      emailjs.init("jLphYFZlMKyNXYo6R");
      
      const templateParams = {
        name: formData.name,
        model: formData.model,
        phone: formData.phone,
        email: formData.email,
        comments: formData.comments
      };

      await emailjs.send(
        'service_k9i786g', // Your specific Gmail service ID
        'template_gnuwx3g', // Your actual template ID
        templateParams
      );

      setSubmitMessage('Thank you! Your quote request has been sent successfully. I\'ll get back to you soon!');
      setTimeout(() => {
        closeForm();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Thank you for your interest! Please call (204) 951-0817 or email zengj1117@gmail.com directly for immediate assistance.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    {
      id: 1,
      name: "Samsung Frame Pro",
      model: "QN65LS03D",
      image: "不做满墙电视柜后悔了吗_1_77家有个毛毛猪_来自小红书网页版.jpg",
      features: ["Art Mode", "Anti-Glare Matte Display", "Customizable Bezels", "4K Neo QLED", "120Hz VRR"]
    },
    {
      id: 2,
      name: "Samsung Frame",
      model: "QN65LS03B",
      image: "frame.png",
      features: ["Art Mode", "One Connect Box", "4K QLED", "120Hz VRR", "Anti-Reflection"]
    },
    {
      id: 3,
      name: "Samsung S95F QD-OLED",
      model: "QN65S95F",
      image: "s95f.png",
      features: ["QD-OLED Display", "Neural Quantum Processor 4K", "LaserSlim Design", "165Hz VRR"]
    },
    {
      id: 4,
      name: "Samsung S90F OLED",
      model: "QN65S90F",
      image: "s90f.png",
      features: ["QD-OLED Display", "Motion Xcelerator Turbo+", "Gaming Hub", "165Hz VRR"]
    },
    {
      id: 5,
      name: "LG G5 OLED",
      model: "OLED65G5PUA",
      image: "LG发布2025旗舰OLED电视系列，无线4K更智能_1_咬咬_来自小红书网页版.jpg",
      features: ["Gallery Design", "α11 AI Processor 4K Gen2", "Dolby Vision IQ", "165Hz VRR"]
    },
    {
      id: 6,
      name: "LG C5 OLED",
      model: "OLED65C5PUA",
      image: "_1_LG南京线下实体店_来自小红书网页版.jpg",
      features: ["OLED evo", "a9 AI Processor 4K Gen8", "4 HDMI 2.1", "144Hz VRR"]
    },
    {
      id: 7,
      name: "LG B5 OLED",
      model: "OLED65B5PUA",
      image: "一个电视全屋共用？当然是用移动电视架啦！_1_左下_来自小红书网页版.jpg",
      features: ["OLED Display", "α8 AI Processor 4K Gen2", "Filmmaker Mode", "120Hz VRR"]
    },
    {
      id: 8,
      name: "Sony A95L QD-OLED",
      model: "XR65A95L",
      image: "A95L旗舰款电视座架摆放和挂墙效果_1_中国龙_来自小红书网页版.jpg",
      features: ["QD-OLED", "Cognitive Processor XR", "Perfect for PS5", "120Hz VRR"]
    },
    {
      id: 9,
      name: "Sony BRAVIA 9",
      model: "K65XR90",
      image: "TVFY24_UP_PrimaryTout_0pt-fallback-m.webp",
      features: ["Full Array LED", "XR Processor", "Google TV", "120Hz VRR"]
    },
    {
      id: 10,
      name: "Sony X90L",
      model: "XR65X90L",
      image: "x90l.jpeg",
      features: ["Full Array LED", "Cognitive Processor XR", "Perfect for PS5", "120Hz VRR"]
    },
    {
      id: 11,
      name: "Hisense U88QG ULED",
      model: "65U88QG",
      image: "shopify-image_6042a119-da44-401b-a1d6-03a431141271_1500x.webp",
      features: ["ULED Pro", "Mini-LED", "165Hz VRR", "Dolby Vision IQ", "HDR10+"]
    },
    {
      id: 12,
      name: "Hisense U78QG ULED", 
      model: "65U78QG",
      image: "image.webp",
      features: ["ULED", "Mini-LED", "144Hz VRR", "Dolby Vision", "HDR10+"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Mike helped me find the perfect TV for my living room. His expertise and personalized service made all the difference!",
      rating: 5
    },
    {
      name: "Robert Chen",
      text: "Outstanding service! Mike knows everything about TVs and helped me get exactly what I needed within my budget.",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "Professional, knowledgeable, and honest. Mike didn't try to oversell me and found the perfect TV for my needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Tv className="h-8 w-8 text-gray-800 mr-2" />
              <Tv className="h-8 w-8 text-gray-500 mr-2" />
              <span className="text-xl font-bold text-gray-900">Your Personal TV Shopper</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <a href="#contact" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Get Quote
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Personal<br />
                <span className="text-gray-400">TV Shopper</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              </p>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Helping customers find their perfect TV. From budget-friendly options to premium home theaters, 
                I'll help you make the right choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => openForm()} className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                  Contact for Pricing
                </button>
                <a href="#products" className="border border-gray-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center">
                  View Products
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Premium TV Display"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Me?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I've helped thousands of customers find their perfect viewing experience. 
                I stay up-to-date with the latest technology and work directly with manufacturers to get you the best deals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-gray-700 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Warranty Support</div>
                    <div className="text-sm text-gray-600">Full protection</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="h-8 w-8 text-gray-700 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Quick Delivery</div>
                    <div className="text-sm text-gray-600">Fast setup</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-gray-700 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Expert Advice</div>
                    <div className="text-sm text-gray-600">Professional expertise</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-8 w-8 text-gray-700 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">5-Star Service</div>
                    <div className="text-sm text-gray-600">Customer focused</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                  Personalized TV recommendations
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                  Competitive pricing and deals
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                  Professional installation service
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                  Extended warranty options
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                  Ongoing technical support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured TV Models</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover my handpicked selection of premium TVs from top brands. Contact me for personalized pricing and exclusive deals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">Model: {product.model}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-700">Contact for Price</div>
                    <button onClick={() => openForm(product.name + ' - ' + product.model)} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-100 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Looking for Something Specific?</h3>
              <p className="text-gray-700 mb-6">
                Need a different size or have specific requirements? I can help you find the perfect TV for your needs!
              </p>
              <button onClick={() => openForm()} className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect TV?</h2>
            <p className="text-xl text-gray-400">Contact us today for personalized recommendations and exclusive pricing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">Ready to help you choose</p>
              <a href="tel:+1-204-951-0817" className="text-gray-400 font-semibold hover:text-white transition-colors">
                (204) 951-0817
              </a>
            </div>

            <div className="text-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">Get a detailed quote</p>
              <a href="mailto:zengj1117@gmail.com" className="text-gray-400 font-semibold hover:text-white transition-colors">
                zengj1117@gmail.com
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-800 p-6 rounded-xl max-w-2xl mx-auto border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-400">
                <div>Mon - Sat: 12pm - 8pm</div>
                <div>Sunday: 11am - 6pm</div>
                <div className="col-span-2">Holidays: By appointment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Tv className="h-6 w-6 text-gray-500 mr-2" />
              <span className="font-semibold">Your Personal TV Shopper</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 Your Personal TV Shopper. Licensed TV Sales Professional.
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Request Quote</h3>
              <button 
                onClick={closeForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="(204) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                    TV Model
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                    <option value="">Select a model or leave blank</option>
                    <option value="Samsung Frame Pro - QN65LS03D">Samsung Frame Pro - QN65LS03D</option>
                    <option value="Samsung Metal Frame - QN65LS03B">Samsung Metal Frame - QN65LS03B</option>
                    <option value="Samsung S95F OLED - QN65S95F">Samsung S95F OLED - QN65S95F</option>
                    <option value="Samsung S90F OLED - QN65S90F">Samsung S90F OLED - QN65S90F</option>
                    <option value="LG G5 OLED - OLED65G5PUA">LG G5 OLED - OLED65G5PUA</option>
                    <option value="LG C5 OLED - OLED65C5PUA">LG C5 OLED - OLED65C5PUA</option>
                    <option value="LG B5 OLED - OLED65B5PUA">LG B5 OLED - OLED65B5PUA</option>
                    <option value="Sony A95L QD-OLED - XR65A95L">Sony A95L QD-OLED - XR65A95L</option>
                    <option value="Sony BRAVIA 5 - K65X75WL">Sony BRAVIA 5 - K65X75WL</option>
                    <option value="Sony X90L - XR65X90L">Sony X90L - XR65X90L</option>
                    <option value="Hisense U88Q ULED - 65U88Q">Hisense U88Q ULED - 65U88Q</option>
                    <option value="Hisense U78Q ULED - 65U78Q">Hisense U78Q ULED - 65U78Q</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                    Comments / Questions
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your room size, viewing preferences, budget range, or any specific questions..."
                  />
                </div>
              </div>

              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg text-sm ${
                  submitMessage.includes('error') || submitMessage.includes('Sorry') 
                    ? 'bg-red-100 text-red-700 border border-red-200' 
                    : 'bg-green-100 text-green-700 border border-green-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeForm}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;