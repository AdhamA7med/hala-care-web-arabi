
import React from 'react';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا",
      info: "01008481613",
      link: "tel:01008481613",
      description: "متاحون للرد على استفساراتكم"
    },
    {
      icon: MessageSquare,
      title: "واتساب",
      info: "01008481613",
      link: "https://wa.me/201008481613",
      description: "تواصل سريع ومباشر"
    },
    {
      icon: MapPin,
      title: "الموقع",
      info: "القاهرة، مصر",
      link: "#",
      description: "نخدم جميع أنحاء القاهرة"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      info: "24/7",
      link: "#",
      description: "خدمة متواصلة على مدار الساعة"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم في أي وقت. تواصلوا معنا للحصول على استشارة مجانية أو لحجز خدماتكم
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target={method.link.includes('wa.me') ? '_blank' : '_self'}
                rel={method.link.includes('wa.me') ? 'noopener noreferrer' : ''}
                className="block bg-medical-gray rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h4>
                <p className="text-primary font-bold text-lg mb-2">{method.info}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </a>
            );
          })}
        </div>

        {/* Main Contact Card */}
        <div className="bg-medical-lightBlue rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            هل تحتاج خدمة طبية منزلية؟
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على استشارة مجانية وحجز الخدمة المناسبة لك
          </p>
          
          {/* Contact Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/201008481613"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <MessageSquare className="h-6 w-6 ml-2" />
              تواصل عبر واتساب
            </a>
            <a
              href="tel:01008481613"
              className="flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              <Phone className="h-6 w-6 ml-2" />
              اتصال مباشر
            </a>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
          <h4 className="text-2xl font-bold text-red-800 mb-4">
            حالات الطوارئ
          </h4>
          <p className="text-red-700 text-lg mb-4">
            في حالات الطوارئ الطبية، تواصلوا معنا فوراً
          </p>
          <a
            href="tel:01008481613"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            <Phone className="h-6 w-6 ml-2" />
            01008481613
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
