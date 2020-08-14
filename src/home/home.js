import React,{Component} from "react"
import {withRouter, Link} from 'react-router'
import "./home.less"
class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="main">我是首页首页首页啊</div>
        )
    }
}

export default withRouter(Home);