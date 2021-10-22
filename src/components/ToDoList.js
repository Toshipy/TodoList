import React, {useState, useEffect, useContext} from "react";
import * as Api from "../service/api";
import { signInWithGoogle } from "../service/firebase";
import dig from "object-dig";
import { AuthContext } from "../providers/AuthProviders";
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createMuiTheme, makeStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';


const useStyles = makeStyles(() => ({
    list: {
        justifyContent: 'space-between',
    },
    ul: {
        paddingLeft: 0,
        listStyle: 'none',
    },

    root: {
        maxWidth: 360,
        margin: "auto",
    }
}));

const ToDoList = (props) =>{
    const classes = useStyles();
    const deleteHandle = (id) =>{
        Api.todoDelete(id);
        props.fetch();
    }

    const checkHandle = async(id) =>{
        await Api.toggleComplete(id);
        //Api経由でisCompleteの値を更新
        props.fetch();
    }
    const todoList = props.todos.map((todo) => {
         return(
             // <li key={todo.id}>{todo.content}<button type="button" onClick={() => deleteHandle(todo.id)}>削除</button></li>
            <ListItem key={todo.id}>
                <ListItemIcon>
                <Checkbox checked={todo.isComplete} onChange={() => checkHandle(todo.id)}/>
                </ListItemIcon>
                <ListItemText primary = {todo.content} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteHandle(todo.id)}>
                    <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                </ListItem>
        );
    });

    return(
    <div className={classes.root}>
        <h2>リスト一覧</h2>
        <ul className={classes.ul}>{todoList}</ul>
    </div>
    )
}
export default ToDoList;