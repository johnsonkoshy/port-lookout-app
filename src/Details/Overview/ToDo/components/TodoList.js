import React from "react";
import { List, Paper } from "@mui/material";

import TodoListItem from "./TodoListItem";

const TodoList = React.memo(({ items, onItemCheck, onItemRemove }) => (
  <>
    {items.length > 0 && (
      <List style={{ overflow: "scroll" }} sx={{m:0,p:0}}>
      {items.map((todo, idx) => (
        <TodoListItem
          {...todo}
          key={`TodoItem.${idx}`}
          divider={idx !== items.length - 1}
          onButtonClick={() => onItemRemove(idx)}
          onCheckBoxToggle={() => onItemCheck(idx)}
        />
      ))}
    </List>
    )}
  </>
));

export default TodoList;
