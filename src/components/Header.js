import React, { useContext } from "react";
import dig from "object-dig";
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext } from "../providers/AuthProviders";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createMuiTheme, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    toolbar: {
        justifyContent: 'space-between'
    },

    button: {
        color: '#FFF'
    }
}));


const Header = () => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser);

    //　もしログインしていたら
    const buttonRender = () => {
     let buttonDom
     if( dig(currentUser, 'currentUser', 'uid') ){
         // currentUser.currentUser.Im.〇〇
        buttonDom = <Button variant = 'inherit' onClick = {logOut}>ログアウト</Button>
    //　もしログインしていなかったら
    }else{
        buttonDom = <Button variant = 'inherit' onClick={signInWithGoogle}>ログイン</Button>
    }
    return buttonDom
    }

    const classes = useStyles();

    return(
        <AppBar position="static">
         <Toolbar className={classes.toolbar}>
             <Typography variant="h6" >
               やることリスト
             </Typography>
            {buttonRender()}
          </Toolbar>
      </AppBar>
        // <header>
        //     ヘッダー
        //     {buttonRender()}
        // </header>


    )
} 

export default Header;