import React,{Component} from 'react';
import Navigationbar from '../Navigationbar';
import  {Redirect} from 'react-router';
import axios from 'axios';
import ReadMoreAndLess from 'react-read-more-less';
import './Homecomponents.css';

class Singlequestionpage extends Component{

    constructor(){
        super();
        let loggedin=true;
        const token=localStorage.getItem("token");
        if(token === null){
                loggedin=false;
        }
        this.state={
            question:'',
            questioned_by:'',
            answer:[
                {
                    answer: "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
                    answered_by: "akshaya"
                },
                {
                    answer: "React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.",
                    answered_by: "akila"
                }
            ],
            loggedin
        }
    }

    componentDidMount() {
        const accessToken=localStorage.getItem("token");
            console.log('Bearer ' + accessToken);
            const questioned_by=this.props.match.params.questioned_by;
            const url="/getanswerforaquestion?question="+this.props.match.params.question+"&questioned_by=" + questioned_by;
            console.log("&&&&&" + url + "&&&&&&&&");
            console.log("question:" + this.props.match.params.question);
            console.log("name:" + this.props.match.params.name);
            /*axios.get(url,{
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            })
            .then(res=>{
                console.log(res);
                this.setState({
                    question:this.props.match.params.question+"?",
                    answer:,
                    questioned_by:questioned_by
                });
            })
            .catch(err=>{console.log(err)});*/
    }

    getanswer = (ans) =>{
        return(
            <div>
                {ans.map(a => (    
                    <p>
                        <p className="subscript">answered_by</p>
                        <i className="fa fa-user-circle-o"></i>
                         &nbsp;{a.answered_by}
                        
                        <ReadMoreAndLess
                            className="read-more-content"
                            charLimit={250}
                            readMoreText="Read more"
                            readLessText=" Read less"
                        >
                        {a.answer}
                        </ReadMoreAndLess>

                        <hr />

                    </p>
                ))}
            </div>
        );
    }
    

    render(){
       
        if(this.state.loggedin){
            return(
                
                <div>
                <Navigationbar />
                <div className="container-fluid homecontainer">
                    <div className="row">
                        <div className="col-sm-3">
                        </div>
                        <div className="col-sm-6">
                            <div className="box">
                                <div>
                                    <p className="subscript">&nbsp;&nbsp;questioned_by</p>
                                    &nbsp;<i className="fa fa-user-circle-o"></i>
                                        &nbsp;{this.state.questioned_by}
                                
                                <p className="sqpQuestionHeading">{this.state.question}</p>
                                </div>
                                <div className="line"></div>
                                <div className="sqpAnswers">{this.getanswer(this.state.answer)}</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                </div>
                </div>
            );
        }
        else{
            return <Redirect to="/login"  />
        }
    }
}

export default Singlequestionpage;

/*
     this.setState({question:this.props.match.params.question+"?",answer:res.data
*/