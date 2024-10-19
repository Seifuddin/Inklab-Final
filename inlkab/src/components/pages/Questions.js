import React, { useState } from 'react';
import './Questions.css'; // Import the external CSS

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: 'Who are the Capvim Pusblishers?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'what services are offered by Capvim?', answer: 'useState is a Hook that lets you add state to functional components.' },
    { question: 'Where is Capvim located?', answer: 'JSX is a syntax extension for JavaScript that looks like HTML.' },
    { question: 'How can i contact Capvim?', answer: 'The virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM.' },
    { question: 'Do Capvim have other branches?', answer: 'The virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM.' },
    { question: 'What is the virtual DOM?', answer: 'The virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM.' },
    { question: 'What is the virtual DOM?', answer: 'The virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM.' },
    { question: 'What is the virtual DOM?', answer: 'The virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM.' },
    { question: 'What is the virtual DOM?', answer: 'The virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM.' },
    // Add more questions here
  ];

  return (
    <div className="faq-container border container-fluid mt-0 pb-5">
            <h3 className="Trusted-ttle display-5 text-center m-5 fw-bold"> Frequently asked Questions</h3>
      <div className="faq-grid container">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question h5" onClick={() => toggleDropdown(index)}>
              {item.question}
              <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer h6 text-danger">
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