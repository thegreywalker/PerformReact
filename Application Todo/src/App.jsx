import React from "react";
import "./App.css";
import GroupTodo from "./Components/GroupTodo/GroupTodo";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import CategoryModal from "./Components/Forms/CategoryModal";
import Button from "./Components/Button/Button";
import { createPortal } from "react-dom";

function App() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <Navbar />
            <Search />
            {showModal && createPortal(<CategoryModal onClose={() => setShowModal(false)} />, document.getElementById("portal"))}
            <GroupTodo />
            <Button
                title="+"
                className="btn"
                onClick={() => setShowModal(!showModal)}
            />
        </div>
    );
}

export default App;
