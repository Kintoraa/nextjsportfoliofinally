"use client"
import {motion} from "framer-motion";
import {Mail, MapPin} from "lucide-react";
import Form from "@/components/form";

export default function Contact() {

    return (
        <section className={" relative "} id={"contact"} >
            <div className={"relative container mx-auto"}>
                <h2 className=" text-center text-3xl font-bold mb-4 relative z-10 b ">
                    <motion.span
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-white bg-clip-text">
                        Contactez-moi
                    </motion.span>
                </h2>
                <p className={"text-center text-[#94a3b8] max-w-[500px] m-auto mb-4"}>Vous avez un projet en tête ou vous souhaitez discuter d'opportunités potentielles ? N'hésitez pas à me contacter !</p>
                <div className={"flex flex-col gap-8 xl:grid xl:grid-cols-2 xl:justify-items-center"} >
                 <motion.div
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     viewport={{ once: true }}
                     className={"bg-[#1e293b]/50 rounded-lg p-4 flex flex-col gap-4 xl:w-96"}>
                     <h2 className={"font-bold text-xl text-white"}>Informations de Contact</h2>
                     <p className={"flex gap-2 items-center hover:text-blue-400"}><Mail className={" text-blue-400"} />email</p>
                     <p className={"flex gap-2 items-center hover:text-blue-400"}><MapPin className={"text-blue-400 "} />Remiremont, Grand-est</p>
                 </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={"bg-[#1e293b]/50 rounded-lg p-4 xl:w-96"}>
                      <Form/>
                 </motion.div>
                    <div>

                    </div>
                </div>

            </div>
                <div className="absolute top-0  z-0 right-0 w-64 h-64 bg-[#0ea5e9]/15 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 z-0 left-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
        </section>
    )
}