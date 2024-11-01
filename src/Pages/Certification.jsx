import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import certifications from './Certification/CertificateData';

const Certification = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });
    }, []);

    const openModal = (cert) => setSelectedCert(cert);
    const closeModal = () => setSelectedCert(null);

    return (
        <section className="py-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-6 text-primary">Certifications</h2>
            <div className="container mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 relative cursor-pointer"
                        data-aos="slide-left"
                    >
                        {/* Only open modal when clicking on the image */}
                        <img
                            src={cert.image}
                            alt={`${cert.title} certificate`}
                            className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                            onClick={() => openModal(cert)}
                            data-aos="flip-up"
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

            {/* Modal */}
            {selectedCert && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-aos="zoom-out">
                    <div className="bg-white rounded-lg p-6 relative w-11/12 max-w-2xl">
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
