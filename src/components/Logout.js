import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';


class Logout extends Component{

    constructor(){
        super();
        localStorage.removeItem("token");
    }
    
    render(){

        return(

            <div>
                <Redirect to="/login" />
                 
            </div>
        );
    }
}

export default Logout;