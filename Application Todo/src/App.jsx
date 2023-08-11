import React from 'react'
import './App.css'
import GroupTodo from './Components/GroupTodo/GroupTodo'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'

function App() {
  const [showItems, setShowItems] = React.useState(false);

  return (
    <div>
      <Navbar />
      <Search />
      <GroupTodo 
        showItems={showItems}
        setShowItems={() => setShowItems(!showItems)}
      />
    </div>
  )
}

export default App
