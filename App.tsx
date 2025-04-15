import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Searchbar} from './components/Searchbar';
import {Toolbar} from './components/Toolbar';
import {TodoItem} from './components/TodoItem';
import {Header} from './components/Header';
import type {TodoItem as TodoItemState} from './types';
import {initialMockItems} from './data/todo-items-mock';
import {CreateTodoItemModal} from './components/CreateTodoItemModal';

function App(): React.JSX.Element {
  const [todoItemList, setTodoItemList] =
    useState<TodoItemState[]>(initialMockItems);
  const [itemToBeEdited, setItemToBeEdited] = useState<
    TodoItemState | undefined
  >(undefined);

  const onItemEdit = (id: string) => {
    const foundItem = todoItemList.find(item => item.id === id);
    setItemToBeEdited(foundItem);
  };

  const onItemDelete = (id: string) => {
    setTodoItemList(prevList => prevList.filter(item => item.id !== id));
  };

  const toggleIsMarkedComplete = (id: string) => {
    setTodoItemList(prevList => {
      const itemIndex = prevList.findIndex(item => item.id === id);
      const newList = [...prevList];
      newList[itemIndex] = {
        ...newList[itemIndex],
        isMarkedComplete: !newList[itemIndex].isMarkedComplete,
      };

      return newList;
    });
  };

  const handleModalClose = () => {
    setItemToBeEdited(undefined);
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header />
          <Searchbar />
          <Toolbar />
          {/* TODO: Replace this with Section list to show Completed task in separate section */}
          <FlatList
            data={todoItemList}
            renderItem={({item: {id, title, date, isMarkedComplete}}) => (
              <TodoItem
                id={id}
                title={title}
                date={date}
                isMarkedComplete={isMarkedComplete}
                onDelete={onItemDelete}
                onEdit={onItemEdit}
                toggleIsMarkedComplete={toggleIsMarkedComplete}
              />
            )}
            keyExtractor={({id}) => id}
          />
        </View>
      </TouchableWithoutFeedback>
      <CreateTodoItemModal
        showModal={Boolean(itemToBeEdited)}
        id={itemToBeEdited?.id}
        title={itemToBeEdited?.title}
        date={itemToBeEdited?.date}
        onModalClose={handleModalClose}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
});

export default App;
