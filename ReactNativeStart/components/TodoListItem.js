import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({ todo, onToggle, onDelete }) => {
   const { id, content, isCheck } = todo;

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={() => onToggle(id)}>
            {isCheck ? (
               <Icon name={'circledowno'} size={30} color={'#3143e8'} style={styles.check_circle} />
            ) : (
               <Icon style={styles.circle} />
            )}
         </TouchableOpacity>
         <Text style={[styles.text, isCheck && styles.strikeText]}>{content}</Text>
         <TouchableOpacity onPress={() => onDelete(id)}>
            <Icon name={'delete'} style={styles.delete} size={30} color={'red'} />
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: 25,
   },
   text: {
      flex: 5,
      fontWeight: '500',
      fontSize: 15,
      marginVertical: 20,
      width: 100,
      marginLeft: 10,
   },
   circle: {
      width: 25,
      height: 25,
      borderRadius: 15,
      borderColor: 'blue',
      borderWidth: 2,
      marginRight: 20,
      marginLeft: 20,
   },
   check_circle: {
      marginRight: 20,
      marginLeft: 20,
   },
   completeCircle: {
      marginRight: 20,
      marginLeft: 20,
   },
   strikeText: {
      color: '#bbb',
      textDecorationLine: 'line-through',
   },
   unstrikeText: {
      color: '#29323c',
   },
   buttonContainer: {
      marginVertical: 10,
      marginHorizontal: 10,
   },
   delete: {
      marginRight: 15,
   },
});

export default TodoListItem;
