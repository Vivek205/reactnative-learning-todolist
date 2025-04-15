import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type {TodoItemProps} from './types';
import Icon from '@react-native-vector-icons/ant-design';
import {Colors} from '../../colors';

export const TodoItem: FC<TodoItemProps> = ({
  id,
  title,
  date,
  onEdit,
  onDelete,
  isMarkedComplete,
  toggleIsMarkedComplete,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleIsMarkedComplete(id)}>
        <View style={styles.checkboxContainer}>
          {isMarkedComplete && (
            <Icon name="check" style={[styles.icon, styles.checkBoxIcon]} />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{new Date(date).toDateString()}</Text>
      </View>
      <Icon
        name="edit"
        style={[styles.icon, styles.editIcon]}
        onPress={() => onEdit(id)}
      />
      <Icon
        name="minus-circle"
        style={[styles.icon, styles.deleteIcon]}
        onPress={() => onDelete(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  checkboxContainer: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: 16,
  },
  date: {
    fontWeight: '200',
    fontSize: 12,
  },
  icon: {
    fontSize: 22,
  },
  checkBoxIcon: {
    fontSize: 16,
  },
  editIcon: {
    color: Colors.gray,
  },
  deleteIcon: {
    color: Colors.red,
  },
  content: {
    flexGrow: 1,
  },
});
