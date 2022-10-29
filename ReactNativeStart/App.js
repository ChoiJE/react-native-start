import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>React Native First</Text>
            <Text style={styles.subTitle}>Todo List</Text>
            <View style={styles.card}>
                <TodoInsert/>
                <Text style={styles.text}>목록</Text>
                <TodoList/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3143e8',
    },
    appTitle: {
        color: '#fff',
        fontSize: 10,
        marginTop: 30,
        fontWeight: '300',
        textAlign: 'center',
        backgroundColor: '#3143e8',
    },
    subTitle: {
        color: '#fff',
        fontSize: 30,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '300',
        textAlign: 'center',
        backgroundColor: '#3143e8',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
        marginRight: 20
    },
    text: {
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
        marginTop: 30
    }
});
