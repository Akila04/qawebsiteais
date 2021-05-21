import React,{Component} from 'react'
import Loginpage from './Loginpage'
import Login from './Login'
import Homepage from './Homepage'

import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signinpage from './Signinpage';
import Dummy from './Dummy'
import Logout from './Logout'
import Navigationbar from './Navigationbar'

import Singlequestionpage from './Homepage_components/Singlequestionpage'
import Addquestionpage from './Homepage_components/Addquestionpage'
import Answerpage from './Homepage_components/Answerpage'
import Addanswer from './Homepage_components/Addanswer'

class Firstpage extends Component{

    render(){
        return(
            <div>
               <Router>
                    <Route path="/singlequestionpage/:question/:questioned_by" exact component={Singlequestionpage} />
                    <Route path="/addquestionpage" exact component={Addquestionpage}/>
                    <Route path='/homepage' exact component={Homepage} />
                    <Route path='/signin' exact component={Signinpage} />
                    <Route path='/login' exact component={Loginpage} />
                    <Route path='/' exact component={Login} />
                    <Route path="/dummy" exact component={Dummy} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/nav" exact component={Navigationbar} />
                    <Route path="/answerpage" exact component={Answerpage} />
                    <Route path="/addanswer/:question" exact component={Addanswer} />
                </Router>
            </div>
        );
    }
}
export default Firstpage;
/*
<Route to="/singlequestionpage" exact component={Singlequestionpage} />
 <Route path='/log' exact component={Login} />
                    <Route path="/homepage" component={Homepage} />
<Link to='/signin'>
                            <button>SIGN IN </button>
                        </Link>
                        <Route path='/' exact component={Loginpage} />
                        <Route path='/signin' exact component={Signinpage} />

*/




