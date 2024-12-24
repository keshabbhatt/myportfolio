import React, { useState } from "react";
import "./Contact.css";
import useTheme from "../../context/Context";

const Contact = () => {
    const { themeMode } = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Construct WhatsApp URL
        const whatsappNumber = "9809435364";
        const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Redirect to WhatsApp
        window.location.href = whatsappURL;
    };

    return (
        <div className="contact-form" id="contact">
            <div className="c-left" data-aos="slide-right">
                <span style={{
                    color: themeMode === "dark" ? "white" : "",
                }}>Get in Touch</span>
                <span style={{ color: themeMode === "dark" ? "#00FFFF" : "" }}>Contact me</span>
                <div className="blur1 s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="c-right" data-aos="fade-in">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" className="user" placeholder="Name" required />
                    <input type="email" name="email" className="user" placeholder="Email" required />
                    <textarea name="message" className="user" placeholder="Message" required></textarea>
                    <input type="submit" value="Send" className="btn" />
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
