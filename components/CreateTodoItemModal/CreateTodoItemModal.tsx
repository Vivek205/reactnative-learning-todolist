import {FC, useState} from 'react';
import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
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
  },
});
