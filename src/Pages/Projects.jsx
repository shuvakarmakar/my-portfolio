import React, { useRef } from 'react';
import project1 from '../../src/assets/Projects/Project1.png';
import project2 from '../../src/assets/Projects/Project2.png';
import project3 from '../../src/assets/Projects/Project3.png';
import project4 from '../../src/assets/Projects/Project4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            image: project4,
            title: 'ELearner (Spoken English Learning Website)',
            githubLink: 'https://github.com/shuvakarmakar/spoken-english-client',
            serverSideLink: 'https://github.com/shuvakarmakar/spoken-english-server',
            liveLink: 'https://spoken-english-65d22.web.app/',
            description: ' This website, a Spoken English learning platform, offers free and paid services for users to learn English, featuring numerous useful features. The project has three roles: an Admin manages instructors and users, instructors handle course management, and users access courses with free videos and voice-to-text capabilities. It is a group project, and I served as the team leader.',
            technologies:  'Tailwind CSS, TypeScript, ReactJS, MongoDB, ExpressJS, NodeJS, SSLCommerze, Socket.io, JWT, TanStack Query, Firebase'
        },
        {
            image: project1,
            title: 'School of Rock (Summer Camp School)',
            githubLink: 'https://github.com/shuvakarmakar/summer-camp-school',
            serverSideLink: 'https://github.com/shuvakarmakar/summer-camp-school-server',
            liveLink: 'https://summer-camp-school-9d97b.web.app/',
            description: 'This Website is focused on Summer Tour & School. In this website there are 3 roles(Admin, Instructor, Student). Admin can easily edit user roles from his Dashboard. Instructors can add , update, and delete classes from his dashboard and the admin can deny these classes. Student can select classes after signing up from home page or classes page, they can also delete class from their dashboard and a student can purchase multiple courses after doing payment',
            technologies: 'Google Authentication, Tailwind, daisyUI, ReactJS, MongoDB, ExpressJS, NodeJS, Stripe',
        },
        {
            image: project2,
            title: 'Super Kiddo (Toys Marketplace)',
            githubLink: 'https://github.com/shuvakarmakar/toy-marketplace-client',
            serverSideLink: 'https://github.com/shuvakarmakar/toy-marketplace-server',
            liveLink: 'https://toy-marketplace-33160.web.app/',
            description: 'This Website is focused on Toy Marketplace. A Seller can add, update, and delete Toys from his Dashboard, Sellere can easily see all sellers toys from ALLToys page. A search button included in All Toys page. In My Toys page a seller can see his all added toys',
            technologies:  'Google Authentication, Tailwind, daisyIU, ReactJS, MongoDB, Express.JS, NodeJS'
        }
    ];

    React.useEffect(() => {
        AOS.init();
    }, []);

    const modalRefs = useRef([]);

    const showModal = (index) => {
        const modal = modalRefs.current[index];
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div id="projects">
            <h2 className="text-4xl font-bold text-center my-10 text-white md:my-16">My Projects</h2>
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
                            <br></br>
                            <div className="card-actions justify-between">
                                <div className="flex items-center justify-between gap-2">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="GitHub"
                                        className="text-2xl hover:text-blue-500"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={project.serverSideLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Server Side Link"
                                        className="text-2xl"
                                    >
                                        <FaLink />
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Live Link"
                                        className="text-2xl"
                                    >
                                        <FaLink />
                                    </a>
                                </div>
                                <button className="btn btn-sm btn-primary" onClick={() => showModal(index)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                        <dialog
                            ref={(ref) => (modalRefs.current[index] = ref)}
                            className="modal md:modal-middle sm:modal-top"
                        >
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <p className="py-4 text-justify"><span className='font-bold'>Description</span> : {project.description}</p>
                                <p className="py-4 text-justify"><span className='font-bold'>Technologies</span> : {project.technologies}</p>
                                <div className="modal-action">
                                    <button className="btn" onClick={() => modalRefs.current[index]?.close()}>
                                        Close
                                    </button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
