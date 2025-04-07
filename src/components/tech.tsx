"use client"
import {motion} from "framer-motion";
import react from "../../public/img/logo/react3d.png"
import tailwind from "../../public/img/logo/tailwind.png"
import sql from "../../public/img/logo/sql.png"
import express from "../../public/img/logoProject/icons8-express-js.svg"
import ts from "../../public/img/logo/typescript.png"
import nodeJS from "../../public/img/logo/nodejs.png"
import github from "../../public/img/logo/github.png"
import nextjs from "../../public/img/logoProject/icons8-nextjs.svg"
import TechCard from "@/components/techCard";

export default function Tech(){

    return (
        <section className={"container mx-auto relative"} id={"stack"}>
            <div className={"relative"}>
                <h2 className=" text-center text-3xl font-bold mb-4 relative z-10 b ">
                    <motion.span
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-white bg-clip-text">
                        Mes Technologies
                    </motion.span>
                </h2>
                <p className={"text-center text-[#94a3b8] max-w-[500px] m-auto"}>Voici les technologies avec lesquelles je travaille actuellement. <strong>Elles ne sont pas gravées dans le marbre, je suis toujours prêt à m’adapter, apprendre et évoluer selon les besoins du projet. </strong></p>
                <div className={"grid justify-center grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-4 gap-4"}>
                    {techs.map((tech, i) => (
                    <TechCard key={i} img={tech.img} title={tech.title} description={tech.description} />
                    ))}
                </div>

            </div>
            <>
                <div className="absolute top-40 right-10 w-64 h-64 bg-[#0ea5e9]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-1/2 w-64 h-64 bg-[#0ea5e9]/15 rounded-full blur-3xl"></div>
                <div className="absolute bottom-52 left-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
            </>
        </section>
    )
}


const techs = [
    {
        title: "React",
        description: "Bibliothèque UI pour des apps interactives.",
        img: react,
    },
    {
        title: "Tailwind",
        description: "Framework CSS utilitaire-first.",
        img: tailwind,
    },
    {
        title: "SQL",
        description: "Langage de gestion de bases de données.",
        img: sql,
    },
    {
        title: "TypeScript",
        description: "JavaScript avec types statiques.",
        img: ts,
    },
    {
        title: "NodeJs",
        description: "Exécution de JavaScript côté serveur.",
        img: nodeJS,
    },
    {
        title: "GitHub",
        description: "Plateforme de gestion de code source.",
        img: github,
    },
    {
        title: "Express",
        description: "Framework web minimaliste pour Node.js.",
        img: express,
    },
    {
        title: "NextJs",
        description: "Framework React avec SSR et SSG.",
        img: nextjs,
    }
]
