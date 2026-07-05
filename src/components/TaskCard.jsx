import React from 'react'

const TaskCard = ({name, date, status})=> {
    return (
    <div>
    <p>{name}</p>
    <p>{date}締切</p>
    <p>{status}</p>
    </div>
    );
};
export default TaskCard
