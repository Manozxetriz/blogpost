import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section>
        <hr className="section1-divider" />
        <h1 className="section1-header">
            <span className="text-black mr-2">•</span>
            Reach Out
            <span className="text-black mr-2">•</span>
        </h1>
        <p className="section1-paragraph">
            "Whether you have a project in mind, a question, or just want to say hello, feel free to reach out. I'm always open to new opportunities and meaningful conversations."
        </p>
        <div className="contact-container">
            <form
            action="https://formsubmit.co/xetrizmanoz3@gmail.com"
            method="POST"
            >

            <div className="form-row">
                <select name="topic" id="topic" required>
                <option value="" disabled selected>
                    I'd like to chat about...
                </option>
                <option value="collaboration">Collaboration</option>
                <option value="project">Project Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
                </select>
            </div>

            <div className="form-row">
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                />
                <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
                />
            </div>

            <div className="form-row">
                <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
                ></textarea>
            </div>

            <button type="submit" className="submit-btn">
                SUBMIT
            </button>
            </form>
        </div>
        </section>
    );
};

export default Contact;
