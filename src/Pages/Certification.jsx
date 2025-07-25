import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import certifications from './Certification/CertificateData';

const Certification = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-in-out' });
    }, []);

    const openModal = (cert) => setSelectedCert(cert);
    const closeModal = () => setSelectedCert(null);

    // The displayed certifications based on "showAll" state
    const displayedCertifications = showAll ? certifications : certifications.slice(0, 6);

    return (
        <section className="py-8">
            <h2 className="text-4xl font-bold text-center my-10 text-white md:my-14">Certification</h2>
            <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {displayedCertifications.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 relative"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 200}`} 
                    >
                        <img
                            src={cert.image}
                            alt={`${cert.title} certificate`}
                            className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                            onClick={() => openModal(cert)}
                        />
                        <h3 className="text-xl font-semibold text-primary">{cert.title}</h3>
                        <p className="text-gray-600">{cert.organization}</p>
                        <p className="text-gray-500">{cert.issueDate}</p>
                        {cert.link && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary flex items-center mt-2"
                            >
                                View This Certificate <FaExternalLinkAlt className="ml-2" />
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* View More / Hide Button */}
            {certifications.length > 6 && (
                <div className="text-center my-6 md:my-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className={`btn text-white px-6 py-3 rounded-full transform transition duration-300 ${showAll ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                    >
                        {showAll ? 'Hide' : 'View More'}
                    </button>
                </div>
            )}

            {/* Modal with AOS Animation */}
            {selectedCert && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal} // Close modal when clicking outside
                >
                    <div
                        className="bg-white rounded-lg p-6 relative w-11/12 max-w-2xl"
                        data-aos="zoom-in"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedCert.image}
                            alt={`${selectedCert.title} certificate`}
                            className="w-full h-auto rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-primary mb-2">{selectedCert.title}</h3>
                        <p className="text-gray-600">{selectedCert.organization}</p>
                        <p className="text-gray-500 mb-4">{selectedCert.issueDate}</p>
                        <a
                            href={selectedCert.image}
                            download
                            className="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center"
                        >
                            <FaDownload className="mr-2" /> Download Certificate
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certification;
