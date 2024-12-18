import React from 'react';
import { useState } from 'react';

import '../style.css';

const Contact = () => {
    let [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!input.name || !input.email || !input.message) {
            alert('All fields are required!');
        }
        if (!isValidEmail(input.email)) {
            alert('Please enter a valid email address!');
            return;
            }  
            return;
        }
    return (
        <section>

            <h2 className='header-h1'>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="small-contact-info" type="text" name="name" onChange={handleChange} value={input.name} />
                </label>
                <label>
                    Email:
                    <input className="small-contact-info" type="text" name="email" onChange={handleChange} value={input.email} />
                </label>
                <label>
                    Message:
                    <textarea className="contact-info" name="message" onChange={handleChange} value={input.message} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
export default Contact;