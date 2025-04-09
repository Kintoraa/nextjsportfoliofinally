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
           <p className={"text-[#94a3b8]"}>Découvrez mon parcours mes passions et ce qui me motive en tant que développeur.</p>
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
                   <p>Je suis un développeur frontend passionné, reconverti après une première carrière dans l’armée de l’air. Attiré depuis toujours par le monde de la tech, j’ai décidé de suivre ma passion en me formant d’abord en autodidacte, puis en suivant une formation spécialisée pour approfondir mes compétences.</p>
                   <p>Aujourd’hui, je me concentre sur la création d’interfaces modernes et intuitives, en utilisant des technologies comme React et Next.js. Mon objectif est de développer des applications web performantes, accessibles et centrées sur l’utilisateur. Curieux et rigoureux, j’aime relever de nouveaux défis techniques et continuer à apprendre au quotidien.</p>
                   <h3 className={"font-bold"}>Ce qui me passione : </h3>
                   <div className={"flex w-48 gap-4 flex-col sm:flex-row "}>
                       {skills.map((skill, i) => (
                       <motion.span
                           initial={{ opacity: 0, x: 50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           viewport={{ once: true }}
                           key={i} className={"text-[#0ea5e9] flex items-center shadow-lg text-xs sm:text-sm shadow-[#0ea5e9]/20 font-bold bg-[#0ea5e9]/20 rounded-full px-2.5"}>{skill}</motion.span>
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
                                    viewport={{ once: true }}>Quand je ne suis pas devant mon éditeur de code, je suis souvent en train de jouer. Passionné de jeux vidéo depuis toujours, j’adore explorer de nouveaux univers, me plonger dans des ambiances bien travaillées et m’inspirer de tout ce que ce milieu peut apporter en termes de design, de logique ou d’interaction.</motion.p>
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
    "Nouvelles Technologies", "Gaming", "Hardware", "Programmation"
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
