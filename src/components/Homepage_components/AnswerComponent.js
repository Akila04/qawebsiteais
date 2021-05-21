import React,{Component} from 'react';
import axios from 'axios';
import  {Redirect} from 'react-router';

class AnswerComponent extends Component{
    constructor(props){
        super(props);
        let answeradded=false;
        const username = localStorage.getItem("username");
        this.state={
            username:username,
            answeradded,
            answertextarea:""
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

    aftersubmition = (res) =>{
        if(res.data === "success"){
            alert("your answer added successfully!!!!!");
            this.setState({answeradded:true})
        }
        
    }

    getanswertextbox = (question) =>{
        this.setState({answertextarea:question});
    }



    render(){
        const questions = this.props.question;
        if(this.state.answeradded){
            return(
                <Redirect to="/homepage" />
            );
        }
        return(
            <div>
                {questions.map(ques => ( 
                    <div key={ques.question}>   
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
            </div>
        );
    }
}

export default AnswerComponent;