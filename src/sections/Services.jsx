import Section from "../components/Section";
import Heading from "../components/Heading";
import { check, gradient, ms } from "../assets";
import ChatBubbleWing from "../assets/svg/ChatBubbleWing"; 

const VisionAndTeam = () => {
    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading title="About" text="We are transforming the future of railway inspections through AI." />

                {/* Vision Section */}
                <div className="relative">
                    <div className="relative z-1 flex flex-col lg:flex-row items-center mb-5 p-8 border border-white/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        {/* Gradient and background design */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img className="w-full h-full object-cover md:object-right" width={800} alt="Vision" height={730} src={gradient} />
                        </div>

                        <div className="relative z-1 max-w-full lg:max-w-[50%] lg:ml-auto">
                            <h4 className="h4 mb-4">Our Vision</h4>
                            <p className="body-2 mb-[3rem] text-n-3">
                                We are on a mission to transform railway inspections through innovative AI-powered solutions. Our goal is to enhance safety, efficiency, and sustainability across railway systems globally.
                            </p>
                            <ul className="body-2">
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} alt="check" />
                                    <p className="ml-4">AI-powered inspection technologies</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} alt="check" />
                                    <p className="ml-4">Real-time data remote mointoring</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} alt="check" />
                                    <p className="ml-4">Predictive maintenance solutions</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] left-4 right-4 bottom-4 border-white/10 border text-base text-center lg:absolute lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 mt-10 lg:mt-0">
    We are working to build the future in motion!
</div>

                    </div>

                    {/* Team Section */}
                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative p-8 border border-white/10 rounded-3xl">
                            <h4 className="h4 mb-4">Our Team</h4>
                            <p className="body-2 text-n-3">
                                Based in the heart of NE US, we are a diverse, passionate team of engineers, AI experts, and industry veterans, dedicated to solving real-world challenges in the rail industry.
                            </p>
                            <div className="mt-8 py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base">
                                Connect with us here -> tejas@sahayai.com
                                <ChatBubbleWing className="absolute left-full bottom-0" />
                            </div>
                        </div>

                        <div className="p-8 bg-[#15131D] rounded-3xl">
                            <h4 className="h4 mb-4">What We Do</h4>
                            <p className="body-2 mb-[2rem] text-n-3">
                                We combine AI, robotics, and data analytics to revolutionize how railway inspections are conducted. From real-time monitoring to predictive maintenance, we’re improving rail systems worldwide.
                            </p>
                            <div className="relative mt-8 py-6 px-8 bg-n-8 rounded-xl">
                                <p className="font-code text-base">LARR-E -> Locomotive Asset Rail Reliability Expert</p>
                            </div>
                        </div>
                    </div>

                    {/* Retain gradient and background design */}
                    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
                        <img className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2" src={gradient} width={1417} height={1417} alt="Background Gradient" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default VisionAndTeam;
