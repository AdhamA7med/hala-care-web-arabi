
import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "عميل راضي"
    },
    {
      icon: Award,
      number: "50+",
      label: "ممرض مرخص"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "خدمة مستمرة"
    },
    {
      icon: Heart,
      number: "5",
      label: "سنوات خبرة"
    }
  ];

  const values = [
    {
      title: "الجودة والامتياز",
      description: "نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا التمريضية"
    },
    {
      title: "الثقة والأمان",
      description: "فريقنا مرخص ومؤهل لضمان سلامة وراحة مرضانا"
    },
    {
      title: "الرعاية الشخصية",
      description: "نهتم بكل مريض كفرد له احتياجات خاصة ومتطلبات فريدة"
    },
    {
      title: "الاستجابة السريعة",
      description: "نحن متاحون على مدار الساعة للاستجابة لطلباتكم العاجلة"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            من نحن
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            هلا كير هي شركة رائدة في مجال خدمات التمريض المنزلي، نسعى لتقديم رعاية طبية متميزة في راحة منازلكم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              رؤيتنا ورسالتنا
            </h3>
            <p className="text-gray-600 leading-relaxed">
              في هلا كير، نؤمن بأن كل شخص يستحق الحصول على رعاية طبية عالية الجودة في راحة منزله. نحن نجمع بين الخبرة الطبية المتخصصة والرعاية الإنسانية لنقدم خدمات تمريض منزلي تتجاوز توقعاتكم.
            </p>
            <p className="text-gray-600 leading-relaxed">
              فريقنا من الممرضين والممرضات المرخصين يتمتع بسنوات من الخبرة في المجال الطبي، ونحن ملتزمون بالتطوير المستمر ومواكبة أحدث المعايير الطبية العالمية.
            </p>
            
            {/* Why Choose Us */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">لماذا تختار هلا كير؟</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-medical-gray rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">{value.title}</h5>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-medical-lightBlue rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-16 w-16 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                التزامنا نحو رعايتكم
              </h4>
              <p className="text-gray-600">
                نحن هنا لنكون شركاء في رحلة شفائكم وتعافيكم
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-medical-teal rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-medical-gray rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            أرقام تتحدث عن نجاحنا
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            فريق العمل
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            يتكون فريقنا من نخبة من الممرضين والممرضات المرخصين ذوي الخبرة والكفاءة العالية في مختلف التخصصات الطبية
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { specialty: "تمريض العناية المركزة", count: "15+" },
              { specialty: "تمريض كبار السن", count: "20+" },
              { specialty: "تمريض الأطفال", count: "10+" }
            ].map((team, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-2xl font-bold text-primary mb-2">{team.count}</div>
                <div className="text-gray-900 font-semibold">{team.specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
