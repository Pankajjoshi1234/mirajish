import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  Wrench,
  Shield,
  Zap,
  Laptop,
  Server,
  Gift,
  Menu,
  X,
  Boxes,
  CheckCircle,
  Phone,
  Mail,
  User,
} from 'lucide-react';
import './index.css';

const MirajishWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const GOOGLE_FORM_URL =
    'https://docs.google.com/forms/d/15OrCrZhW5kjtTuNakw-E9H1Wtd4UFLw9-tC4iYwbvL4/edit';
  const LOGO_URL =
    'https://drive.google.com/uc?export=view&id=1TFKYFzXaMBwKzr2T4o1XtsAK-lPfHCUg';

  const categories = [
    {
      id: 'power-tools',
      name: 'Power Tools',
      icon: Wrench,
      description: 'Industrial grade power tools for all applications',
      metaTitle: 'Power Tools Supplier & Buyer | Industrial Power Tools',
      metaDescription:
        'Connect with top power tools suppliers and buyers. Quality angle grinders, drill machines, impact wrenches, and circular saws for enterprises.',
      products: [
        { name: 'Angle Grinders', desc: 'Heavy-duty grinding solutions' },
        { name: 'Drill Machines', desc: 'Precision drilling equipment' },
        { name: 'Impact Wrenches', desc: 'High-torque fastening tools' },
        { name: 'Circular Saws', desc: 'Professional cutting equipment' },
      ],
    },
    {
      id: 'safety',
      name: 'Safety Equipment',
      icon: Shield,
      description: 'Complete safety solutions for workplace protection',
      metaTitle: 'Safety Equipment Supplier | Industrial Safety Gear',
      metaDescription:
        'Find safety helmets, gloves, shoes, and harness suppliers. Complete workplace safety solutions for enterprises.',
      products: [
        { name: 'Safety Helmets', desc: 'Head protection gear' },
        { name: 'Safety Gloves', desc: 'Hand protection equipment' },
        { name: 'Safety Shoes', desc: 'Footwear protection' },
        { name: 'Safety Harness', desc: 'Fall protection systems' },
      ],
    },
    {
      id: 'electrical',
      name: 'Electrical',
      icon: Zap,
      description: 'Electrical components and solutions',
      metaTitle: 'Electrical Components Supplier | Electrical Equipment',
      metaDescription:
        'Quality electrical components - circuit breakers, cables, LED lighting, and switchgear from trusted suppliers.',
      products: [
        { name: 'Circuit Breakers', desc: 'Power distribution equipment' },
        { name: 'Cables & Wires', desc: 'Quality electrical wiring' },
        { name: 'LED Lighting', desc: 'Energy-efficient lighting' },
        { name: 'Switchgear', desc: 'Electrical control systems' },
      ],
    },
    {
      id: 'it-laptops',
      name: 'IT Laptops',
      icon: Laptop,
      description: 'Enterprise-grade laptops and computing devices',
      metaTitle: 'IT Laptops Supplier | Enterprise Laptops & Workstations',
      metaDescription:
        'Corporate laptop suppliers offering business laptops, workstations, and IT accessories for enterprises.',
      products: [
        { name: 'Business Laptops', desc: 'Professional computing solutions' },
        { name: 'Workstations', desc: 'High-performance systems' },
        { name: 'Accessories', desc: 'Laptop peripherals & accessories' },
        { name: 'Software Solutions', desc: 'Enterprise software packages' },
      ],
    },
    {
      id: 'servers',
      name: 'Servers',
      icon: Server,
      description: 'Enterprise server solutions and data center equipment',
      metaTitle:
        'Server Supplier | Enterprise Servers & Data Center Equipment',
      metaDescription:
        'Connect with enterprise server suppliers. Rack servers, storage solutions, and networking equipment for businesses.',
      products: [
        { name: 'Rack Servers', desc: 'Scalable server infrastructure' },
        { name: 'Storage Solutions', desc: 'Data storage systems' },
        { name: 'Networking Equipment', desc: 'Network infrastructure' },
        { name: 'Server Accessories', desc: 'Server components & parts' },
      ],
    },
    {
      id: 'corporate-gifting',
      name: 'Corporate Gifting',
      icon: Gift,
      description: 'Customized corporate gifts for all occasions',
      metaTitle:
        'Corporate Gifting Supplier | Customized Business Gifts',
      metaDescription:
        'Premium corporate gift suppliers offering branded merchandise, tech gifts, and customized gift sets for enterprises.',
      products: [
        { name: 'Premium Gift Sets', desc: 'Luxury corporate gift hampers' },
        { name: 'Branded Merchandise', desc: 'Customized company branding' },
        { name: 'Tech Gifts', desc: 'Modern gadgets & accessories' },
        { name: 'Eco-Friendly Gifts', desc: 'Sustainable gift options' },
      ],
    },
    {
      id: 'material-handling',
      name: 'Material Handling',
      icon: Boxes,
      description: 'Material handling equipment and warehouse solutions',
      metaTitle:
        'Material Handling Equipment Supplier | Warehouse Solutions',
      metaDescription:
        'Quality material handling equipment suppliers - forklifts, pallet jacks, conveyors, and warehouse storage systems.',
      products: [
        { name: 'Forklifts', desc: 'Electric and diesel forklifts' },
        { name: 'Pallet Jacks', desc: 'Manual and electric pallet trucks' },
        { name: 'Conveyor Systems', desc: 'Automated material transport' },
        { name: 'Storage Systems', desc: 'Warehouse racking solutions' },
      ],
    },
  ];

  const partners = [
    'Bosch',
    'Polycab',
    'Jack & Jones',
    'Karam',
    'FAG',
    'Usha Martin',
    'Wipro',
    'Apple',
  ];

  useEffect(() => {
    if (currentPage === 'category' && selectedCategory) {
      document.title = selectedCategory.metaTitle;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = selectedCategory.metaDescription;
    } else if (currentPage === 'home') {
      document.title =
        'Mirajish India | B2B Procurement Partner | Connect Suppliers & Buyers';
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content =
        'Leading B2B procurement platform connecting suppliers and buyers for Power Tools, Safety Equipment, Electrical, IT Laptops, Servers, Corporate Gifting & Material Handling.';
    }
  }, [currentPage, selectedCategory]);

  const Header = () => (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div>
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                Mirajish India
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                Private Limited
              </p>
            </div>
          </div>

          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-gray-700 hover:text-red-600 transition font-medium text-sm lg:text-base"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="text-gray-700 hover:text-red-600 transition font-medium text-sm lg:text-base"
            >
              About Us
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="text-gray-700 hover:text-red-600 transition font-medium text-sm lg:text-base"
            >
              Contact Us
            </button>
            <button
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-4 lg:px-6 py-2 rounded-lg hover:shadow-lg transition font-medium text-sm lg:text-base"
            >
              Get Started
            </button>
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-gray-100 pt-4">
            <button
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-red-600 transition font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-red-600 transition font-medium py-2"
            >
              About Us
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-red-600 transition font-medium py-2"
            >
              Contact Us
            </button>
            <button
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium w-full"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="pt-16 md:pt-24">
      <section className="bg-gradient-to-br from-red-50 to-amber-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
                Procurement Partner
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Connecting enterprises with quality suppliers across Power Tools,
              Safety Equipment, Electrical, IT Solutions, Servers, Corporate
              Gifting, and Material Handling.
            </p>
            <button
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
            >
              Partner With Us <ChevronRight className="inline ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            Our Categories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white border-2 border-gray-100 rounded-xl p-5 md:p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105"
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage('category');
                  }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                    {category.name}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <span className="text-red-600 font-semibold flex items-center text-sm md:text-base">
                    Explore <ChevronRight size={18} className="ml-1" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
            Our Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 md:p-6 flex items-center justify-center shadow-md hover:shadow-xl transition min-h-[100px] md:min-h-[120px]"
              >
                <p className="font-bold text-gray-800 text-center text-base md:text-lg">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-16 md:pt-24">
      <section className="py-12 md:py-20 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            About Mirajish India
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Who We Are
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Mirajish India Private Limited is a leading procurement partner
              serving large enterprises across India. We specialize in
              connecting businesses with quality suppliers across multiple
              categories including Power Tools, Safety Equipment, Electrical
              Components, IT Laptops, Servers, Corporate Gifting, and Material
              Handling solutions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Our Experience
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              With years of experience in the procurement industry, we have
              built strong relationships with both suppliers and buyers. Our
              expertise spans across diverse categories, ensuring that we can
              meet the varied needs of modern enterprises. We pride ourselves on
              our ability to source quality products efficiently and
              cost-effectively.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              To bridge the gap between suppliers and buyers, providing seamless
              procurement solutions that drive business growth. We are committed
              to delivering excellence, building lasting partnerships, and
              maintaining the highest standards of quality and service.
            </p>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
            >
              Start Your Partnership Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-16 md:pt-24">
      <section className="py-12 md:py-20 bg-gradient-to-br from-red-50 to-amber-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
            Contact Us
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-base md:text-lg mb-8">
                Get in touch with us for any procurement needs. We're here to
                help connect you with the right suppliers and buyers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Contact Person
                  </h3>
                  <p className="text-gray-700 text-lg">Pankaj Joshi</p>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+918971027740"
                    className="text-gray-700 text-lg hover:text-red-600 transition"
                  >
                    +91 8971027740
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-br from-red-50 to-amber-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:pankaj.joshi@mirajish.com"
                    className="text-gray-700 text-lg hover:text-red-600 transition break-all"
                  >
                    pankaj.joshi@mirajish.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                Ready to start your procurement journey?
              </p>
              <button
                onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
                className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const CategoryPage = () => {
    const Icon = selectedCategory?.icon;

    return (
      <div className="pt-16 md:pt-24">
        <section className="py-12 md:py-20 bg-gradient-to-br from-red-50 to-amber-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setCurrentPage('home')}
              className="mb-6 md:mb-8 text-red-600 font-semibold flex items-center hover:text-red-700 transition text-sm md:text-base"
            >
              ← Back to Categories
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center mr-0 sm:mr-4 mb-4 sm:mb-0">
                {Icon && <Icon className="text-white" size={36} />}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  {selectedCategory?.name}
                </h1>
                <p className="text-gray-600 text-base md:text-lg mt-1">
                  {selectedCategory?.description}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                Looking for {selectedCategory?.name} Suppliers or Buyers?
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Connect with verified suppliers and buyers in the{' '}
                {selectedCategory?.name.toLowerCase()} category. Whether you're
                looking to source products or expand your customer base, we're
                here to help.
              </p>
              <button
                onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
                className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition text-sm md:text-base"
              >
                Connect Now - Are You a Supplier or Buyer?
              </button>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
              Popular Products in {selectedCategory?.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {selectedCategory?.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-5 md:p-6 hover:shadow-xl transition"
                >
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">
                    {product.desc}
                  </p>
                  <button
                    onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
                    className="w-full bg-gradient-to-r from-red-600 to-amber-500 text-white py-2 md:py-2.5 rounded-lg font-semibold hover:shadow-lg transition text-sm md:text-base"
                  >
                    Inquire Now
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                Why Choose Mirajish India for {selectedCategory?.name}?
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>Verified suppliers and buyers network</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>Competitive pricing and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>Quick turnaround and reliable delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>Dedicated support for enterprise needs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
              Mirajish India
            </h4>
            <p className="text-gray-400">
              Your trusted procurement partner for enterprise solutions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => setCurrentPage('home')}
                className="block text-gray-400 hover:text-white transition"
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="block text-gray-400 hover:text-white transition"
              >
                About Us
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="block text-gray-400 hover:text-white transition"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Get Started</h4>
            <button
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium"
            >
              Partner With Us
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mirajish India Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'category' && <CategoryPage />}
      <Footer />
    </div>
  );
};

export default MirajishWebsite;
