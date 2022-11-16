import MyNavBar from "./components/MyNavBar"
import GoodsList from "./components/GoodsList"
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App" style={{ height: '100vh' }}>
        <MyNavBar />
        <GoodsList />
      </div>
    </Router>

  )
}

export default App
