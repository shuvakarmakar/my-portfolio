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
                <div
                    className="md:w-1/2 md:pl-8 mt-6 md:mt-4 lg:mt-0"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <p className="p-8 text-lg text-teal-300 text-justify">
                        Hello! My name is <span className="text-blue-500">Shuva Karmakar</span>, and I am a passionate MERN stack developer.
                        I hold a degree in Computer Science and Engineering from Daffodil International University.
                        I am also an <span className="text-yellow-300">Associate Member of the Institution of Engineers, Bangladesh (IEB)</span>,
                        Membership No: <span className="text-pink-400">A-27264</span>, which highlights my professional recognition in the engineering community.
                        <br /><br />
                        I have industry experience as a developer and have also completed a comprehensive web development boot camp at
                        Programming Hero, where I worked extensively with the MERN stack in real-world projects.
                        <br /><br />
                        As a MERN stack developer, I have honed my skills in both front-end and back-end web development, enabling me to build dynamic and interactive web applications.
                        With expertise in React.js, I design captivating user interfaces that deliver a seamless user experience.
                        Leveraging the power of Express.js and Node.js, I develop robust and scalable server-side applications, ensuring smooth data flow and efficient request handling.
                        <br /><br />
                        Throughout my academic, professional, and industry journey, I have actively engaged in diverse projects that allowed me to build a broad skill set.
                        I have hands-on experience with various libraries, frameworks, and tools such as Tailwind CSS, Bootstrap, Firebase, Git, and WordPress,
                        which I use to enhance both the functionality and aesthetics of my applications.
                        <br /><br />
                        I am excited about the endless opportunities in the world of MERN stack development and look forward to contributing my skills and expertise to create impactful and meaningful applications.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
