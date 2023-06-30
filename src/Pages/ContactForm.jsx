import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLocationArrow, FaMailBulk, FaPhoneAlt, FaFacebook, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, form.current, process.env.REACT_APP_EMAILJS_USER)
            .then((result) => {
                console.log(result.text);
                console.log('Message Sent');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='px-4'>
            <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=''>
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
                <div className='md:w-1/2 mx-auto'>
                    <h3 className='text-2xl font-bold text-white'>Contact Info</h3>
                    <p className='flex items-center my-3 text-white gap-3'> <FaMailBulk /> Email: shuvakarmakar@gmail.com</p>
                    <p className='flex items-center my-3 text-white gap-3'> <FaPhoneAlt /> Phone: +8801684422951</p>
                    <p className='flex items-center my-3 text-white gap-3'> <FaLocationArrow /> Location: 12/1 S.K.Road, Narayanganj</p>

                    <h3 className='text-2xl font-bold text-white'>Social Link : </h3>
                    <div className='flex items-center mt-6 gap-8'>
                        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-500 transition-colors duration-300'>
                            <FaFacebook className='mr-2 text-xl' />
                        </a>
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-500 transition-colors duration-300'>
                            <FaLinkedin className='mr-2 text-xl' />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className='text-white hover:text-green-500 transition-colors duration-300'>
                            <FaWhatsapp className='mr-2 text-xl' />
                        </a>
                        <a href="https://github.com/shuvakarmakar" target="_blank" rel="noopener noreferrer" className='text-white hover:text-gray-500 transition-colors duration-300'>
                            <FaGithub className='mr-2 text-xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactForm;