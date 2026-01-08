import { Briefcase, Shield, Zap, Users } from "lucide-react";
import ServicePreview from "../components/ServicePreview";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import {useEffect} from "react";
import {getAllServices, getServiceById, getServicesProposalByProvider} from "../services/api";



const Home = () => {

    useEffect(() => {

    }, []);

    const services=[
        {
            "id":1,
            "image":"https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
            "categorie":"design",
            "name":"Professional Logo Design",
            "description":"Get a unique professional logo that represent your brand perfectly",
            "mark":4.1,
            "client":{
                "avatar":""
            }
        },
        {
            "id":2,
            "image":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            "categorie":"development",
            "name":"Website Development",
            "description":"Custom responsive website built in modern technologies",
            "mark":4.1,
            "client":{
                "avatar":""
            }
        },
        {
            "id":3,
            "image":"https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
            "categorie":"marketing",
            "name":"Social media management",
            "description":"Compute social media strategy and content creation for your business",
            "mark":4.1,
            "client":{
                "avatar":""
            }
        },
        {
            "id":4,
            "image":"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
            "categorie":"writing",
            "name":"Content Writing and SEO",
            "description":"High quality content optimized for search engines",
            "mark":4.1,
            "client":{
                "avatar":""
            }
        }
    ]

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 60 },
        show:   { opacity: 1, y: 0 }
    };

    return(
        <div className="">
            <section className="bg-sky-500 px-[10px] py-[130px]">
                <motion.h1
                    className="text-2xl lg:text-5xl text-center font-bold text-white"
                    style={{textAlign:"center", overflow : "hidden", whiteSpace: "nowrap"}}
                    initial={{width: 0}}
                    animate={{width: "100%"}}
                    transition={{duration:2, ease: "easeInOut"}}
                >
                    Find the Perfect Service <span className="text-amber-500">For Your Needs</span>
                </motion.h1>

                <h2 className="m-[20px] text-center text-white">Connect with thousands of skilled professionals ready to help you succeed</h2>

                <div>
                    <form className="flex justify-center gap-x-[10px]">
                        <input className="bg-amber-50 rounded p-[15px] w-[100px] lg:w-[500px]" type="text" placeholder="what service are you looking for ?"/>
                        <button className="bg-amber-500 p-[15px] rounded text-white cursor-pointer">Search</button>
                    </form>
                </div>
            </section>
            <section>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="p-[50px] flex flex-col lg:flex-row gap-[20px] bg-slate-100"
                >
                    <motion.div variants={item}>
                        <div className="flex flex-col items-center justify-center">

                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="h-8 w-8 text-cyan-400"/>
                            </div>
                            <h3>Verifieds professionals</h3>
                            <p className="text-sm text-slate-400">all services provided are verified and rated</p>

                        </div>
                    </motion.div>
                    <motion.div variants={item}>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-cyan-400"/>
                            </div>
                            <h3>Verifieds professionals</h3>
                            <p className="text-sm text-slate-400">Your money is safe until you're satisfied</p>
                        </div>
                    </motion.div>
                    <motion.div variants={item}>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-8 w-8 text-cyan-400"/>
                            </div>
                            <h3>Verifieds professionals</h3>
                            <p className="text-sm text-slate-400">Get your projects done quickly</p>
                        </div>
                    </motion.div>
                    <motion.div variants={item}>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-cyan-400"/>
                            </div>
                            <h3>Verifieds professionals</h3>
                            <p className="text-sm text-slate-400">We're here to help whenever you need</p>
                        </div>
                    </motion.div>

                </motion.div>

            </section>
            <section className="p-[20px] flex flex-col justify-center items-center">
                <h1 className="text-xl ">Featured Services</h1>
                <h2 className="">Browse our most popular services</h2>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-x-5 gap-y-5 m-[15px]">

                    {services.map((service)=>{
                        return <ServicePreview key={service.id} service={service}/>
                    })}

                </div>
                <Link to="/services" className="p-[10px] border-[0.3px] rounded text-sm hover:bg-amber-500 hover:text-white cursor-pointer">View All Serices</Link>

            </section>
            <section className="bg-sky-500 p-[100px] flex flex-col justify-center items-center gap-[20px]">
                <h1 className="text-3xl text-white font-bold text-center">Ready to Get Started?</h1>
                <h2 className="text-xl text-white text-center">Join thousands of satisfied clients and professionals</h2>
                <div className="flex flex-col lg:flex-row gap-[10px]">
                    <button className="pt-[7px] pb-[7px] pl-[20px] pr-[20px] bg-amber-500 text-white rounded text-sm">Find Services</button>
                    <button className="pt-[7px] pb-[7px] pl-[20px] pr-[20px] bg-white text-blue-400 rounded text-sm">Become Provider</button>
                </div>
            </section>
        </div>

    )
}

export default Home;