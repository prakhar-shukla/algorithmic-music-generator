import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'
import classes from './ToolBar.module.css'

const ToolBar = (props) => {
    return (
        <header className={classes.MainHeader}>
            <Logo/>
            <NavigationItems/>
        </header>
    )
}
export default ToolBar