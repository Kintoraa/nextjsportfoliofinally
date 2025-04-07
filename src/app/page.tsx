import Hero from "@/components/hero";
import About from "@/components/about";
import Project from "@/components/project";
import Tech from "@/components/tech";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function Home() {
  return (
        <main className={"min-h-screen scroll-smooth overflow-hidden"}>
        <Hero/>
            <About/>
            <Project/>
            <Tech/>
            <Contact/>
            <Footer/>
        </main>
  );
}
