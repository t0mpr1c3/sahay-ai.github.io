import Section from "../components/Section";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="pt-[4.75rem] lg:pt-[5.25rem]">
                <Section id="privacy-policy">
                    <div className="container">
                        <Heading title="Privacy Policy" text="This Privacy Policy applies to the Sahay app created by Sahay AI." />

                        <div className="relative z-1 grid gap-6 text-white md:grid-cols-1 md:gap-4">
                            <p className="body-2 mb-4">
                                This privacy policy applies to the Sahay app (hereby referred to as "Application") for mobile devices that was created by Sahay AI (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
                            </p>
                            <h4 className="h4 mb-2">Information Collection and Use</h4>
                            <p className="body-2 mb-4">
                                The Application collects information when you download and use it. This information may include:
                                <ul className="list-disc ml-5">
                                    <li>Your device's Internet Protocol address (e.g., IP address)</li>
                                    <li>The pages of the Application that you visit, the time spent on those pages</li>
                                    <li>The operating system you use on your mobile device</li>
                                </ul>
                            </p>
                            <h4 className="h4 mb-2">Third Party Access</h4>
                            <p className="body-2 mb-4">
                                Only aggregated, anonymized data is periodically transmitted to external services to improve the Application. Below are links to the Privacy Policies of third-party service providers used by the Application:
                                <ul className="list-disc ml-5">
                                    <li>Google Play Services</li>
                                </ul>
                            </p>
                            <h4 className="h4 mb-2">Opt-Out Rights</h4>
                            <p className="body-2 mb-4">
                                You can stop all collection of information by the Application easily by uninstalling it.
                            </p>
                            <h4 className="h4 mb-2">Data Retention Policy</h4>
                            <p className="body-2 mb-4">
                                The Service Provider will retain User Provided data for as long as you use the Application. To delete User Provided Data, please contact tejas@sahayai.com.
                            </p>
                            <h4 className="h4 mb-2">Children</h4>
                            <p className="body-2 mb-4">
                                The Service Provider does not knowingly solicit data from children under 13.
                            </p>
                            <h4 className="h4 mb-2">Security</h4>
                            <p className="body-2 mb-4">
                                The Service Provider safeguards the confidentiality of your information.
                            </p>
                            <h4 className="h4 mb-2">Changes</h4>
                            <p className="body-2 mb-4">
                                This Privacy Policy may be updated. Continued use is deemed approval of changes.
                            </p>
                            <h4 className="h4 mb-2">Contact Us</h4>
                            <p className="body-2 mb-4">
                                If you have any questions regarding privacy, please contact the Service Provider via email at tejas@sahayai.com.
                            </p>
                        </div>
                    </div>
                </Section>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
