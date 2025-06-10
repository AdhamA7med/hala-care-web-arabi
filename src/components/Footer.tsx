
import React from 'react';
import { Heart, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" fill="white"/>
                  <path d="M20.2 20.2a16 16 0 0 1-16.41 0C3 20 3 14 9 9a2 2 0 0 1 6 0c6 5 6 11 5.2 11.2Z" fill="white"/>
                </svg>
              </div>
              <span className="text-2xl font-bold">مكتب نيرس لاين</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              خدمات التمريض المنزلي المتخصصة في القاهرة، مصر. نقدم رعاية طبية احترافية في راحة منزلكم مع فريق من أفضل الممرضين المرخصين.
            </p>
            <div className="flex items-center text-primary">
              <Heart className="h-5 w-5 ml-2" />
              <span className="text-sm">نهتم براحتكم وصحتكم</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  خدماتنا
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  من نحن
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('testimonials');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  آراء العملاء
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  اتصل بنا
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">خدماتنا</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• رعاية كبار السن</li>
              <li>• الرعاية بعد العمليات</li>
              <li>• الحقن المنزلي</li>
              <li>• الرعاية المستمرة</li>
              <li>• الرعاية التخصصية</li>
              <li>• الاستشارات الطبية</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                <a href="tel:01018485283" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  01500841180
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                <a 
                  href="https://wa.me/201500841180" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  واتساب: 01500841180
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary ml-2 flex-shrink-0" />
                <span className="text-gray-300">القاهرة، مصر</span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-900/50 rounded-lg p-4 mt-6">
              <h4 className="font-bold text-red-300 mb-2">طوارئ 24/7</h4>
              <a 
                href="tel:01018485283"
                className="flex items-center text-white hover:text-red-300 transition-colors duration-300"
              >
                <Phone className="h-4 w-4 ml-2" />
                01500841180
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 مكتب الهدي. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm">
              تم تطوير الموقع بواسطة ادهم احمد
            </p>
          </div>
          
          {/* Back to Top */}
          <div className="text-center mt-6">
            <button
              onClick={scrollToTop}
              className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
