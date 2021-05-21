import React,{Component} from 'react';
import Addquestionpage from './Homepage_components/Addquestionpage';

class Navigationbar extends Component{

    addquestionhandler = () =>{

        window.location.assign("/addquestionpage");
    }

    render(){
        const username=localStorage.getItem("username");
        return(
            <div> 
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <ul className="navbar-nav">
                        <li className="nav-item active navheading">
                            <a className="nav-link" href="/homepage">DORA</a>
                        </li>
                        <li className="nav-item navitem">
                            <a className="nav-link" href="/homepage">
                            <i className="fa fa-home iconsize"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav-item navitem">
                            <a className="nav-link" href="/answerpage">
                            <i className="fa fa-pencil-square-o iconsize"></i>
                                Answer
                            </a>
                        </li>
                        <li className="nav-item navitem">
                            <a className="nav-link" href="#">
                            <i className="fa fa-bell iconsize"></i>
                                Notification
                            </a>
                        </li>
                        <li className="nav-item ">
                        <i className="fa fa-search searchicon"></i>
                            <input type="test" className="navitemsearch" placeholder="search"/>
                        </li>
                        <li className="nav-item">
                            <Addquestionpage />
                        </li>
                        <li className="profilebutton">
                        <div className="dropdown">
                            <i className="fa fa-user-circle-o usericon"></i>
                            <div className="dropdown-content">
                                <p><i className="fa fa-user-circle-o"></i></p>
                                <p>{username}</p>
                                <div className="profilecontentline">
                                </div>
                                <p>
                                <a href="#">About</a>
                                </p>
                                <p>
                                <a href="#" >changePassword</a>
                                </p>
                                <p>
                                <a href="/logout">signout</a>
                                </p>
                            </div>
                        </div>
                        </li>
                        
                    </ul>
                </nav>
              
            </div>            
        );
    }
}
export default Navigationbar;

/*

<button className="addquestionbtn" onClick={this.addquestionhandler}>Add Question</button>

<div className="dropdown">
                            <button type="button" data-toggle="dropdown">
                            <i class="fa fa-user-circle-o"></i>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Link 1</a>
                                <a className="dropdown-item" href="#">Link 2</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </div>
*/