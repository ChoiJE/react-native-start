import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            <TodoListItem />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
        paddingTop: 10
    },
})

export default TodoList;