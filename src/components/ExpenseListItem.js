import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ amount, createdAt, count, description, id }) => (
    <Link className='d-flex flex-lg-row flex-sm-column justify-content-between px-3 border border-top-0' to={`/edit/${id}`}>
        <div className='py-3 d-flex flex-column pr-4'>
            <h3 className='text-dark font-weight-bold text-break'>{description}</h3>
            <small className='text-muted'>
                {moment(createdAt).format('DD MMMM YYYY')}
            </small>
        </div>
        <div className='my-auto h5 font-weight-bold pb-3'>
            {numeral(amount).format('$0,0.00')}
        </div>

    </Link>
);

export default ExpenseListItem;

