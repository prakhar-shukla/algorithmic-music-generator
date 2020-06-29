import React from "react"
import ToolBar from "../../components/Navigation/ToolBar/ToolBar"
import SideBar from "../../components/Navigation/SideBar/SideBar"
import classes from './Layout.module.css'

class Layout extends React.Component{

    render(){
        return(
            <React.Fragment>
                <ToolBar/>
                <SideBar/>
                <main className={classes.MainContainer}>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout