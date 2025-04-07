"use client"

import Image from "next/image";
import bg from "../../public/img/me.png"
import { motion } from "framer-motion";
import CardSkill from "@/components/CardSkill";

export default function About() {

    return (
       <section className={"relative container mx-auto"} id={"about"}>
           <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
               className={"text-center flex flex-col gap-5"}>
           <h2 className={"text-3xl font-bold"}>A propos de Moi</h2>
           <p className={"text-[#94a3b8]"}>Découvrez mon parcoursn mes passions et ce qui me motive en tant que développeur.</p>
           </motion.div>
           <div>
               <motion.div

                       initial={{ opacity: 0, y: 50 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8, ease: "easeOut" }}
                       viewport={{ once: true }}
           className={"pt-10 md:grid md:grid-cols-2 md:gap-4 md:items-center "}>
                   <div className={"flex justify-center order-2"}>
                   <motion.div
                       initial={{ opacity: 0, y: 100 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1, ease: "easeOut" }}
                       viewport={{ once: true }}
                       className=" relative w-64 h-64 md:w-80 md:h-80 items-center rounded-full overflow-hidden border-4 border-[#0ea5e9]/30 shadow-lg shadow-[#0ea5e9]/20 group">
                       <Image
                           src={""}
                           alt="Photo de profil"
                           className="object-cover transition-transform duration-700 "
                       />
                       <div className="absolute top-40 right-10 w-64 h-64 bg-[#0ea5e9]/5 rounded-full blur-3xl"></div>
                       <div className="absolute bottom-52 left-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
                   </motion.div>
                   </div>
                   <div className={"flex flex-col gap-5 p-2 order-1"}>
                   <h2 className={"text-2xl font-bold"}>Qui suis-je ?</h2>
                   <p>Je suis un développeur frontend passionné par la création d'interfaces utilisateur modernes et intuitives. Avec une solide expérience en React et Next.js, je m'efforce de créer des applications web performantes et accessibles.</p>
                   <p>Mon parcours dans le développement web a commencé il y a plusieurs années, et depuis, j'ai travaillé sur divers projets allant des sites vitrines aux applications web complexes. J'aime résoudre des problèmes et apprendre constamment de nouvelles technologies.</p>
                   <h3 className={"font-bold"}>Ce qui me passione : </h3>
                   <div className={"flex gap-2"}>
                       {skills.map((skill, i) => (
                       <motion.span
                           initial={{ opacity: 0, x: 50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           viewport={{ once: true }}
                           key={i} className={"text-[#0ea5e9] flex items-center shadow-lg  shadow-[#0ea5e9]/20 font-bold bg-[#0ea5e9]/20 rounded-full px-2.5"}>{skill}</motion.span>
                           ))}
                   </div>
                       <motion.h3
                           initial={{ opacity: 0, y: 50 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 1, ease: "easeOut" }}
                           viewport={{ once: true }}
                           className={"font-bold"}>En dehors du code:</motion.h3>
                       <motion.p    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    viewport={{ once: true }}>Quand je ne code pas, vous pouvez me trouver en train de lire sur les dernières tendances tech, de faire du sport, ou d'explorer de nouveaux endroits. J'aime également partager mes connaissances et aider d'autres développeurs à progresser.</motion.p>
                   </div>
               </motion.div>
           </div>
           <div className={"md:grid md:grid-cols-3"}>
           {skillCards.map((skill, i) => (
           <CardSkill key={i} title={skill.title} icon={skill.icon} description={skill.description}></CardSkill>
           ))}
           </div>
           <div className="absolute top-40 right-10 w-64 h-64 bg-[#0ea5e9]/5 rounded-full blur-3xl"></div>
           <div className="absolute bottom-52 left-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
       </section>
    )
}

const skills = [
    "Nouvelles Technologies", "Gaming", "Programmation"
]

const skillCards = [
    {
        title: "Formation",
        description:
            "Actuellement en formation en Développement Web / Informatique, avec une spécialisation en technologies frontend.",
        icon: "🎓",
    },
    {
        title: "Objectif",
        description:
            "À la recherche d'une alternance pour continuer à développer mes compétences !",
        icon: "🚀",
    },
    {
        title: "Expérience",
        description:
            "Réalisation de plusieurs projets concrets pour des clients satisfaits.",
        icon: "💼",
    },
];
