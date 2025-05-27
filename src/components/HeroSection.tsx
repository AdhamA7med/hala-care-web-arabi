
import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center medical-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-white/50 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/30 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto section-padding relative z-10">
        <div className="text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            حلا كير
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
              خدمات التمريض المنزلي
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            رعاية طبية متخصصة في راحة منزلك مع فريق من أفضل الممرضين والممرضات المرخصين
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-white rounded-full ml-2"></div>
              <span className="text-lg">متوفرون 24/7</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-white rounded-full ml-2"></div>
              <span className="text-lg">فريق مرخص</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-white rounded-full ml-2"></div>
              <span className="text-lg">خدمة سريعة</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.9s'}}>
            <a
              href="https://wa.me/201008481613"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="ml-2 h-6 w-6" />
              تواصل عبر واتساب
            </a>
            <a
              href="tel:01008481613"
              className="flex items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="ml-2 h-6 w-6" />
              01008481613
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center mt-8 text-white/90 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <MapPin className="ml-2 h-5 w-5" />
            <span className="text-lg">القاهرة، مصر</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
