import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ amount, createdAt, count, description, id }) => {
    const path = `/edit/${id}`
    return (
        <div>
            <h3>{count}. <Link to={path}>{description}</Link></h3>
            <p>{amount} - {createdAt}</p>
        </div>
    )
};



export default ExpenseListItem;

