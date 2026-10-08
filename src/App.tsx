import { Header } from './components/Header.tsx'
import { Footer } from './components/Footer'
import { Main } from './components/Main.tsx'

function App() {

  return (
    <div className="flex md:h-screen flex-col overflow-y-auto bg-blue-600">
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App
