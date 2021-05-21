import React,{Component} from 'react';


import {Redirect} from 'react-router'

class Login extends Component{

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

    render(){
        if(this.state.loggedin){
            return (<Redirect to="/homepage" />);
        }

        return(
            <Redirect to='/login' />
        );
    }
}
export default Login;

/*<div>
                <Router>
                   
                    <Link to='/signin'>
                        <div className="signinbutton">
                            <button>SIGN IN </button>
                        </div>
                    </Link>
                    <Link to='/login'>
                        <div className="loginbutton">
                            <button > LOGIN</button>
                        </div>
                    </Link>
                    
                    <Route path='/signin' exact component={Signinpage} />
                    <Route path='/login' exact component={Loginpage} />
                    <Route path='/' exact component={Loginpage} />
                 
                </Router>*/
