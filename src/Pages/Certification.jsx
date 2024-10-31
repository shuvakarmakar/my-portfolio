import { FaExternalLinkAlt } from 'react-icons/fa';
import certifications from './Certification/CertificateData';

const Certification = () => {
    return (
        <section className="py-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>
            <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                        <p className="text-gray-600">{cert.organization}</p>
                        <p className="text-gray-500">{cert.issueDate}</p>
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center mt-2"
                        >
                            View on LinkedIn <FaExternalLinkAlt className="ml-2" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certification;