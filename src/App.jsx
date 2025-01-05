import { Route, Routes } from "react-router-dom";
import Benefits from "./sections/Benefits";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Roadmap from "./sections/Roadmap";
import Services from "./sections/Services";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import Article from "./sections/Article";
import Blog from "./sections/Blog";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <Benefits />
                                <Services />
                                <Pricing />
                                <Roadmap />
                                <Contact />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} /> {/* Fallback route */}
       
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<Article />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
