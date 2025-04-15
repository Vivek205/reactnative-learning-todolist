export type CreateTodoItemModalProps = {
  id?: string;
  title?: string;
  date?: number;
  showModal: boolean;
  onModalClose: () => void;
};
