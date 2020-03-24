import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input, Button, Form, Icon, Grid, Container } from "semantic-ui-react";
import "./addTodoForm.css";
interface AddFormTodoProps {
  handleChange: HandleChange;
  handleSubmit: HandleSubmit;
  value: string;
}
export const AddTodoForm: React.FC<AddFormTodoProps> = ({
  handleChange,
  handleSubmit,
  value
}) => {
  return (
    <Form className="w-94" action="">
      <div className="flex">
        <Input
          className="flex-grow-1"
          fluid
          name="text"
          onChange={handleChange}
          value={value}
          type="text"
        />
        <Button
          className="flex"
          color="teal"
          onClick={handleSubmit}
          type="submit"
        >
          add
        </Button>
      </div>
    </Form>
  );
};
