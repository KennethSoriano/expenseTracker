import { StyleSheet, View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
    function amountChangedHandler() {}

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input 
                    style={styles.rowInput}
                    label="Amount" 
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onchangeText: amountChangedHandler,
                    }} />
                <Input 
                    style={styles.rowInput}
                    label="Date" 
                    textInputConfig={{
                        placeholder: 'yyyy-MM-DD',
                        maxLength: 10,
                        onChangeText: () => {}
                    }} 
                />
            </View>
            <View>
                <Input label="Description" textInputConfig={{
                    multiline: true,
                }} />
            </View>
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 80
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    }
})