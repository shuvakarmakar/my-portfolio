import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_service, import.meta.env.VITE_template, form.current, import.meta.env.VITE_public)
            .then((result) => {
                console.log(result.text);
                console.log('Message Sent');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
            <div className='w-3/5'>
                <form className="w-full mx-auto px-6" ref={form} onSubmit={sendEmail}>
                    <label className="block mb-2">Name</label>
                    <input className="w-full border border-gray-300 rounded px-3 py-2 mb-4" type="text" name="user_name" />

                    <label className="block mb-2">Email</label>
                    <input className="w-full border border-gray-300 rounded px-3 py-2 mb-4" type="email" name="user_email" />

                    <label className="block mb-2">Message</label>
                    <textarea className="w-full border border-gray-300 rounded px-3 py-2 mb-4" name="message" />

                    <input className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;