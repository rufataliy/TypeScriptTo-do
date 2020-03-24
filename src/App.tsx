import React, { useState, FormEvent, ChangeEvent } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./addTodoForm";
import { Container, List, Grid, Header } from "semantic-ui-react";

const initialTodos: Array<Todo> = [
  { text: "todo1", complete: false },
  { text: "Attract life of your dream", complete: false },
  { text: "Dream Big", complete: false },
  { text: "Concentrate your attention", complete: false }
];
const App: React.FC = () => {
  const [state, setState] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = state.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setState(newTodos);
  };
  const handleChange: HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit: HandleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    addTodo(newTodo);
    setNewTodo("");
    e.preventDefault();
  };
  const addTodo: AddTodo = todoText => {
    if (todoText.trim() !== "") {
      setState([...state, { text: todoText, complete: false }]);
    }
  };
  const removeTodo: RemoveTodo = i => {
    setState(state.filter((todo, index) => String(index) !== i));
  };
  const handleEdit: HandleEdit = i => {
    const todo = state.filter((todo, index) => String(index) === i);
    setNewTodo(todo[0].text);
    removeTodo(i);
  };
  return (
    <div className="wrapper">
      <Grid>
        <Grid.Row columns={2}>
          <Header>Add a To-Do</Header>
        </Grid.Row>
        <Grid.Row columns={2}>
          <AddTodoForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            value={newTodo}
          />
        </Grid.Row>
        <Grid.Row>
          <TodoList
            removeTodo={removeTodo}
            todos={state}
            editTodo={handleEdit}
            toggleTodo={toggleTodo}
          />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default App;
