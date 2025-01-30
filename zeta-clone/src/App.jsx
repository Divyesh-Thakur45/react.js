import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import AllRoutes from './routes/AllRoutes'

function App() {

  return (
    <div className='main-app'>
      <div className="sub-app">
        <Navigation />
        <AllRoutes />
        <Footer />
      </div>
    </div>
  )
}

export default App
