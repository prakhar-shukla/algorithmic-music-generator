import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'


const NavigationItems = (props) => {
    return (
        <div className={classes.NavigationItems}>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>About</NavigationItem>
        </div>
    )
}
export default NavigationItems