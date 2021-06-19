import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';

const useStyles= makeStyles((theme)=>({
  root:{
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assests/GrafitiVariosPaises.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      
  }
}));

export default function LandingPage(){
    const classes= useStyles();

    return(
        <div className={classes.root}>
          <CssBaseline/>
          <Header/>
        </div>
    )

}