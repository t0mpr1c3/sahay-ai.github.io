import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for react-router-dom
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { background, sahay, main } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const navigation = [
    { id: "0", title: "Features", url: "#features", isAnchor: true },
    { id: "2", title: "About", url: "#how-to-use", isAnchor: true },
    { id: "1", title: "Technology", url: "#pricing", isAnchor: true },
    { id: "3", title: "Roadmap", url: "#roadmap", isAnchor: true },
    { id: "5", title: "Contact", url: "#contact", isAnchor: true },
    { id: "6", title: "Blog", url: "/blog", isAnchor: false },
    { id: "4", title: "Sign in", url: "https://app.sahayai.com/", isExternal: true },
];

const Header = () => {
    const { pathname, hash } = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = (isAnchor, url) => {
        if (isAnchor) {
            const element = document.getElementById(url.substring(1)); // Remove '#' from ID
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        if (openNavigation) {
            enablePageScroll();
            setOpenNavigation(false);
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
                openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
            }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                {/* Logo + Text */}
                <a className="block w-[12rem] xl:mr-8 flex items-center" href="/">
                    <img src={sahay} width={40} height={40} alt="Sahay AI" />
                    <span className="ml-2 text-white text-xl font-bold">Sahay AI</span>
                </a>

                {/* Navigation */}
                <nav
                    className={`${
                        openNavigation ? "flex" : "hidden"
                    } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) =>
                            item.isExternal ? (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-white xl:px-12"
                                >
                                    {item.title}
                                </a>
                            ) : item.isAnchor ? (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(item.isAnchor, item.url);
                                    }}
                                    className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-white xl:px-12`}
                                >
                                    {item.title}
                                </a>
                            ) : (
                                <Link
                                    key={item.id}
                                    to={item.url}
                                    onClick={() => handleClick(false)}
                                    className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-white xl:px-12`}
                                >
                                    {item.title}
                                </Link>
                            )
                        )}
                    </div>
                </nav>

                {/* Sign-in Button for Desktop */}
                <Button className="hidden lg:flex" href="https://app.sahayai.com/">
                    Sign in
                </Button>

                {/* Hamburger Menu for Mobile */}
                <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
