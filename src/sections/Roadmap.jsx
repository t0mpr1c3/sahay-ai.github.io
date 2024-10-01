import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Tagline from "../components/Tagline";
import { check2, loading1, gradient } from "../assets"; // Removed unused image imports

const roadmap = [
    {
        id: "0",
        title: "Cloud Data Sync",
        text: "Launched seamless cloud data synchronization, allowing real-time data sharing and access across teams and locations.",
        date: "August 2024",
        status: "done",
    },
    {
        id: "1",
        title: "LARR-E Jr.",
        text: "Developed the next-gen LARR-E Jr, capable of performing autonomous railway inspections without the need for frequent calibration.",
        date: "September 2024",
        status: "done",
    },
    {
        id: "4",
        title: "AI-powered App",
        text: "Developed an AI powered app for inspectors to record defects easily and generate diagnostics for proactive maintenance.",
        date: "June 2024",
        status: "Done",
    },
    {
        id: "2",
        title: "Predictive Maintenance AI",
        text: "Implement AI-driven predictive maintenance models that identify potential rail defects and preduct equipment failures based on historical data and real-time sensor input.",
        date: "Feb 2025",
        status: "in progress",
    },
    {
        id: "3",
        title: "XR/AR Integration",
        text: "Integrate XR and AR technologies to provide real-time, immersive visualization of railway defects, helping teams visualize track conditions in 3D.",
        date: "Planned for Q2 2025",
        status: "planned",
    },
    {
        id: "5",
        title: "LARRE Sr.",
        text: "Research & develop a complete inspection robot capable of doing UT testing as well as Vision based inspections.",
        date: "Planned for Q4 2025",
        status: "planned",
    },
];

const Roadmap = () => (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What we’re working on" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) => {
                    const status = item.status === "done" ? "Done" : item.status === "in progress" ? "In progress" : "Planned";

                    return (
                        <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6`} key={item.id}>
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <Tagline>{item.date}</Tagline>

                                        <div className="flex items-center px-4 py-1 bg-white rounded text-n-8">
                                            <img className="mr-2.5" src={item.status === "done" ? check2 : loading1} width={16} height={16} alt={status} />
                                            <div className="tagline">{status}</div>
                                        </div>
                                    </div>

                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                        <img className="w-full" src={gradient} width={942} height={942} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button href="#roadmap">Our roadmap</Button>
            </div>
        </div>
    </Section>
);

export default Roadmap;
