import React from "react";
import "./todoItem.css";
import { Label, List, Icon, Input, Grid, Header } from "semantic-ui-react";
interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  editTodo: HandleEdit;
  index: string;
}
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
  editTodo,
  index
}) => {
  return (
    <Grid className="landing" columns={2} divided>
      <Grid.Row>
        <Grid.Column width={10}>
          <label
            htmlFor={todo.text}
            className={todo.complete ? "complete" : ""}
          >
            <Header>{todo.text}</Header>
          </label>
        </Grid.Column>
        <Grid.Column width={5}>
          <div className="flex">
            <label htmlFor={index}>
              <Icon name="check" className={todo.complete ? "complete" : ""} />
            </label>
            <Icon name="trash" onClick={() => removeTodo(index)} />
            <Icon name="edit" onClick={() => editTodo(index)} />
          </div>
        </Grid.Column>
        <input
          id={index}
          hidden
          name={todo.text}
          placeholder="d"
          onChange={() => toggleTodo(todo)}
          type="checkbox"
          checked={todo.complete}
        />
      </Grid.Row>
    </Grid>
  );
};
