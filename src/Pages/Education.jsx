import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const Education = () => {
    const education = [
        {
            degree: 'Master of Engineering (M.Eng) in Information Technology',
            university: 'Frankfurt University of Applied Sciences, Germany',
            duration: 'Winter Semester 2024 – Present',
            description:
                'Currently pursuing a Master’s program focusing on advanced topics in computer networks, embedded systems, and data-driven technologies.',
        },
        {
            degree: 'Bachelor of Science (B.Sc) in Computer Science and Engineering',
            university: 'Daffodil International University, Bangladesh',
            duration: '2016 – 2020',
            description:
                'Completed undergraduate studies with strong emphasis on software development, algorithms, and web technologies. Served as Lab Prefect in the Computer Networks Lab.',
        },
    ];

    return (
        <section id="education" className="py-16 px-4 sm:px-6 md:px-10 bg-[#0f172a]">
            <h2
                className="text-4xl font-bold text-center text-white mb-12"
                data-aos="fade-up"
            >
                My Education
            </h2>

            <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200 w-full max-w-2xl transition-transform hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 200}`}
                    >
                        <div className="flex items-start space-x-4">
                            <FaUniversity className="text-blue-600 text-3xl mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h3>
                                <p className="text-gray-700 font-medium">{edu.university}</p>
                                <p className="text-gray-500 text-sm mb-2">{edu.duration}</p>
                                <p className="text-gray-600 text-sm">{edu.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
