import { useEffect } from 'react';
import htmlImage from '../../src/assets/Skills/html-92b76a73.png';
import cssImage from '../../src/assets/Skills/css-79a7f026.png';
import tailwindImage from '../../src/assets/Skills/tailwind-28e4d023.png';
import bootstrapImage from '../../src/assets/Skills/download (1).png';
import javascriptImage from '../../src/assets/Skills/download (2).png';
import reactImage from '../../src/assets/Skills/react-9d641e86.png';
import nodejsImage from '../../src/assets/Skills/nodeJs-d83eb6dd.png';
import mongodbImage from '../../src/assets/Skills/download (3).png';
import expressjsImage from '../../src/assets/Skills/express-afe64c50.png';
import firebaseImage from '../../src/assets/Skills/firebase-e5a69ac5.png';
import wordpress from '../../src/assets/Skills/Wordpress_Blue_logo.png';
import github from '../../src/assets/Skills/25231.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const skills = [
    { name: 'HTML', image: htmlImage },
    { name: 'CSS', image: cssImage },
    { name: 'Tailwind CSS', image: tailwindImage },
    { name: 'Bootstrap', image: bootstrapImage },
    { name: 'JavaScript', image: javascriptImage },
    { name: 'React', image: reactImage },
    { name: 'Node.js', image: nodejsImage },
    { name: 'MongoDB', image: mongodbImage },
    { name: 'Express.js', image: expressjsImage },
    { name: 'Firebase', image: firebaseImage },
    { name: 'Wordpress', image: wordpress },
    { name: 'Github', image: github },
  ];

  return (
    <div className="py-10" id='skills'>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              className="bg-[#001C30] rounded-lg p-4 shadow-md"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={skill.image} alt={skill.name} className="w-16 mx-auto mb-2" />
              <p className="text-center text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
