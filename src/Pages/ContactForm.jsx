import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';

const ContactForm = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_service, import.meta.env.VITE_template, form.current, import.meta.env.VITE_public)
            .then((result) => {
                console.log(result.text);
                console.log('Message Sent');
                // Reset the form
                form.current.reset();

                // Display success message using Swal
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Message Has Been Sent Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='px-4 mb-10' id='contact'>
            <h2 className='text-4xl font-bold text-center my-10 md:my-16'>Contact Me</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='' data-aos='fade-right'>
                    <form className='w-full mx-auto px-6' ref={form} onSubmit={sendEmail}>
                        <h3 className='text-2xl font-bold mb-3 text-white'>Write Me Here :</h3>
                        <label className='block mb-2 text-white'>Name</label>
                        <input
                            className='w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
                            type='text'
                            name='user_name'
                            placeholder='Enter your name'
                        />

                        <label className='block mb-2 text-white'>Email</label>
                        <input
                            className='w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
                            type='email'
                            name='user_email'
                            placeholder='Enter your email'
                        />

                        <label className='block mb-2 text-white'>Message</label>
                        <textarea
                            className='w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
                            name='message'
                            placeholder='Enter your message'
                        />

                        <input
                            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                            type='submit'
                            value='Send'
                        />
                    </form>
                </div>
                <div className='md:w-1/2 mx-auto' data-aos='fade-left'>
                    <h3 className='text-2xl font-bold text-white'>Contact Info</h3>
                    <p className='flex items-center my-3 text-white gap-3'>
                        {' '}
                        <FaMailBulk /> Email: shuvakarmakar@gmail.com
                    </p>
                    <p className='flex items-center my-3 text-white gap-3'>
                        {' '}
                        <FaPhoneAlt /> Phone: +8801684422951
                    </p>
                    <p className='flex items-center my-3 text-white gap-3'>
                        {' '}
                        <FaLocationArrow /> Location: 12/1 S.K.Road, Narayanganj
                    </p>

                    <h3 className='text-2xl font-bold text-white'>Social Link:</h3>
                    <div className='flex items-center mt-6 gap-8'>
                        <a
                            href='https://web.facebook.com/shuvakarmakar97'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-blue-500 transition-colors duration-300'
                        >
                            <FaFacebook className='mr-2 text-2xl' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/shuvakarmakar97/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-blue-500 transition-colors duration-300'
                        >
                            <FaLinkedin className='mr-2 text-2xl' />
                        </a>
                        <a
                            href='https://wa.link/8rfr1f'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-green-500 transition-colors duration-300'
                        >
                            <FaWhatsapp className='mr-2 text-2xl' />
                        </a>
                        <a
                            href='https://github.com/shuvakarmakar'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-gray-500 transition-colors duration-300'
                        >
                            <FaGithub className='mr-2 text-2xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactForm;