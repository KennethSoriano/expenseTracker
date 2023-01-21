import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trouserss',
        amount: 89.99,
        date: new Date('2021-1-05')
    },
    {
        id: 'e3',
        description: 'bananas',
        amount: 9.99,
        date: new Date('2021-2-9')
    },
    {
        id: 'e4',
        description: 'book',
        amount: 8.99,
        date: new Date('2021-9-15')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.99,
        date: new Date('2021-6-10')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'A pair of trouserss',
        amount: 89.99,
        date: new Date('2021-1-05')
    },
    {
        id: 'e8',
        description: 'bananas',
        amount: 9.99,
        date: new Date('2021-2-9')
    },
    {
        id: 'e9',
        description: 'book',
        amount: 8.99,
        date: new Date('2021-9-15')
    },
    {
        id: 'e10',
        description: 'Another book',
        amount: 18.99,
        date: new Date('2021-6-10')
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});