import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, View } from 'react-native';

const TodoInsert = ({ onClickSave }) => {
   const [content, setContent] = useState('');

   const onChangeText = (value) => {
      setContent(value);
   };

   return (
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.input}
            placeholder={'할 일을 입력하세요.'}
            placeholderTextColor={'#d0c9c9'}
            autoCorrect={false}
            onChangeText={onChangeText}
            value={content}
         />
         <View style={styles.button}>
            <Button
               title={'추가'}
               onPress={() => {
                  onClickSave(content);
                  setContent('');
               }}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   input: {
      flex: 1,
      padding: 20,
      borderBottomColor: '#bbb',
      borderBottomWidth: 2,
      fontSize: 24,
      marginLeft: 28,
   },
   button: {
      marginRight: 10,
   },
});

export default TodoInsert;
