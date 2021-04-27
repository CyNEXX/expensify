import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ amount, createdAt, count, description, id }) => (
    <div>
        <h3>{count}. <Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>
        {numeral(amount).format('$0,0.00')}
         -
        {moment(createdAt).format('DD MMMM YYYY')}</p>
    </div>
);

export default ExpenseListItem;
