import {StyleSheet, TextInput, View} from 'react-native';
import type {SearchbarProps} from './types';
import {FC} from 'react';

export const Searchbar: FC<SearchbarProps> = () => (
  <View>
    <TextInput style={styles.input} placeholder="search tasks" />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#e9e9e9',
    marginTop: 10,
  },
});
