import React,{Component} from 'react'
import  {Redirect} from 'react-router';
import axios from 'axios';
import Navigationbar from '../Navigationbar';
import AnswerComponent from './AnswerComponent';
import InfiniteScroll from "react-infinite-scroller";


class Answerpage extends Component{

    constructor(){
        super();
        let loggedin=true;
        const username = localStorage.getItem("username");
        const token=localStorage.getItem("token");
        if(token === null){
            loggedin=false;
        }
        this.state={
            username:username,
            questions:[
                {
                    question: "What is JS? ",
                    questioned_by: "Aiska"
                },
                {
                    question: "What is HTML? ",
                    questioned_by: "Aishwarya"
                },
                {
                question: "What is css? ",
                questioned_by: "Akshaya"
                },
                {
                    question: "What is Quantum science? ",
                    questioned_by: "kundana"
                },
                {
                    question: "What is website? ",
                    questioned_by: "gayathiri"
                },
                {
                    question: "What is Full stack development? ",
                    questioned_by: "reena"
                }
            ],
            count:0,
            hasMoreItems: true,
            loggedin
        }
    }


    getquestions = () =>{
        return (
            <AnswerComponent question={this.state.questions} />   

        );

    }

    loadMore() {
        console.log("***********loadMore****************");
        const accesstoken=localStorage.getItem("token");
          
        if(this.state.hasMoreItems === true){
          setTimeout(() => {
            axios.get("/getlimitedquestions?questionloaded="+ this.state.count,
                    {headers:{
                        Authorization:"Bearer " + accesstoken
                    }})
              .then(res => {
                this.setquestions(res.data);
              })
              .catch(err => {
                console.log(err);
              })
          }, 1000);
        }
    }

    setquestions = (response) =>{
        if(response){
            this.setState({
                count:this.state.count+response.length,
                questions : [...this.state.questions,...response]
            });
           
        }
        else{
            this.setState({ hasMoreItems: false});
        }
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
                                        <div>   
                                            <p className="questionbox">questions for you</p>
                                            <hr />
                                        </div>
                                        <div>
                                            <InfiniteScroll
                                                loadMore={this.loadMore.bind(this)}
                                                hasMore={this.state.hasMoreItems}
                                                loader={<div className="loader"> Loading...</div>}
                                                useWindow={true}
                                            >
                                                {this.getquestions()}{" "}
                                            </InfiniteScroll>{" "}
                                        </div>{" "}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 ">    
                                
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

export default Answerpage;


 /*componentDidMount(){

        const accesstoken=localStorage.getItem("token");
        axios.get("/getquestions",{headers:{
            Authorization:"Bearer " + accesstoken
        }})
        .then(res => {
            console.log(res.data);
            this.setState({questions:res.data});
        })
        .catch(err => {console.log(err)});
    }
*/
    /*aftersubmition = (res) =>{
        if(res.data === "success"){
            alert("your answer added successfully!!!!!");
            this.setState({answeradded:true})
        }
        
    }

    submitanswer = (question,questioned_by) =>{
        const answer=document.getElementById("answer").value;
        const accesstoken = localStorage.getItem("token");
        console.log("Question : " + question);
        console.log("Answer: " + answer);
        axios.post("/addAnswerforaQuestion?question=" + question  + "&questioned_by=" + questioned_by,
            {answer:answer,
            answered_by:this.state.username
            },
            {   headers:{
                "content-type":"application/json",
                "Authorization":"Bearer " + accesstoken
                }
                
            })
            .then(res=>{
               this.aftersubmition(res);
            })
            .catch(err=>{console.log(err)})
           
    }

    
    getanswertextbox = (question) =>{
        console.log(question);
        this.setState({answertextarea:question});

    }*/

    /*<div>
                {questions.map(ques => ( 
                    <div>   
                        <div className="questionbox">
                            <p className="subscript">questioned_by</p>
                            <i className="fa fa-user-circle-o"></i>
                            &nbsp;{ques.questioned_by}
                            <h3>{ques.question}</h3>
                            <button onClick={()=>{this.getanswertextbox(ques.question)}}>Answer</button>
                            { 
                                (ques.question === this.state.answertextarea) 
                                ? <div className="answerbox">
                                    <header className="answertextboxheader">
                                        <p className="answertextboxheadercontent"><i className="fa fa-user-circle-o"></i>{this.state.username}</p>
                                    </header>
                                    <textarea className="answertextbox" placeholder="type your answer...." id="answer"></textarea>
                                    <footer className="answertextboxfooter">
                                        <p>
                                        <button className="answertextboxfootercontent" onClick={() => {this.submitanswer(ques.question,ques.questioned_by)}}>submit</button>
                                        </p>
                                    </footer>
                                 </div>
                                : <div></div>
                                
                            }
                        </div>
                        <hr />
                    </div>  
                ))}
            </div>*/

/*if(this.state.answeradded){
            return(
                <Redirect to="/homepage" />
            );
        }*/

       /*114: {this.getquestions(this.state.questions)}*/
