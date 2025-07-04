
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "فاطمة أحمد",
      age: "والدة محمد - 75 سنة",
      rating: 5,
      text: "خدمة ممتازة جداً! الممرضة كانت محترفة ولطيفة مع والدي. شعرنا بالراحة والأمان. أنصح الجميع بمكتب ترو كير.",
      service: "رعاية كبار السن"
    },
    {
      name: "أحمد محمود",
      age: "مريض سكري - 55 سنة",
      rating: 5,
      text: "فريق مكتب ترو كير ساعدني كثيراً في إدارة مرض السكري. الممرضة تأتي في الوقت المحدد وتتابع حالتي بعناية فائقة.",
      service: "رعاية مرضى السكري"
    },
    {
      name: "مريم خالد",
      age: "بعد عملية جراحية",
      rating: 5,
      text: "بعد عمليتي الجراحية، كنت بحاجة لرعاية خاصة. فريق مكتب ترو كير قدم لي أفضل رعاية في منزلي. شكراً لكم.",
      service: "الرعاية بعد العمليات"
    },
    {
      name: "عبدالله سعد",
      age: "والد مريضة - 45 سنة",
      rating: 5,
      text: "ابنتي كانت تحتاج حقن يومية، وفريق مكتب ترو كير جعل الأمر سهلاً علينا. خدمة احترافية ومواعيد دقيقة.",
      service: "الحقن المنزلي"
    },
    {
      name: "نادية حسن",
      age: "مريضة ضغط - 62 سنة",
      rating: 5,
      text: "المتابعة المستمرة من فريق مكتب نيرس لاين ساعدتني في السيطرة على ضغط الدم. فريق محترف وودود.",
      service: "الرعاية المستمرة"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-medical-gray">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفتخر بثقة عملائنا وآرائهم الإيجابية حول خدماتنا. كلماتهم هي شهادة على جودة الرعاية التي نقدمها
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="h-16 w-16 text-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 ${
                      i < testimonials[currentTestimonial].rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 mb-2">
                  {testimonials[currentTestimonial].age}
                </p>
                <div className="inline-block bg-medical-lightBlue text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonials[currentTestimonial].service}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 100)}..."
              </p>

              {/* Client */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            كن جزءاً من عائلة عملائنا الراضين
          </h3>
          <p className="text-gray-600 mb-6">
            انضم إلى المئات من العملاء الذين يثقون في خدماتنا
          </p>
          <a
            href="https://wa.me/201500841180"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-medical"
          >
            احجز استشارتك المجانية
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
