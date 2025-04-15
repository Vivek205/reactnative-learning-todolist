import {FC} from 'react';
import type {HeaderProps} from './types';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from '@react-native-vector-icons/ant-design';

export const Header: FC<HeaderProps> = () => (
  <View style={styles.container}>
    <Text style={styles.title}>TODO List</Text>
    <TouchableOpacity>
      <Icon name="plus-circle" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontWeight: 'bold', fontSize: 26},
  icon: {
    color: '#007AFF',
    fontSize: 26,
  },
});
