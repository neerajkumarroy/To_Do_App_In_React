import { useState } from 'react';
import ToDoList from './ToDoList';

const Todo = () => {
    const [inputList, setInpuLtist] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInpuLtist(event.target.value)
    }

    const listOfitems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInpuLtist(" ")

    };

    const  deleteItems = (id)=>{
        console.log("deleted")

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) =>{
                return index !==id;
             })
        })
    };

    return (
        <>
            <div className='main-div'>
                <div className='center-div'>
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input className='input' type='search' placeholder='Add a item' value={inputList} onChange={itemEvent} ></input>
                    <button className='button' onClick={listOfitems}> + </button>

                    <ol>
                        {
                            Items.map((itemvalue,index) => {
                               return <ToDoList key={index} 
                               id={index} 
                               text = {itemvalue}
                               onSelect={deleteItems}
                               />;
                            })
                        }

                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo;