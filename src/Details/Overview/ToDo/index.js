import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

import { useInputValue, useTodos } from "./custom-hooks";
import {useState} from 'react';

import Layout from "./components/Layout";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";

const TodoApp = React.memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputValue);
  };

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    
    setIsActive(current => !current);
  };

  const secondarystyle = {
    background: isActive ? 'purple' : '',
    color: isActive ? 'white' : '',
  };

  return (
    <Layout>
      <TodoList
        items={todos}
        onItemCheck={checkTodo}
        onItemRemove={removeTodo}
      />
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoListItem
        sx = {{secondarystyle}}
        onChange = {handleClick}
        labeltext = "Bunker Planning (if needed)"
        completetext = "Completed"
        persontext = "John Doe"
      ></TodoListItem>
      <TodoListItem
        sx = {{secondarystyle}}
        onChange = {handleClick}
        labeltext = "General Voyage Instruction (loading)"
        completetext = "Completed"
        persontext = "John Doe"
      ></TodoListItem>
      <TodoListItem
        sx = {{secondarystyle}}
        onChange = {handleClick}
        labeltext = "Appoint Surveyor (Pre-Loading)"
        completetext = "Completed"
        persontext = "John Doe"
      ></TodoListItem>
      <TodoListItem
        sx = {{secondarystyle}}
        onChange = {handleClick}
        labeltext = "Agency Nomination (loading)"
        completetext = "Completed"
        persontext = "John Doe"
      ></TodoListItem>
      <TodoListItem
        sx = {{secondarystyle}}
        onChange = {handleClick}
        labeltext = "Proforma (Loading)"
        completetext = "Completed"
        persontext = "John Doe"
      ></TodoListItem>
      
    </Layout>
  );
});

export default TodoApp;
