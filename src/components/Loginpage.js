import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Loginpage extends Component{
    constructor(){
        super();
        let loggedin=true;
        const token=localStorage.getItem("token");
        if(token === null){
            loggedin=false;
        }
        this.state={
            loggedin
        }
        this.logout=this.logout.bind(this);
    }

    loginresponse = (response) => {
        const user=response.data.username
        const jwt=response.data.jwt;
        if(jwt === 'false'){
            alert('incorret usename or password');
        }
        else{
            localStorage.setItem("token",jwt);
            localStorage.setItem("username",user);
            this.setState({loggedin:true});
        }

    }

    clickhandler = (event) =>{
        event.preventDefault();
        const name=document.getElementById("Name").value;
        const password=document.getElementById("Password").value;
        
        if((name!=='')&&(password!=='')){
           // axios.get("/login?userid=" + name + "&password=" + password)
           //     .then(res=> {this.loginresponse(res)})
           //     .catch(err=>{console.log(err)});
           const res = {
               data: {
                   username: 'Aiska',
                   jwt : "true"
               }
           }
           this.loginresponse(res)
            
        }
    }

    signinclick = () =>{
        return <Redirect to="/signin" />
    }

    logout(){
        this.setState({loggegin:false});
    }

    render(){
        if(this.state.loggedin){
            return (<Redirect to="/homepage" />);
        }
        else{
            return(
                <div>
                    <div className="signinbutton">
                    <Link to="/signin">
                        <button className="switchingbutton">Sign In</button>
                    </Link>
                    </div>
                    <div className="jumbotron initialpage">
                        
                        <div className="loginbox">
                            <form onSubmit={(event)=>this.clickhandler(event)}>
                            <div className="heading">DORA</div>
                            <div className="inputcontent">
                                <p className="loginhead">Login</p>
                                <input type="text" placeholder="Enter username"  className="inputbox" id="Name" required />
                                <input type="password" placeholder="Enter password" className="inputbox" id="Password" required />
                            </div>
                            <button className="submitbutton">LOGIN</button> 
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Loginpage;

/*
.then(res=> {this.loginresponse(res)})
*/
/* 34: .then(res=> {this.loginresponse(res)})*/
