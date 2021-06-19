
import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles= makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Alegreya',
    },
    appbar:{
        background:'none',
        
    },
    appbarWrapper:{
        width: '30%',
        margin: '30 auto',
    },
    appbarTitle:{
        flexGrow:'1',
        
    },
    icon:{
        color:'#fff',
        fontSize:'2rem',
    },
    colorText:{
        color: '#ffec2e',
    },
    container:{
        textAlign:'center',

    },
    title:{
       color:'#fff',
       fontSize: '4rem',
    },
    goDown:{
        color:'#ffec2e',
        fontSize:'15rem',
    }

}));

export default function Header(){
    const classes= useStyles();
    const [checked, setChecked]= useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])

    return(
        <div className={classes.root}>
           <AppBar className={classes.appbar} elevation={0}>
              <Toolbar className={classes.appbarWrapper}>
                  <h1 className={classes.appbarTitle}>Countries <span className={classes.colorText}>Henry</span></h1>
                <IconButton>
                   <SortIcon className={classes.icon}/>
                </IconButton> 
              </Toolbar>
           </AppBar>
           <Collapse in={checked} {...(checked?{timeout:1000}:{})} collapsedHeight={50}>
           <div className={classes.container}>
               <h1 className={classes.title}>Bienvenidos a<br/><span className={classes.colorText}>Country Henry App</span> </h1>
            <Link to='/countries'>
                <IconButton>
                   <ExpandMoreIcon className={classes.goDown}/>
                </IconButton> 
            </Link>   
               
           </div>
           </Collapse>
        </div>
    )

}
