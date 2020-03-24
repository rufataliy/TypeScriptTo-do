import React from "react";
import { TodoListItem } from "./todo";
import { Segment, List } from "semantic-ui-react";
interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  editTodo: HandleEdit;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  removeTodo,
  editTodo
}) => {
  return (
    <List className="w-100" divided relaxed>
      {todos.map((todo, index) => {
        const i = String(index);
        return (
          <TodoListItem
            index={i}
            removeTodo={removeTodo}
            todo={todo}
            editTodo={editTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </List>
  );
};
