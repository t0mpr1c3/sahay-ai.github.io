import React from "react";
import Section from "./Section";
import { github, linkedin, crunchbase } from "../assets"; // Add your relevant icons to the assets folder

const socials = [
    {
        title: "GitHub",
        iconUrl: github, // Replace with GitHub icon path
        url: "https://github.com/sahay-ai", // Update with your GitHub profile URL
    },
    {
        title: "LinkedIn",
        iconUrl: linkedin, // Replace with LinkedIn icon path
        url: "https://www.linkedin.com/company/sahay-ai/", // Update with your LinkedIn profile URL
    },
    {
        title: "Crunchbase",
        iconUrl: crunchbase, // Replace with Crunchbase icon path
        url: "https://www.crunchbase.com/organization/sahay-ai", // Update with your Crunchbase profile URL
    },
];

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <div className="text-center sm:text-left">
                    <p className="caption text-n-4 lg:block">
                        © {new Date().getFullYear()}. All rights reserved.
                    </p>
                    {/* Add a link to Privacy Policy */}
                    <a href="/#/privacy-policy" className="text-n-4 hover:text-color-1 transition-colors">Privacy Policy</a>
                </div>

                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item, i) => (
                        <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-[#15131D] rounded-full transition-colors hover:bg-n-6">
                            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;
