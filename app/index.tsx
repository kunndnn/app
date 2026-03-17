import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";

/**
 * NOTE MANAGER CRUD APPLICATION
 * 
 * This component demonstrates the four basic CRUD operations:
 * - CREATE: Adding a new note to the list.
 * - READ: Displaying the list of notes using FlatList.
 * - UPDATE: Modifying an existing note.
 * - DELETE: Removing a note from the list.
 * 
 * It also showcases React State Management using the 'useState' hook.
 */

// Define the structure of a Note object for better understanding (TypeScript)
interface Note {
  id: string;
  text: string;
}

export default function Index() {
  // --- STATE MANAGEMENT ---
  
  // 1. 'notes' stores our array of note objects. Initialize as an empty array.
  const [notes, setNotes] = useState<Note[]>([]);
  
  // 2. 'inputText' stores the current value of the text input field.
  const [inputText, setInputText] = useState("");
  
  // 3. 'editingId' keeps track of which note is being edited. If null, we are in 'Create' mode.
  const [editingId, setEditingId] = useState<string | null>(null);

  // --- CRUD OPERATIONS ---

  /**
   * CREATE / UPDATE FUNCTION
   * This function handles both adding a new note and saving changes to an existing one.
   */
  const handleSaveNote = () => {
    // Basic validation: Don't allow empty notes
    if (inputText.trim() === "") {
      Alert.alert("Error", "Note cannot be empty!");
      return;
    }

    if (editingId) {
      // UPDATE MODE:
      // We map through the existing notes and replace the one that matches 'editingId'.
      const updatedNotes = notes.map((note) =>
        note.id === editingId ? { ...note, text: inputText } : note
      );
      setNotes(updatedNotes);
      setEditingId(null); // Exit edit mode
    } else {
      // CREATE MODE:
      // We create a new note object with a unique ID (timestamp in this case).
      const newNote: Note = {
        id: Date.now().toString(),
        text: inputText,
      };
      // We use the spread operator (...) to add the new note to the existing list.
      setNotes([...notes, newNote]);
    }

    // Clear the input field after saving
    setInputText("");
  };

  /**
   * DELETE FUNCTION
   * Removes a note from the list based on its unique ID.
   */
  const deleteNote = (id: string) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            // We use .filter() to create a new array excluding the note with the matching ID.
            setNotes(notes.filter((note) => note.id !== id));
          },
        },
      ]
    );
  };

  /**
   * EDIT PREPARATION
   * Loads the note's text into the input field and sets the 'editingId'.
   */
  const startEditing = (note: Note) => {
    setInputText(note.text);
    setEditingId(note.id);
  };

  // --- RENDERING ---

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1 bg-gray-50`}
    >
      <View style={tw`flex-1 pt-12 px-6`}>
        {/* Header Section */}
        <Text style={tw`text-3xl font-extrabold text-gray-800 mb-6`}>
          My Notes 📝
        </Text>

        {/* Input Area (CREATE / UPDATE UI) */}
        <View style={tw`flex-row items-center mb-8`}>
          <TextInput
            style={tw`flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-gray-700`}
            placeholder="Write a note..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity
            onPress={handleSaveNote}
            style={tw`ml-3 bg-blue-600 p-4 rounded-xl shadow-md`}
          >
            <MaterialIcons
              name={editingId ? "check" : "add"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* List of Notes (READ UI) */}
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View style={tw`items-center mt-20`}>
              <MaterialIcons name="note-add" size={64} color="#CBD5E1" />
              <Text style={tw`text-gray-400 mt-4 text-lg`}>No notes yet!</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View
              style={tw`flex-row items-center bg-white p-4 rounded-xl mb-3 shadow-sm border border-gray-100`}
            >
              <Text style={tw`flex-1 text-gray-700 text-base`}>{item.text}</Text>
              
              <View style={tw`flex-row`}>
                {/* UPDATE Button */}
                <TouchableOpacity
                  onPress={() => startEditing(item)}
                  style={tw`p-2 mr-2`}
                >
                  <MaterialIcons name="edit" size={20} color="#6366F1" />
                </TouchableOpacity>

                {/* DELETE Button */}
                <TouchableOpacity
                  onPress={() => deleteNote(item.id)}
                  style={tw`p-2`}
                >
                  <MaterialIcons name="delete-outline" size={20} color="#EF4444" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
