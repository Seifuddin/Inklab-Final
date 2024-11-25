import React, { useState } from 'react';
import './Questions.css'; // Import the external CSS

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: 'What type of printing services do you offer?', answer: 'We offer a wide range of printing services including business cards, bronchures, posters, banners, custom packaging, and large format printing. If you have a unique request, feel free to contact us, we will do our best to accommodate ypur needs. ' },
    { question: 'Do you offer custom sizes and finishes?', answer: 'Yes, we provide a range of custom sizes and finishing options, such as gloss, matte, and UV coatings. You can also choose specialty options like embrossing, foiling, and die-cutting to add a unique touch to your project.' },
    { question: 'Can i see a sample before placing a large order?', answer: 'Yes, we can provide a printed sample or a proof upon request. This helps ensure you are happy with the quality and design before committing to a full print run.' },
    { question: 'What is the minimum order quantity?', answer: 'Our minimum order quantity varies by product type. For items like business cards, we typically have a low minimum, while larger items, such as posters or custom packaging, maay require higher quantities. Contact us for specific details on your product of interest.' },
    { question: 'Do you offer design services?', answer: 'Absolutely! Our team of experienced designers can assist you with creating eye-catching, proffessional designs. If you need help bringing your vision into life, just let us know, and we can discuss our design packages.' },
    { question: 'How can i ensure my colors print accurately?', answer: 'We reccommend submiting files in CMYK color mode for the most accurate color results, as colors on your screen (RGB) may differ slightly in print. If you have specific color requirements, please inform us and we can work to match them as closely as possible.' },
    { question: 'Dou you offer deliverly or pickup options?', answer: 'Yes, we offer both deliverly and pickup options. You can choose the option that best fits your schedule when you place your order. Deliverly charges may apply depending on your location.' },
    { question: 'What payment methods do you accept?', answer: 'We accept most major payment methods, including cash, credit cards, and digital payments option like Lipa na M-Pesa, Pochi La Biashara, PayBill. Payment terms can also be discussed for larger orderss or repeat clients.' },
    { question: 'Can i cancel ormodify my order after placing it?', answer: 'If you need to cancel or modify an order, plaese contact us as soon as possible. Once printing has started, changes may no longer be possible, and cancellation fees may apply.' },
    // Add more questions here
  ];

  return (
    <div className="faq-container container-fluid mt-0 pb-5">
            <h3 className="Trusted-ttle display-5 text-center m-5 fw-bold"> Frequently asked Questions</h3>
            <p className="saying-questions h3 text-center p-5 pt-0">"Get the information you want before you print. Everything you need to know know about our printing services"</p>
      <div className="faq-grid container">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question h5 text-white" onClick={() => toggleDropdown(index)}>
              {item.question}
              <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer h5">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;