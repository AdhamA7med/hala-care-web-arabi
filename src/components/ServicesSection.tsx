import React from 'react';
import { Heart, Users, Syringe, Clock, Shield, Star, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "رعاية كبار السن",
      description: "رعاية شاملة ومتخصصة لكبار السن في راحة منازلهم مع فريق مدرب على أعلى مستوى",
      features: ["مراقبة العلامات الحيوية", "إعطاء الأدوية", "العناية الشخصية", "المرافقة والدعم النفسي"]
    },
    {
      icon: Users,
      title: "الرعاية بعد العمليات",
      description: "عناية طبية متخصصة للمرضى بعد العمليات الجراحية لضمان تعافي سريع وآمن",
      features: ["تغيير الضمادات", "مراقبة الجروح", "إدارة الألم", "العلاج الطبيعي"]
    },
    {
      icon: Syringe,
      title: "الحقن المنزلي",
      description: "خدمة الحقن الطبي في المنزل بأيدي ممرضين مختصين وبأعلى معايير السلامة",
      features: ["حقن عضلي ووريدي", "حقن الأنسولين", "اللقاحات", "السوائل الوريدية"]
    },
    {
      icon: Clock,
      title: "الرعاية المستمرة",
      description: "خدمة رعاية على مدار الساعة للحالات التي تحتاج إلى متابعة طبية مستمرة",
      features: ["مراقبة مستمرة", "تقارير دورية", "تنسيق مع الأطباء", "خطة علاجية شاملة"]
    },
    {
      icon: Shield,
      title: "الرعاية التخصصية",
      description: "خدمات تمريض متخصصة للحالات المرضية المختلفة بواسطة فريق ذو خبرة عالية",
      features: ["رعاية مرضى السكري", "رعاية مرضى الضغط", "رعاية الجروح", "رعاية المسنين"]
    },
    {
      icon: Star,
      title: "الاستشارات الطبية",
      description: "استشارات طبية وتمريضية من المنزل مع إمكانية التنسيق مع الأطباء المختصين",
      features: ["تقييم الحالة الصحية", "نصائح طبية", "متابعة العلاج", "برامج الوقاية"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            خدماتنا المتخصصة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات التمريض المنزلي المتخصصة لضمان حصولكم على أفضل رعاية طبية في راحة منازلكم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="medical-card p-6 group animate-on-scroll"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Service Icon */}
                <div className="w-16 h-16 bg-medical-lightBlue rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="https://wa.me/201008481613"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark font-semibold text-sm transition-colors duration-300 inline-flex items-center group"
                  >
                    احجز الخدمة الآن
                    <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 medical-card">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              هل تحتاج خدمة مخصصة؟
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              نحن هنا لخدمتكم! تواصلوا معنا لمناقشة احتياجاتكم الخاصة وسنقوم بتصميم برنامج رعاية مناسب لحالتكم
            </p>
            <a
              href="https://wa.me/201008481613"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-medical inline-flex items-center"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
