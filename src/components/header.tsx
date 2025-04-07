"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-[#0f0f14]/90 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-[#0ea5e9]">
                    Portfolio
                </Link>

                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#about"  className="hover:text-[#0ea5e9] transition-colors relative group ">
                        À Propos
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="#projects" className="hover:text-[#0ea5e9] transition-colors relative group">
                        Projets
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="#stack" className="hover:text-[#0ea5e9] transition-colors relative group">
                        Technologies
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="#contact" className="hover:text-[#0ea5e9] transition-colors relative group">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0ea5e9] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#0f0f14]/95 backdrop-blur-md border-b md:hidden animate-fade-in">
                        <nav className="flex flex-col container mx-auto px-4 py-4">
                            <Link
                                href="#about"
                                className="py-3 hover:text-[#0ea5e9] transition-colors border-b border-[#2d3748]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À Propos
                            </Link>
                            <Link
                                href="#projects"
                                className="py-3 hover:text-[#0ea5e9] transition-colors border-b border-[#2d3748]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projets
                            </Link>
                            <Link
                                href="#stack"
                                className="py-3 hover:text-[#0ea5e9] transition-colors border-b border-[#2d3748]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Technologies
                            </Link>
                            <Link
                                href="#contact"
                                className="py-3 hover:text-[#0ea5e9] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

