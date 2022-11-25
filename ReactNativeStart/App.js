import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

/*
 * [data 형태]
 * id
 * content : 제목
 * isCheck: 체크 여부
 *
 * */

export default function App() {
   const [todoList, setTodoList] = useState([]);
   const [id, setId] = useState(0);

   const onClickSave = (content) => {
      if (content !== '') {
         setTodoList((prev) => {
            return [...prev, { id: id, content: content, isCheck: false }];
         });
         setId((prev) => prev + 1);
      }
   };

   const onClickToggle = (id) => {
      setTodoList((prev) => {
         return prev.map((p) => {
            return p.id === id ? { ...p, isCheck: !p.isCheck } : p;
         });
      });
   };

   const onClickDelete = (id) => {
      setTodoList((prev) => {
         return prev.filter((p) => {
            return p.id !== id;
         });
      });
   };

   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.appTitle}>React Native First</Text>
         <Text style={styles.subTitle}>Todo List</Text>
         <View style={styles.card}>
            <TodoInsert onClickSave={onClickSave} />
            <Text style={styles.text}>목록</Text>
            <TodoList
               todoList={todoList}
               onClickToggle={onClickToggle}
               onClickDelete={onClickDelete}
            />
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
      marginRight: 20,
   },
   text: {
      fontSize: 20,
      fontWeight: '300',
      textAlign: 'center',
      marginTop: 30,
   },
});
