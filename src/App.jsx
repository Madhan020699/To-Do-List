import './App.css'
import NavBar from './Components/Header/header'
import ContentBody from './Components/MiddleView/ListDetails'
import Footer from './Components/Footer/footer'
import { TaskProvider } from './Components/ContextProvider/TaskContextProvider'

function App() {

  return (
    <>
      <NavBar />
        <TaskProvider>
           <ContentBody />
        </TaskProvider>
      <Footer />
    </>
  )
}

export default App
