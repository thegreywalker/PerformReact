import React from "react";
import styles from "./TodoModal.module.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../utils/slices/todoSlice";
import { nanoid } from "nanoid";

const TodoModal = ({ onClose, catId }) => {
    const [name, setName] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(
            addTodo({ catId: catId, todoId: nanoid(), name: name, desc: desc })
        );
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <p className={styles.name}>Name</p>
                <input
                    type="text"
                    placeholder="Enter todo name? "
                    value={name}
                    className={styles.inp1}
                    onChange={(e) => setName(e.target.value)}
                />
                <p className={styles.desc}>Description</p>
                <input
                    type="text"
                    placeholder="Enter todo desc..?"
                    value={desc}
                    className={styles.inp2}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>

            <div>
                <Button
                    title="Add"
                    className={styles.btn}
                    onClick={handleAddTodo}
                />
                <Button
                    title="Close"
                    className={styles.btn2}
                    onClick={() => onClose()}
                />
            </div>
        </div>
    );
};

export default TodoModal;
