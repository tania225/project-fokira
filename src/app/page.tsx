import Navbar from "../components/shared/Navbar";
import Hero from "../components/shared/Hero";
import Library from "../components/shared/Library";
import Footer from "../components/shared/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />
      <Hero />
       <Library /> 
       <Footer/>
    </main>
  );
}
