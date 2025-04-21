"use client"

import ProjectCard from "@/components/projectCard";
import Image from "next/image";
import tailwindLogo from "../../public/img/logoProject/tailwind.svg"
import nextJSlogo from "../../public/img/logoProject/icons8-nextjs.svg"
import jsLogo from "../../public/img/logoProject/icons8-javascript.svg";
import cssLogo from "../../public/img/logoProject/icons8-css.svg";
import htmlLogo from "../../public/img/logoProject/icons8-html.svg";
import typeScriptLogo from "../../public/img/logoProject/typescript.svg";
import reactLogo from "../../public/img/logoProject/react.svg";
import bgPeinture from "../../public/img/project/peintre.png"
import sqlLogo from "../../public/img/logoProject/sql.svg"
import bgSC from "../../public/img/project/starcraft.png"
import bgGite from "../../public/img/project/gite.png"
import bgNaturo from "../../public/img/project/naturopathe.png"
import { motion } from "framer-motion";

export default function Project() {

     return (
         <section className={"container mx-auto"} id={"projects"}>
             <div className={"relative"}>
             <h2 className=" text-center text-3xl font-bold mb-4 relative z-10 b ">
              <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] text-transparent bg-clip-text">
                Mes Projets
              </motion.span>
             </h2>
                 <p className={"text-center text-[#94a3b8]"}>Voici quelques-uns des projets sur lesquels j'ai travaillé</p>
                 <div className="absolute bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] text-transparent bg-clip-text  h-1 w-0">
              </div>
                 <div className={"lg:grid lg:grid-cols-3"}>
                     {projects.map((project, i) => (
                         <ProjectCard key={i} bgUrl={project.bgUrl} title={project.title} description={project.description} target={project.target}>
                             <>
                             {project.imgLibs.map((lib, i) => (
                                 <Image key={i} src={lib} alt={"tailwind"} className={""}  height={40} width={40}></Image>
                                 ))}
                             </>
                         </ProjectCard>
                     ))}
                 </div>
             </div>
             <>
                 <div className="absolute opacity-30 top-20 left-[10%] text-primary/20 text-4xl animate-float-slow"><Image src={reactLogo} alt={"react"}/></div>
                 <div className="absolute top-40 opacity-30 right-[15%] text-primary/20 text-4xl animate-float-medium"><Image src={nextJSlogo} alt={"nextjs"}/></div>
                 <div className="absolute bottom-20 opacity-30 left-[20%] text-primary/20 text-4xl animate-float-fast"><Image src={typeScriptLogo} width={32} height={32} alt={"typescript"}/></div>
                 <div className="absolute bottom-40 opacity-30 right-[25%] text-primary/20 text-4xl animate-float-slow"><Image src={tailwindLogo} alt={"tailwind"}/></div>
             </>
         </section>
     )
}

const projects = [
    {
        title: "Plateforme interactive StarCraft II avec gestion complète de contenu 👾",
        description: `Site dédié à StarCraft II présentant les unités, counters, sorts, bâtiments et créateurs de contenu.
Système de connexion avec un dashboard admin complet pour modifier dynamiquement toutes les données (unités, valeurs, counters, etc.).`,
        bgUrl: bgSC,
        target : "",
        imgLibs: [tailwindLogo, nextJSlogo, reactLogo, sqlLogo]
    },
    {
        title: "Site vitrine pour deux gîtes avec gestion de contenu 🏡",
        description: `Site vitrine pour deux gîtes avec présentation des lieux, activités, restaurants et gestion de contenu via un dashboard (promos, articles, événements).`,
        bgUrl: bgGite,
        target : "https://lavieenhaut.fr/fr",
        imgLibs: [tailwindLogo, nextJSlogo,reactLogo, sqlLogo]
    }, {
        title: "Site vitrine pour une naturopathe 🌿",
        description: "Site vitrine pour une naturopathe présentant ses services, sa philosophie et ses coordonnées.",
        bgUrl: bgNaturo,
        target: "https://naturopathe-bmestivier-vosges.fr/",
        imgLibs: [jsLogo, htmlLogo, cssLogo]
    }, {
    title: "Sitre vitrine pour une entreprise de peinture",
        description: "Site vitrine pour une entreprise de peinture intérieur et extérieur",
        bgUrl: bgPeinture,
        target: "https://stunning-genie-302ad6.netlify.app/",
        imgLibs: [tailwindLogo, nextJSlogo,reactLogo]

    }
]

