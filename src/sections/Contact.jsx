import Section from "../components/Section";

const Contact = () => {
    return (
        <Section id="contact" className="py-16 bg-gray-900 text-white">
            <div className="container text-center">
                <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
                <p className="text-lg mb-8">
                    Have any questions? Feel free to reach out to us at{" "}
                    <a
                        href="mailto:tejas@sahayai.com"
                        className="text-blue-500 underline font-semibold"
                    >
                        tejas@sahayai.com
                    </a>
                </p>
            </div>
        </Section>
    );
};

export default Contact;
