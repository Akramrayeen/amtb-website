import React, { useState, useRef } from 'react';
import axios from 'axios';

const ContactForm = ({ className, style }) => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        projectDetails: '',
        file: null
    });

    const fileInputRef = useRef(null); // Reference to the file input

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(""); // Notification message
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const clearForm = () => {
        setFormData({
            name: '',
            companyName: '',
            email: '',
            phoneNumber: '',
            projectDetails: '',
            file: null
        });

        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the file input
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setNotification(""); // Clear previous notification
        setError(null); // Clear previous errors

        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('companyName', formData.companyName);
        formDataObj.append('email', formData.email);
        formDataObj.append('phoneNumber', formData.phoneNumber);
        formDataObj.append('projectDetails', formData.projectDetails);
        if (formData.file) {
            formDataObj.append('file', formData.file);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status >= 200 && response.status < 300) {
                setNotification("Form submitted successfully. Our team will contact you as soon as possible!");
                clearForm(); // Clear form fields
            } else {
                throw new Error('Server responded with an error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Form submitted successfully. Our team will contact you as soon as possible!.');
            clearForm(); // Clear form fields even if there's an error
        } finally {
            setIsSubmitting(false);
            // Hide notification or error after 5 seconds
            setTimeout(() => {
                setNotification("");
                setError(null);
            }, 5000); // 5 seconds
        }
    };

    return (
        <div className={`contact-container ${className}`} style={style}>
            <h2>Contact Us</h2>
            {notification && <p className="success-message">{notification}</p>} {/* Display success message */}
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <form className="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                    type="text"
                    name="name"
                    className="contact-input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="companyName"
                    className="contact-input"
                    placeholder="Your Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    className="contact-input"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    className="contact-input"
                    placeholder="Your Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="projectDetails"
                    className="contact-textarea"
                    rows="4"
                    placeholder="Tell us about your project"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="file"
                    name="file"
                    className="contact-input"
                    onChange={handleFileChange}
                    ref={fileInputRef} // Attach the ref to the file input
                />
                <button type="submit" className="contact-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
