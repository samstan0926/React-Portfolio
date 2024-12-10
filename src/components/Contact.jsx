import React from 'react';
import { useState } from 'react';
import Header from './Header.jsx';
import '../../style.css';

const Contact = () => {


    const handleChange = (e) => {
        const { name, value } = e.target;
        const [input, setInput] = useState({
            name: '',
            email: '',
            message: ''
        });
        setInput(prevInput => ({
            prevInput,
            [name]: value
        }));
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const [input, setInput] = useState({
            name: '',
            email: '',
            message: ''
        });
        if (!input.name || !input.email || !input.message) {
            alert('All fields are required!');
            return;
        }
        if (!isValidEmail(input.email)) {
            alert('Please enter a valid email address!');
            return;
        }  
            return;
        }
    return (
        <section>
            <Header />
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