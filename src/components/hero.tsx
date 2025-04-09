"use client"

import { useEffect, useRef } from "react"
import Header from "./header"
import Link from "next/link";

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const descRef = useRef<HTMLParagraphElement>(null)
    const buttonsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.classList.add("animate-slide-right")
            titleRef.current.classList.remove("opacity-0")
        }

        if (descRef.current) {
            setTimeout(() => {
                descRef.current?.classList.add("animate-slide-right")
                descRef.current?.classList.remove("opacity-0")
            }, 200)
        }

        if (buttonsRef.current) {
            setTimeout(() => {
                buttonsRef.current?.classList.add("animate-fade-in")
                buttonsRef.current?.classList.remove("opacity-0")
            }, 400)
        }
    }, [])

    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0f0f14] to-[#0f0f14]/95">
            <Header />

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#0ea5e9] rounded-full animate-[ping_4s_ease-in-out_infinite]"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#8b5cf6] rounded-full animate-[ping_6s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#3b82f6] rounded-full animate-[ping_5s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#ec4899] rounded-full animate-[ping_7s_ease-in-out_infinite]"></div>
            </div>

            <div className="container mx-auto px-4 pt-20">
                <div className="max-w-3xl">
                    <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4 opacity-0">
                        Salut, Moi c'est Alexis{" "}
                        <span className="text-[#0ea5e9] relative">
              <span
                  className="transition-all duration-700 opacity-0 transform translate-y-4"
                  style={{
                      transitionDelay: "800ms",
                      opacity: 1,
                      transform: "translateY(0)",
                  }}
              >
                Développeur FullStack
              </span>
            </span>
                    </h1>
                    <p ref={descRef} className="text-xl text-[#94a3b8] mb-8 opacity-0">
                        Je construis des applications web modernes avec React et Next. Passionné par la création de site internet
                    </p>
                    <div ref={buttonsRef} className="flex z-40 flex-wrap gap-4 opacity-0">
                        <Link
                            href="#projects"
                            className="inline-flex cursor-pointer z-50 cur items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-[#0ea5e9] hover:bg-[#0ea5e9]/80 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Voir Mes Projets
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex cursor-pointer z-50 items-center justify-center px-6 py-3 text-base font-medium rounded-md text-[#0ea5e9] border border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Me Contacter
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-50 -z-10 w-64 h-64 bg-[#0ea5e9]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-110 z-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-90 left-10 z-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl"></div>
        </section>
    )
}

