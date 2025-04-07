
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#0f0f14] border-t border-[#2d3748] py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">

                    </div>

                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors transform hover:scale-110 duration-300"
                        >
                            <Github size={20}  />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors transform hover:scale-110 duration-300"
                        >
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#94a3b8] hover:text-[#0ea5e9] transition-colors transform hover:scale-110 duration-300"
                        >
                            <Twitter size={20} />
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

