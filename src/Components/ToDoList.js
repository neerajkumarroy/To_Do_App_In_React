import React, { useState } from 'react';

const ToDoList = (props) => {
    const [isEditing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(props.text);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        props.onEdit(props.id, editedText);
        setEditing(false);
    };

    const handleCancelClick = () => {
        setEditing(false);
        setEditedText(props.text);
    };

    return (
        <>
            <div className='todo_Style'>
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value, "Are you Sure Update this product")}
                        />
                        <button className='updatebtn' onClick={handleSaveClick}>Update</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </>
                ) : (
                    <>
                        <i className="fa fa-duotone fa-edit" onClick={handleEditClick}></i>
                        <i className="fa fa-duotone fa-xmark" onClick={() => props.onSelect(props.id)}></i>
                        <li>{props.text}</li>
                    </>
                )}
            </div>
        </>
    );
};

export default ToDoList;
