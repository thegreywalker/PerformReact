import React from "react";
import Button from "../Button/Button";
import styles from "./CategoryForm.module.css";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../utils/slices/todoSlice";
import { nanoid } from "nanoid";

const CategoryModal = ({onClose}) => {
    const [value, setValue] = React.useState("");
    const dispatch = useDispatch();

    const handleAddCategory = () => {
        dispatch(addCategory({catId: nanoid(), name: value}))
        setValue('');
    }

    return (
        <div className={styles.form}>
            <p>Category Name</p>
            <input
                type="text"
                placeholder="Enter Category name? "
                onChange={(e) => setValue(e.target.value)}
            />
            <div>
                <Button title="Add" className={styles.btn} onClick={handleAddCategory} />
                <Button title="Close" className={styles.btn2} onClick={() => onClose()} />
            </div>
            
        </div>
    );
};



export default CategoryModal;
