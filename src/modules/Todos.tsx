import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoInput from '../components/todos/TodoInput';
import {Todo} from '../components/todos/Types';
import TodoList from '../components/todos/TodoList';

export function Todos(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };
  const deleteTodo = (id: string) =>
    setTodoList(todoList.filter(todo => todo.id !== id));

  const editTodo = (id: string, newText: string) =>
    setTodoList(
      todoList.map(item => (item.id === id ? {...item, text: newText} : item)),
    );

  const toggleTodo = (id: string) =>
    setTodoList(
      todoList.map(item =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
        todoList={todoList}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});