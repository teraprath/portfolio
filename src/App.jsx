import Meta from "./components/Meta"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Meta />
      <Header />
      <main>
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
