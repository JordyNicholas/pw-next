import Image from "next/image";
import Header from "./components/header";
import Body from "./pages";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Header/>
      <Body/>
      <Footer/>
    </main>
  );
}
