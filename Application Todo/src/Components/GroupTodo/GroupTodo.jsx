import React from "react";
import styles from "./GroupTodo.module.css";
import { useSelector } from "react-redux";
import AllTodos from "../Todos/AllTodos";
import Button from "../Button/Button";
import { createPortal } from "react-dom";
import TodoModal from "../Forms/TodoModal";

const GroupTodo = () => {
    const [showItems, setShowItems] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const todoCategories = useSelector((store) => store.todo);
    const handleToggle = () => {
        setShowItems(!showItems);
    }



    return (
        <div>
            {todoCategories.length === 0 ? (
                <p className={styles.noCatText}>Add Some Todo Categories...</p>
            ) : (
                <div>
                    {todoCategories.map((todoCat) => (
                        <div
                            className={styles.groupTodoContainer}
                            key={todoCat.catId}
                        >
                            {console.log(todoCat.catId)}
                            {showModal && createPortal(
                                <TodoModal catId={todoCat.catId} onClose={() => setShowModal(false)} />,
                                document.getElementById("portal")
                            )}
                            <div 
                                className={styles.todoContainer}
                                >
                                <div 
                                    className={styles.todoContainer__header}
                                    onClick={handleToggle}
                                >
                                    <h1>
                                        {todoCat.name} - {todoCat.todos.length}
                                    </h1>
                                    <p>⬇️</p>
                                </div>
                                {showItems && (
                                    <>
                                        <hr />
                                        <div
                                            className={styles.todo__right__pane}
                                        >
                                            {todoCat.todos.length === 0 ? (
                                                <p
                                                    className={
                                                        styles.noTodoText
                                                    }
                                                >
                                                    Add Some Todos...
                                                </p>
                                            ) : (
                                                <div
                                                    className={styles.todoBody}
                                                >
                                                    <AllTodos
                                                        payload={todoCat}
                                                    />
                                                </div>
                                            )}

                                            <Button
                                                title="+"
                                                className={styles.btn}
                                                onClick={() => setShowModal(!showModal)}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GroupTodo;
