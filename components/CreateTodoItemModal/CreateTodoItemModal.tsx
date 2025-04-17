import {FC, useState} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type {CreateTodoItemModalProps} from './types';
import {Colors} from '../../colors';
import DatePicker from 'react-native-date-picker';

export const CreateTodoItemModal: FC<CreateTodoItemModalProps> = ({
  showModal,
  title,
  date,
  onModalClose,
}) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  if (!date || !title) {
    return null;
  }

  return (
    <>
      <Modal
        visible={showModal}
        onRequestClose={onModalClose}
        presentationStyle="pageSheet">
        <View style={styles.modalContainer}>
          <View style={styles.itemsContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Edit Task</Text>
            </View>
            <View style={styles.textInputContainer}>
              <Text>Title</Text>
              <TextInput defaultValue={title} style={styles.textInput} />
            </View>
            <View style={[styles.textInputContainer, styles.dateContainer]}>
              <Text>Date</Text>
              <Text
                style={styles.textInput}
                onPress={() => setShowDatePicker(true)}>
                {new Date(date).toDateString()}
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                title="cancel"
                color={Colors.red}
                onPress={onModalClose}
              />
              <Button
                title="submit"
                color={Colors.blue}
                onPress={onModalClose}
              />
            </View>
          </View>
        </View>
        {showDatePicker && (
          <SafeAreaView>
            <View style={styles.datePickerContainer}>
              <DatePicker
                open={showDatePicker}
                date={new Date(date)}
                onConfirm={newDate => {
                  console.log('date', newDate);
                  setShowDatePicker(false);
                }}
                onCancel={() => {
                  setShowDatePicker(false);
                }}
                mode="date"
                style={{width: null}}
              />
              <View style={styles.datePickerActionsContainer}>
                <Button
                  title="cancel"
                  color={Colors.red}
                  onPress={() => setShowDatePicker(false)}
                />
                <Button title="confirm" color={Colors.blue} />
              </View>
            </View>
          </SafeAreaView>
        )}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    paddingHorizontal: 20,
  },
  itemsContainer: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  textInputContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    padding: 10,
    flexGrow: 1,
  },

  dateContainer: {
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
  },
  datePickerContainer: {
    // marginBottom: 30,
  },
  datePickerActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
