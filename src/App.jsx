
import './App.css'
import Feed from './Components/Feed/Feed'
import Header from './Components/Header/Header'
import Saved from './Components/Saved/Saved'

function App() {


  return (
    <> 
    <Header></Header>
    <div className='main-container '>
      <Feed></Feed>
      <Saved></Saved>
    </div>
    </>
  )
}

export default App
