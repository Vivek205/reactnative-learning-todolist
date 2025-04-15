export type TodoItemProps = {
  id: string;
  title: string;
  date: number; // Epoch
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  toggleIsMarkedComplete: (id: string) => void;
  isMarkedComplete: boolean;
};
