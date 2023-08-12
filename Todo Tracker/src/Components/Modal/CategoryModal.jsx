import React from "react";
import Button from "../UI/Button";
import styles from "./CategoryModal.module.css";
import Wrapper from "../UI/Wrapper";
import { createPortal } from "react-dom";
import { useTodosStore } from "../../../utils/store";

const Backdrop = ({ onConfirm }) => {
    return <div className={styles.backDrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ onConfirm }) => {
    const addCategory = useTodosStore(state => state.addCategory);
    const [value, setValue] = React.useState('');
    const handleAddCategory = () =>{
        addCategory({name: value})
        setValue('');
    }

    return (
        <div className={styles.form}>
            <div className={styles.title}>Category Form</div>
            <div className={styles.first_part}>
                <label htmlFor="Title">Category</label>
                <input type="text" placeholder="Enter Category name..." value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className={styles.btnContainer}>
                <Button onClick={handleAddCategory}>Okay</Button>
                <Button className={styles.btn_close} onClick={onConfirm}>
                    Close
                </Button>
            </div>
        </div>
    );
};


const CategoryModal = ({ onConfirm }) => {
    return (
        <Wrapper>
            {createPortal(
                <Backdrop onConfirm={onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {createPortal(
                <ModalOverlay onConfirm={onConfirm} />,
                document.getElementById("modal-root")
            )}
        </Wrapper>
    );
};

export default CategoryModal;

