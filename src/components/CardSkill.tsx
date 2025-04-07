import { motion } from "framer-motion";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function CardSkill({title, icon, description}: CardSkillProps) {

    return (
            <Card className={"md:h-60 lg:h-52 hover:shadow-lg hover:shadow-[#0ea5e9]/20 m-6 flex flex-col gap-5 rounded-lg border border-[#2d3748] bg-[#1e293b]/50 p-6 text-center"}>
                    <div className={"text-4xl text-center"}>{icon}</div>
                <CardHeader>
                <CardTitle className={"font-bold"}>{title}</CardTitle>
                </CardHeader>
                <CardDescription className={"text-[#94a3b8]"}>
                    {description}
                </CardDescription>
            </Card>
    )
}


interface CardSkillProps {
    title: string;
    icon: string;
    description: string;
}