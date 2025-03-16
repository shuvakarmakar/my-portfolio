import { TypeAnimation } from 'react-type-animation';
import myImage from '../../src/assets/Shuva Karmakar.jpeg';
import { FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

    const handleDownload = async () => {
        const url = "/Resume.pdf";
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            const anchor = document.createElement("a");
            anchor.href = blobUrl;
            anchor.setAttribute("download", "Resume.pdf");
            anchor.style.display = "none";
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);

            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    };

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            easing: 'ease-in-out', // Apply ease-in-out transition
            once: true, // Animation happens once
        });
    }, []);

    return (
        <div className="bg-[#001C30] h-full md:h-[600px] flex flex-col-reverse md:flex-row justify-around items-center px-4 md:px-6 my-auto">
            <div className="md:w-1/2 relative mt-6 md:0" data-aos="fade-up">
                <h5 className="text-3xl leading-8 text-gray-400 mb-3">Hi! I'm</h5>
                <h3 className="text-white text-4xl font-extrabold mb-4 font-Caveat">Shuva Karmakar</h3>
                <TypeAnimation className='text-fuchsia-600'
                    sequence={[
                        'Frontend Web Developer',
                        1000,
                        'MERN Stack Developer',
                        1000,
                        'Digital Marketer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <div data-aos="fade-up">
                    <p className="text-white opacity-80 my-4 text-justify">
                        Welcome to my portfolio! I am a passionate MERN stack web developer with expertise in HTML, CSS, JavaScript,
                        React, Express.js, Node.js, and MongoDB. With a strong foundation in front-end development, I strive to create
                        captivating user interfaces and seamless user experiences. I enjoy turning ideas into functional and visually
                        appealing websites and web applications.
                    </p>
                </div>
                <button className='btn btn-secondary' onClick={handleDownload} data-aos="fade-up">
                    <FaDownload /> Download Resume
                </button>
            </div>
            <div data-aos="fade-up">
                <img
                    className="w-80 h-80 md:w-72 md:h-72 rounded-full border-2 p-2 border-teal-500 shadow-2xl shadow-cyan-700"
                    src={myImage}
                    alt="Shuva Karmakar"
                />
            </div>
        </div>
    );
};

export default Banner;
