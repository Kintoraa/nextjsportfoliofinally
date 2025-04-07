"use client"
import Image, {StaticImageData} from "next/image";
import logo from "../../public/img/logo/react3d.png"
import { motion } from "framer-motion";

export default function  TechCard({title, description, img}: TechCardProps) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={"rounded-lg m-6 text-center  size-[200px] xl:size-[250px] 2xl:size-[300px] flex flex-col items-center justify-center gap-2 bg-[#1e293b]/50  border border-[#1e293b] hover:border-[#0ea5e9] hover:shadow-lg hover:shadow-[#0ea5e9]/20"}>
            <Image src={img} alt={title} height={32} width={32}></Image>
            <p>{title}</p>
            <p className={"px-2"}>{description}</p>
        </motion.div>
    )
}

interface TechCardProps {
    title: string;
    description: string;
    img: StaticImageData;
}