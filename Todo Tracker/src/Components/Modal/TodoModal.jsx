import React from "react";
import Button from "../UI/Button";
import styles from "./TodoModal.module.css";
import Wrapper from "../UI/Wrapper";
import { createPortal } from "react-dom";
import { useTodosStore } from "../../../utils/store";

const Backdrop = ({ onConfirm }) => {
    return <div className={styles.backDrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ onConfirm, id, showToast }) => {
    const addTodo = useTodosStore(state => state.addTodo);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleAddTodo = () => {
        if(title.length === 0 || description.length === 0) {
            showToast()
            return;
        }
        console.log({catId: id, name: title, description: description});
        addTodo({catId: id, name: title, description: description})
        setTitle('');
        setDescription('');
    }

    return (
        <form className={styles.form}>
            <div className={styles.title}>Todo Form</div>
            <div className={styles.first_part}>
                <label htmlFor="Title" >Title</label>
                <input type="text" placeholder="Enter todo name..." value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className={styles.second_part}>
                <label htmlFor="Description">Description</label>
                <input type="text" placeholder="Enter todo description..." value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className={styles.btnContainer}>
                <Button
                    onClick={handleAddTodo}
                >Okay</Button>
                <Button className={styles.btn_close} onClick={onConfirm}>
                    Close
                </Button>
            </div>
        </form>
    );
};


const TodoModal = ({ onConfirm, id, showToast }) => {
    return (
        <Wrapper>
            {createPortal(
                <Backdrop onConfirm={onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {createPortal(
                <ModalOverlay onConfirm={onConfirm} id={id} showToast={showToast} />,
                document.getElementById("modal-root")
            )}
        </Wrapper>
    );
};

export default TodoModal;
