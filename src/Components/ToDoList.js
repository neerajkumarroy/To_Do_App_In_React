import react from 'react';

const ToDoList = (props) => {
    return (
        <>

            <div className='todo_Style'>
            <i className="fa fa-duotone fa-xmark" onClick={()=>{
                props.onSelect(props.id)
            }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoList;        