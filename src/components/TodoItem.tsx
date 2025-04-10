import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Todo} from './Types';
import TodoEdit from './TodoEdit';

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (newText: string) => {
    console.log({newText});
    onEdit(newText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <TodoEdit
        todo={todo}
        onSave={handleEdit}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  const setEditingTrue = () => {
    if (!todo.completed) setIsEditing(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.todoText}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={todo.completed ? styles.disableBtn : styles.editBtn}
          onPress={setEditingTrue}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete} style={styles.delBtn}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  editBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  disableBtn: {
    backgroundColor: '#964B00',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  delBtn: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default TodoItem;
