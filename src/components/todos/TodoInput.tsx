import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

interface TodoinputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoinputProps> = ({onAddTodo}) => {
  const [text, setText] = useState('');
  const handleAddTodo = () => {
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add a new Todo..."
      />
      <TouchableOpacity style={styles.addTodoBtn} onPress={handleAddTodo}>
        <Text style={styles.addTodoBtnText}>Add </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderBlockColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  addTodoBtn: {
    backgroundColor: '#0000ff',
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  addTodoBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TodoInput;
