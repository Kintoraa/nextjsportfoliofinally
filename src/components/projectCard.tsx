"use client"
import Image, {StaticImageData} from "next/image";
import {JSX} from "react";
import {Button} from "@/components/ui/button";
import {CircleAlert, ExternalLink} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({title, description, children, bgUrl, target}: ProjectCardProps) {

    return(
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={"rounded-lg m-6    bg-[#1e293b]/50  border border-[#1e293b] hover:border-[#0ea5e9] hover:shadow-lg hover:shadow-[#0ea5e9]/20"}>
            <Image src={bgUrl} alt={"project"}  className={"rounded-t-lg"}></Image>
            <div className={"p-5 md:pt-2 lg:grid lg:grid-rows-2 gap-4  lg:h-[500px]  justify-between"}>
                <div className={"flex flex-col gap-4"}>
                    <h1 className={"text-white font-bold"}>{title}</h1>
                    <p className={"text-[#94a3b8]"}>{description}</p>
                </div>
                <div className={"flex justify-center py-5 "}>
                    {children}
                </div>
                <div className={"flex justify-center pt-5"}>
                {target ?
                    <Button className={"font-medium rounded-md text-white bg-[#0ea5e9] cursor-pointer hover:bg-[#0ea5e9]/80"}><Link className={"flex gap-4 items-center"} target={"_blank"} href={target}><ExternalLink />Visitez</Link></Button>
                    :    <Button className={"font-medium rounded-md text-white bg-orange-300 cursor-pointer hover:bg-orange-300/80"}><CircleAlert />Sortie prévue eté 2025</Button>}
                </div>
            </div>
        </motion.div>
    )

}


interface ProjectCardProps {
    title: string;
    target: string;
    bgUrl: StaticImageData;
    description: string;
    children: JSX.Element;
}