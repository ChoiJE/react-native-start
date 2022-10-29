import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const TodoListItem = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name={'circledowno'} size={30} color={'#3143e8'} />
            </TouchableOpacity>
            <Text style={[styles.text, styles.strikeText]}>TodoList items will be shown here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 25
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 15,
        marginVertical: 20,
        width: 100,
        marginLeft: 10
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
})

export default TodoListItem;