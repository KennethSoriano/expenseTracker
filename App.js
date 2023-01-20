import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ManageExpense from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import Allexpenses from './screens/Allexpense';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen 
        name="RecentExpenses"
        component={RecentExpenses}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen 
            name="ExpensesOverview"
            component={ExpensesOverview}
          />
          <Stack.Screen 
            name="ManageExpense"
            component={ManageExpense}
          />
          <Stack.Screen 
            name="RecentExpenses"
            component={RecentExpenses}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
