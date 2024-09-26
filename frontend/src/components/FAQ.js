import React, { useState, useEffect } from 'react';
import '../styles/FAQ.css'; // Assuming your CSS is in FAQ.css

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Use effect to handle fade-in animation on component mount
    useEffect(() => {
        const elements = document.querySelectorAll('.faq-item');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 100); // Stagger the animation
        });
    }, []);

    const faqs = [
        {
            question: "What is custom application development services?",
            answer: "Custom application development services involve creating software applications tailored to the specific needs and requirements of a business or individual. These services encompass the entire development process, including design, coding, testing, and deployment, to ensure the final product meets unique business objectives."
        },
        {
            question: "What bespoke software development services do you provide?",
            answer: "We offer a range of bespoke software development services including custom application development, web and mobile app development, system integrations, and tailored solutions for unique business processes. Our services are designed to address specific needs and optimize operational efficiency."
        },
        {
            question: "What is the cost of custom software development?",
            answer: "The cost of custom software development varies based on factors such as project complexity, the technology stack used, and the time required for development. Typically, costs are determined after assessing the project requirements and creating a detailed proposal."
        },
        {
            question: "How does the custom software development process look like?",
            answer: "The custom software development process generally includes the following stages: requirement analysis, design, development, testing, deployment, and maintenance. Each stage involves close collaboration with the client to ensure the software meets their needs and expectations."
        },
        {
            question: "What are the benefits of custom software development?",
            answer: "Custom software development offers several benefits, including tailored solutions that fit specific business needs, improved efficiency and productivity, better integration with existing systems, and scalability for future growth. Custom software can also provide a competitive edge by addressing unique market requirements."
        },
        {
            question: "What is the typical timeline for custom software development projects?",
            answer: "The timeline for custom software development projects can vary widely depending on the project's scope and complexity. On average, development can take from a few weeks to several months. A detailed timeline is usually provided after an initial project assessment."
        },
        {
            question: "How do you ensure the security of custom software?",
            answer: "We ensure the security of custom software by implementing robust security measures throughout the development process. This includes using encryption, secure coding practices, regular security testing, and adherence to industry standards and best practices. Ongoing security updates and support are also provided to address emerging threats."
        }
    ];

    const truncateText = (text, length) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        <div className="faq-container">
            <h2 className="faq-title">FAQ</h2>
            <p className="faq-text">Frequently asked questions</p>
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <div className="faq-question">{faq.question}</div>
                    <div className="faq-answer-container">
                        <p className={`faq-answer ${openIndex === index ? 'faq-answer-expanded' : ''}`}>
                            {openIndex === index ? faq.answer : truncateText(faq.answer, 100)}
                        </p>
                        <button
                            className={`read-more-btn ${openIndex === index ? 'expanded' : ''}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            {openIndex === index ? '➖' : '➕'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
