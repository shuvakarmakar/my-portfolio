import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiResearchgate, SiGooglescholar, SiOrcid } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import publications from '../Pages/Publication/PublicationData';

const Publications = () => {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-in-out' });
    }, []);

    const displayedPublications = showAll ? publications : publications.slice(0, 6);

    return (
        <section id="publications" className="py-16 px-4 sm:px-6 md:px-10 bg-[#0f172a]">
            <h2 className="text-4xl font-bold text-center text-white mb-12">My Publications</h2>

            <div
                className={`max-w-7xl mx-auto grid gap-8 ${displayedPublications.length === 1
                        ? 'grid-cols-1 place-items-center'
                        : 'sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}
            >
                {displayedPublications.map((pub, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200 transition-transform hover:scale-105 w-full"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 150}`}
                        style={{ maxWidth: '500px' }}
                    >
                        <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{pub.title}</h3>
                        <p className="text-gray-700 text-sm md:text-base mb-1">{pub.authors}</p>
                        <p className="text-gray-600 italic text-sm md:text-base">{pub.publication}</p>
                        <p className="text-gray-500 text-sm md:text-base">{pub.date}</p>

                        {pub.doi && (
                            <p className="text-sm text-gray-500 mt-3 break-words">
                                DOI:{' '}
                                <a
                                    href={`https://doi.org/${pub.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    {pub.doi}
                                </a>
                            </p>
                        )}

                        {pub.link && (
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center text-blue-600 hover:underline text-sm"
                            >
                                Read Publication <FaExternalLinkAlt className="ml-2" />
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Academic Profiles Links */}
            <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8 mt-12">
                <a
                    href="https://www.researchgate.net/profile/Shuva-Karmakar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-blue-800 transition"
                >
                    <SiResearchgate size={28} className="text-blue-600" />
                    <span className="text-green-600 text-lg font-semibold">ResearchGate</span>
                </a>

                <a
                    href="https://scholar.google.com/citations?user=BxOIxXcAAAAJ&hl=en&authuser=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-blue-800 transition"
                >
                    <SiGooglescholar size={28} className="text-blue-600" />
                    <span className="text-yellow-400 text-lg font-semibold">Google Scholar</span>
                </a>

                <a
                    href="https://orcid.org/0009-0008-8176-1990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-blue-800 transition"
                >
                    <SiOrcid size={28} className="text-blue-600" />
                    <span className="text-[#A6CE39] text-lg font-semibold">ORCID</span>
                </a>
            </div>

            {publications.length > 6 && (
                <div className="text-center mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className={`px-6 py-3 text-white rounded-full font-semibold ${showAll ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                            } transition duration-300`}
                    >
                        {showAll ? 'Hide' : 'View More'}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Publications;
