import React from "react";
import Header from "./Components/Header/Header";
import AllCategory from "./Components/CategoryTodo/AllCategory";
import Button from "./Components/UI/Button"
import styles from "./App.module.css"
import CategoryModal from "./Components/Modal/CategoryModal"


function App() {
  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        {showModal && <CategoryModal onConfirm={() => setShowModal(false)} />}
        <AllCategory />
        <Button 
          className={styles.btn}
          onClick={toggleModal}
        >+</Button>
      </div>
      
    </>
  )
}

export default App
