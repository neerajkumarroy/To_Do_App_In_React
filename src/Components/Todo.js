import React, { useState } from 'react';
import ToDoList from './ToDoList';

const Todo = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        if (editingIndex !== null) {
            // Update the existing item
            const updatedItems = items.map((item, index) =>
                index === editingIndex ? inputList : item
            );
            setItems(updatedItems);
            setEditingIndex(null);
        } else {
            // Add a new item
            setItems((oldItems) => [...oldItems, inputList]);
        }

        setInputList("");
    };

    const deleteItems = (id) => {
        setItems((oldItems) => oldItems.filter((_, index) => index !== id));
        setEditingIndex(null);
    };

    const editItem = (id) => {
        setInputList(items[id]);
        setEditingIndex(id);
    };

    return (
        <>
            <div className='main-div'>
                <div className='center-div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        className='input'
                        type='search'
                        placeholder='Add an item'
                        value={inputList}
                        onChange={itemEvent}
                    />
                    <button className='button' onClick={listOfItems}>
                        {editingIndex !== null ? 'Update' : '+'}
                    </button>

                    <ol>
                        {items.map((item, index) => (
                            <ToDoList
                                key={index}
                                id={index}
                                text={item}
                                onSelect={deleteItems}
                                onEdit={editItem}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Todo;
