import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxion from '../../../hoc/Auxion/Auxion';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
       attachedClasses = [classes.SideDrawer, classes.Open] ;
    }
    return(
        <Auxion>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className = {attachedClasses.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxion> 
    );
        

}
export default sideDrawer;