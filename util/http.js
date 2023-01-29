import axios from 'axios'

export function storeExpense(expenseData) {
    axios.post(
        'https://expensetracker-fb764-default-rtdb.firebaseio.com/expenses.json',
        expenseData
    );
}