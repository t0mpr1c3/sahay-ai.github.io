import Section from "../components/Section";

const Contact = () => {
    return (
        <Section id="contact" className="py-16 bg-gray-900 text-white">
            <div className="container text-center">
                <h2 className="text-4xl font-bold mb-6">Contact Us / Careers</h2>
                <p className="text-lg mb-8">
                    Have any questions? Feel free to reach out to us at{" "}
                    <a
                        href="mailto:contact@sahayai.com"
                        className="text-blue-500 underline font-semibold"
                    >
                        contact@sahayai.com
                    </a>
                </p>
                <p className="text-lg mb-8">
                    Interested in joining us? Tell us something you like to do for fun & send over your resume at {" "}
                    <a
                        href="mailto:careers@sahayai.com"
                        className="text-blue-500 underline font-semibold"
                    >
                        careers@sahayai.com
                    </a>
                </p>
            </div>
        </Section>
    );
};

export default Contact;
