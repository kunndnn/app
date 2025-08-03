import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Todo} from './Types';
import TodoItem from '../todos/TodoItem';

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo:(id:string)=>void;
  onEditTodo:(id:string,newText:string)=>void;
}

const TodoList: React.FC<TodoListProps> = ({todoList, onDeleteTodo,onToggleTodo,onEditTodo}) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <TodoItem key={todo.id} onDelete={()=>onDeleteTodo(todo?.id)} 
        onToggle={()=>onToggleTodo(todo?.id)}
        onEdit={newText=>onEditTodo(todo?.id,newText)}
        todo={todo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TodoList;
