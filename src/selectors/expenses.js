import moment from "moment";

//Expenses selector
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.trim().toLowerCase().includes(text.trim().toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expenseA, expenseB) => {
        if (sortBy === 'date') {
            return expenseA.createdAt < expenseB.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return expenseA.amount < expenseB.amount ? 1 : -1;
        }
    });
}