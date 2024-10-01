import Section from "../components/Section";
import { smallSphere, stars, lines, check } from "../assets";
import Heading from "../components/Heading";
import Button from "../components/Button";

const pricing = [
    {
        title: "Sahay App",
        description: "Mobile app for inspectors and real-time tracking",
        price: null,
        features: [
            "Real-time logging, even offline",
            "Track inspector efficiency",
            "Custom alerts & notifications",
            "Access full inspection history",
            "Works in offline mode",
            "Cloud sync for data access",
        ],
    },
    {
        title: "LARR-E",
        description: "Advanced hardware for automated railway inspections",
        price: null,
        features: [
            "Precision sensors for monitoring",
            "AI-driven predictive analysis",
            "Geotagging for fault locations",
            "Downtime prediction for defects",
            "Mountable on any rail vehicle",
            "Lightweight and portable",
        ],
    },
    {
        title: "Track Dashboard",
        description: "Real-time data visualization, work order and employee management tool",
        price: null,
        features: [
            "Quick work order creation",
            "Google Maps for asset tracking",
            "Laser track inspection tools",
            "Historical data playback",
            "24/7 support for all users",
            "Monitor team performance ",
        ],
    },
];

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="pricing">
            <div className="container mx-auto relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading tag="Get started with Sahay AI" title="Setup once, use forever!" />

                <div className="relative">
                    <div className="flex justify-center gap-[2rem] max-lg:flex-wrap">
                        {pricing.map((item, i) => (
                            <div 
                                key={i} 
                                className="w-[2rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-[24rem] even:py-14 odd:py-14 my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                            > {/* Restored the heading color classes */}
                                <h4 className="h4 mb-4">{item.title}</h4>

                                <p className="body-2 min-h-[4rem] mb-3 text-white/50">{item.description}</p>

                                <Button className="w-full mb-6" href="mailto:your-email@domain.com" white>
                                    Contact us
                                </Button>

                                <ul>
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-start py-5 border-t border-n-6">
                                            <img src={check} width={24} height={24} alt="" />
                                            <p className="body-2 ml-4">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                        <img className="w-full" src={lines} width={1480} height={177} alt="" />
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="#pricing">
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;
