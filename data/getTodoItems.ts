import {TodoItem} from '../types';
import config from 'react-native-config';

const mockUser = '410544b2-4001-4271-9855-fec4b6a6442a';

export const getTodoItems = async (
  userId: string = mockUser,
): Promise<TodoItem[]> => {
  if (!config.API_URL) {
    throw new Error('Invalid Configuration: GetTodoItems');
  }

  let response = await fetch(`${config.API_URL}?userId=${userId}`);
  const {data}: {data: TodoItem[]} = await response.json();
  console.log('data', data);
  return data;
};
