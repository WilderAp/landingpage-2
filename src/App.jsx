import Navbar from "./components/Navbar/Navbar";
import About from "./components/about";
import Expertise from "./components/expertise";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Services from "./components/services";
import Layout from "./components/ui/Layout";
import Footer from "./components/ui/footer";

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <Hero />
        <Expertise />
        <Services />
        <About />
        <Projects />
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
