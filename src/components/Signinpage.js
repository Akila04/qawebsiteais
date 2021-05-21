import React,{Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'

class Signinpage extends Component{

    constructor(){
        super();

        const token=localStorage.getItem("token");
        let loggedin=true;
        if(token===null){
            loggedin=false;
        }
        this.state={
            loggedin
        }

    }

    signinresponse = (response) =>{

        if(response.status===200){
            localStorage.setItem("token",response.data.jwt);
            localStorage.setItem("username",response.data.username);
            this.setState({loggedin:true})
        }

    }

    userexist = (response)  =>{

        const Userid=document.getElementById("Userid").value;
        const Name=document.getElementById("Name").value;
        const Password=document.getElementById("Password").value;
        if(!response.data){
            axios.post("/signin",{userid:Userid,name:Name,password:Password})
            .then(res=>{
                this.signinresponse(res)
            })
            .catch(err=>{console.log(err)})
        }
        else{
            alert("username already exist");
        }
    }

    clickhandler = (e) =>{
        e.preventDefault();
        const Userid=document.getElementById("Userid").value;
        const Password=document.getElementById("Password").value;
        const Confirmpassword=document.getElementById("Confirmpassword").value;
        
        const url="userexist?userid=" + Userid;

        if(Password !== Confirmpassword){
            alert("mismatch password");
        }
        else{
            axios.get(url)
                .then(res=>{this.userexist(res)})
                .catch(err=>{console.log(err)})
        }
    }

    render(){

        if(this.state.loggedin){
            return (<Redirect to="/homepage" />);
        }
        return(
            <div> 
                <div className="signinbutton">
                    <Link to="/login">
                        <button className="switchingbutton">Login</button>
                    </Link>
                    </div>
               <div className="jumbotron initialpage">  
                <div className="signinbox">
                    <form onSubmit={(event)=>this.clickhandler(event)}>
                    <p className="heading">DORA</p>
                    <div className="inputcontent">
                        <p className="loginhead">signin</p>
                        <input type="text" placeholder="Enter EmailId"  className="inputbox" id="Userid" required />
                        <input type="text" placeholder="Enter Name" className="inputbox" id="Name" required/>
                        <input type="password" placeholder="Enter password" className="inputbox" id="Password" required />
                        <input type="password" placeholder="confirm password" className="inputbox" id="Confirmpassword" required />
                    </div>
                    <button className="submitbutton">SIGN IN</button> 
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Signinpage;