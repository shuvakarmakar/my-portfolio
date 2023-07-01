import { TypeAnimation } from 'react-type-animation';
import myImage from '../../src/assets/Shuva Karmakar.jpeg';
import { FaDownload } from 'react-icons/fa';

const Banner = () => {

    const handleDownload = () =>{
        const url = "/public/shuva_karmakar_resume.pdf";
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "shuva_karmakar_resume.pdf"
        anchor.click();
    }

    return (
        <div className="bg-[#001C30] h-full md:h-[600px] flex flex-col md:flex-row justify-around items-center px-4 md:px-6 my-auto" id='about'>
            <div className="md:w-1/2 relative mt-6 md:0">
                <h5 className="text-3xl leading-8 text-gray-600 mb-3">Hi! I'm</h5>
                <h3 className="text-white text-4xl font-extrabold mb-4 font-Caveat">Shuva Karmakar</h3>
                <TypeAnimation className='text-fuchsia-600'
                    sequence={[
                        'Frontend Web Developer',
                        1000,
                        'MERN Stack Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <div data-aos="fade-right">
                    <p className="text-white opacity-50 my-4 text-justify">
                        Welcome to my portfolio! I'm a passionate MERN stack web developer with expertise in HTML, CSS, JavaScript,
                        React, Express.js, Node.js, and MongoDB. With a strong foundation in front-end development, I strive to create
                        captivating user interfaces and seamless user experiences. I enjoy turning ideas into functional and visually
                        appealing websites and web applications.
                    </p>
                </div>
                <button className='btn btn-secondary' onClick={handleDownload} ><FaDownload></FaDownload> Download Resume</button>
            </div>
            <div>
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
