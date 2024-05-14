import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionSearch from "./components/SectionSearch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Header/>
      <SectionSearch/>
      <Footer/>
    </main>
  );
}
