
import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Users } from 'lucide-react';

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
      icon: MessageCircle,
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

  const workingHours = [
    { day: "السبت - الخميس", hours: "24 ساعة" },
    { day: "الجمعة", hours: "24 ساعة" },
    { day: "الطوارئ", hours: "متاح دائماً" }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              معلومات التواصل
            </h3>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.includes('wa.me') ? '_blank' : '_self'}
                    rel={method.link.includes('wa.me') ? 'noopener noreferrer' : ''}
                    className="block bg-medical-gray rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
                    <p className="text-primary font-bold mb-1">{method.info}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </a>
                );
              })}
            </div>

            {/* Working Hours */}
            <div className="bg-medical-lightBlue rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-primary ml-2" />
                ساعات العمل
              </h4>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-primary font-bold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-800 mb-2 flex items-center">
                <Users className="h-6 w-6 text-red-600 ml-2" />
                حالات الطوارئ
              </h4>
              <p className="text-red-700 mb-4">
                في حالات الطوارئ الطبية، تواصلوا معنا فوراً على:
              </p>
              <a
                href="tel:01008481613"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <Phone className="h-5 w-5 ml-2" />
                01008481613
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-medical-gray rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              احجز استشارة مجانية
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="01xxxxxxxxx"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  نوع الخدمة المطلوبة
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                >
                  <option value="">اختر نوع الخدمة</option>
                  <option value="elderly-care">رعاية كبار السن</option>
                  <option value="post-surgery">الرعاية بعد العمليات</option>
                  <option value="injections">الحقن المنزلي</option>
                  <option value="continuous-care">الرعاية المستمرة</option>
                  <option value="specialized-care">الرعاية التخصصية</option>
                  <option value="consultations">الاستشارات الطبية</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  تفاصيل إضافية
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="أخبرنا المزيد عن احتياجاتك..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full btn-medical"
                >
                  إرسال الطلب
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  سنتواصل معكم خلال 30 دقيقة من إرسال الطلب
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            أو تواصل معنا مباشرة
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/201008481613"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="h-6 w-6 ml-2" />
              واتساب: 01008481613
            </a>
            <a
              href="tel:01008481613"
              className="flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="h-6 w-6 ml-2" />
              اتصال: 01008481613
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
