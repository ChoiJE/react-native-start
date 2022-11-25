import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onClickToggle, onClickDelete }) => {
   return (
      <ScrollView contentContainerStyle={styles.listContainer}>
         {todoList &&
            todoList.length > 0 &&
            todoList.map((todo) => {
               return (
                  <TodoListItem
                     key={todo.id}
                     todo={todo}
                     onToggle={onClickToggle}
                     onDelete={onClickDelete}
                  />
               );
            })}
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   listContainer: {
      alignItems: 'center',
      paddingTop: 10,
   },
});

export default TodoList;