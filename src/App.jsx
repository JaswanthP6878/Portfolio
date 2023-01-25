import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Content from './components/Content'
import Footer from './components/Footer'
function App() {

  return (
    <main>
      <Navbar />
      <Main />
    <section className = "container mx-auto px-5">
      <Content />
    </section>
    <Footer />
    </main>
  )
}

export default App
