import React from 'react';
import { AiFillGithub, AiOutlineLink, AiOutlinePlayCircle } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import project1 from '../../src/assets/Projects/Project1.png';
import project2 from '../../src/assets/Projects/Project2.png';
import project3 from '../../src/assets/Projects/Project3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    const projects = [
        {
            image: project1,
            title: 'School of Rock (Summer Camp School)',
            description: 'School of Rock (Summer Camp School)',
            githubLink: 'https://github.com/example1',
            serverSideLink: 'https://example1.com',
            liveLink: 'https://example1-live.com'
        },
        {
            image: project2,
            title: 'Super Kiddo (Toys Marketplace)',
            description: 'Super Kiddo (Toys Marketplace)',
            githubLink: 'https://github.com/example2',
            serverSideLink: 'https://example2.com',
            liveLink: 'https://example2-live.com'
        },
        {
            image: project3,
            title: 'Japanese Cuisine (Chef Recipe)',
            description: 'Japanese Cuisine (Chef Recipe)',
            githubLink: 'https://github.com/example3',
            serverSideLink: 'https://example3.com',
            liveLink: 'https://example3-live.com'
        }
    ];

    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
                {projects.map((project, index) => (
                    <div
                        className="relative flex flex-col bg-clip-border text-gray-700 border-2 border-[#001C30] shadow-2xl rounded-lg h-96 bg-gray-100"
                        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                        key={index}
                    >
                        <div className="image-container h-60 overflow-y-auto">
                            <img src={project.image} alt={project.title} className="w-full" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-between">
                                <div className="flex items-center justify-between gap-2">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub"
                                        className="text-blue-500 underline text-lg"
                                    >
                                        <AiFillGithub />
                                    </a>
                                    <a
                                        href={project.serverSideLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Server Side Link"
                                        className="text-blue-500 underline text-lg"
                                    >
                                        <AiOutlineLink />
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Live Link"
                                        className="text-blue-500 underline text-lg"
                                    >
                                        <AiOutlinePlayCircle />
                                    </a>
                                </div>
                                <button className="btn btn-primary">
                                    Learn More
                                    <BsArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
