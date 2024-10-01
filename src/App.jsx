import { Route, Routes } from "react-router-dom";
import Benefits from "./sections/Benefits";
import Collaboration from "./sections/Collaboration";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Roadmap from "./sections/Roadmap";
import Services from "./sections/Services";
import PrivacyPolicy from "./sections/PrivacyPolicy"; // Import your Privacy Policy page

const App = () => {
    return (
        <>
            <Navbar />
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Benefits />
                            <Services />
                            <Pricing />
                            <Roadmap />
                            <Contact/>
                            <Footer />
                        </>
                    } />

                    {/* Privacy Policy Route */}
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                    {/* Add more routes here if necessary */}
                </Routes>
            </div>
        </>
    );
};

export default App;
