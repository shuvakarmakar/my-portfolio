import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myImage from '../../public/Shuva Karmakar.jpg';

const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <h2 className="text-4xl text-white font-bold text-center my-10 md:my-16" id="about">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start px-4">
                <div className="md:w-1/2" data-aos="fade-up" data-aos-duration="1000">
                    <img src={myImage} alt="Profile" className="w-full h-auto rounded-md" />
                </div>
                <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0" data-aos="fade-up" data-aos-duration="1000">
                    <p className="p-8 text-lg text-teal-300 text-justify">
                        Hello! My name is <span className="text-blue-500">Shuva Karmakar</span>, and I am a passionate MERN stack developer. I hold a degree in Computer Science and Engineering from Daffodil International University. I just finished a thorough web development boot camp from <span className='text-lime-300'>Programming Hero</span> where I got to work with the MERN stack firsthand.
                        <br />
                        <br />
                        As a MERN stack developer, I have honed my skills in front-end and back-end web development, allowing me to build dynamic and interactive web applications. With expertise in React.js, I create captivating user interfaces that provide a seamless user experience. Leveraging the power of Express.js and Node.js, I develop robust and scalable server-side applications, ensuring smooth data flow and efficient handling of requests.
                        <br />
                        <br />
                        Throughout my academic and professional journey, I have actively engaged in various projects that have helped me develop a diverse skill set. I have experience working with different libraries, frameworks, and tools such as Tailwind, Bootstrap, Firebase, Git, and WordPress, among others, to enhance the functionality and aesthetics of my applications.
                        <br />
                        <br />
                        I am excited about the endless possibilities that lie in the world of MERN stack development, and I am eager to contribute my skills and expertise to create meaningful and impactful applications.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
