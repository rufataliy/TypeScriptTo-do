type Todo = {
  text: string;
  complete: boolean;
};
type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (todoText: string) => void;
type RemoveTodo = (todoText: string) => void;
type HandleEdit = (todoText: string) => void;
type HandleSubmit = (e: FormEvent<HTMLButtonElement>) => void;
type HandleChange = (e: ChangeEvent<HTMLInputElement>) => void;
