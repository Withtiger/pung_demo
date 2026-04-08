import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Highlights from './components/sections/Highlights'
import Gallery from './components/sections/Gallery'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import MusicPlayer from './components/ui/MusicPlayer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="highlights">
          <Highlights />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  )
}

export default App
