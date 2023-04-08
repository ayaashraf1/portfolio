import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu.jsx";
import FooterSection from "./pages/FooterSection/FooterSection.jsx";
import About from "./pages/About/About.jsx";
import Work from "./pages/Work/Work.jsx";
import Loading from "./pages/Loading/Loading.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const bg = document.querySelector("#welcome-section");
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 1;
    if (bg != null) {
      bg.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / windowWidth;
        const mouseY = e.clientY / windowHeight;

        bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
      });
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1100);
  });
  return (isLoading ?
    <Loading /> :
    <div data-testid="app">
      <header>
        <Menu />
      </header>
      <main>
        <section id="welcome-section">
          <h1>
            Programming <br />
            and Design <br />
            For The Future
          </h1>
          <a href="#work-section">Dig into my universe</a>
        </section>
        <section><About /></section>
        <section><Work /></section>
        <section><Contact /></section>
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}

export default App;
