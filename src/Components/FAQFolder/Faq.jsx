import React, { useState } from 'react'
import './Faq.css'
import man from '../../Images/manSmiling.jpg'

const Faq = () => {
  const [openItem, setOpenItem] = useState(null)

  const faqData = [
    {
      question: 'What is the Pay4Me App?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'What is the payment processing timeline on the Pay4Me App?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      question: 'How does the Pay4Me App work?',
      answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
    {
      question: 'How do I get started using the Pay4Me App?',
      answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
    },
  ]

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <div className="faq-container">
      <div className="faq-tag">FAQS</div>

      <h1 className="faq-title">Got Questions?</h1>
      <p className="faq-subtitle">We've got answers</p>

      <div className="faq-content">
        <div className="faq-image">
          <img src={man} alt="Person using mobile app" />
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openItem === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                {faq.question}
                <span className="faq-icon">+</span>
              </button>

              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
