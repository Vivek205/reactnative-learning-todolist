import {FC, useState} from 'react';
import type {DateSortStatus, ToolbarProps} from './types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../colors';
import Icon from '@react-native-vector-icons/ant-design';

export const Toolbar: FC<ToolbarProps> = () => {
  const [dateSortStatus, setDateSortStatus] = useState<DateSortStatus>('asc');

  const iconName = dateSortStatus === 'asc' ? 'up' : 'down';

  const toggleDateSortStatus = () => {
    setDateSortStatus(prevState => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <View style={styles.container}>
      <Text>SortBy</Text>
      <TouchableOpacity onPress={toggleDateSortStatus}>
        <View style={styles.date}>
          <Text>Date</Text>
          <Icon name={iconName} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopColor: Colors.lightGray,
    borderTopWidth: 1,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
