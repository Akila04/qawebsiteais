import React,{Component} from 'react';
import axios from 'axios';
import  {Redirect} from 'react-router';
import {Link} from 'react-router-dom'
import ReadMoreAndLess from 'react-read-more-less';
import Navigationbar from './Navigationbar';
import InfiniteScroll from "react-infinite-scroller";


class Homepage extends Component{
    
    constructor(){
        super(); 
        let loggedin=true;
        const username = localStorage.getItem("username");
        const token=localStorage.getItem("token");
        if(token === null){
            loggedin=false;
        }
        this.state={
            count : 4,
            username:username,
            questions:[
                {
                    question: "What is React js?",
                    questioned_by: "aishwarya",
                    answer: [
                        {
                            answer: "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications",
                            answered_by: "akshaya"
                        },
                        {
                            answer: "React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.",
                            answered_by: "akila"
                        }
                    ]
                },
                {
                    question: "What is Quora?",
                    questioned_by: "akshaya",
                    answer: [
                        {
                            answer: "Quora is an American question-and-answer website where questions are asked, answered, followed, and edited by Internet users, either factually or in the form of opinions. Its owner, Quora Inc., is based in Mountain View, California, United States",
                            answered_by: "akila"
                        },
                        {
                            answer: "Quora's goal is for each question page to become the best possible resource for people who want to know about that question. Quora allows users to create personalized homepages that feature the things they want to learn more about by following topics, questions, people and boards",
                            answered_by: "aishwarya"
                        }
                    ]
                },
                {
                    question: "What is Spring Boot?",
                    questioned_by: "jungkook",
                    answer: [
                        {
                            answer: "The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform",
                            answered_by: "akshayaa"
                        },
                        {
                            answer: "Spring is a very popular Java-based framework for building web and enterprise applications. Unlike many other frameworks, which focus on only one area, Spring framework provides a wide verity of features addressing the modern business needs via its portfolio projects.Spring framework provides flexibility to configure beans in multiple ways such as XML, Annotations, and JavaConfig. With the number of features increased the complexity also gets increased and configuring Spring applications becomes tedious and error-prone.The Spring team created Spring Boot to address the complexity of configuration.",
                            answered_by: "aishwarya"
                        }
                    ]
                },
                {
                    question: "What is the procedure to drop out of college?",
                    questioned_by: "akshayaa",
                    answer: [
                        {
                            answer: "The first thing first which you need to do is write an application, to the Principal or Teacher in charge stating why you want to discontinue the college, be specific and also mention in your application that you also want them to issue you a “Transfer certificate” or T.C.Than visit to the office of your college where the official works are done mostly, and ask them what documents you need to attach with your application to verify the same, it varies from college to colleges or universities - universities norms.",
                            answered_by: "aishwarya"
                        },
                        {
                            answer: "If you had availed for any railway concessions, make sure to submit those documents back, return the library card, and if you had taken any scholarships either from govt. Or from the college for your studies make sure you return them all, and then they will put a stamp on your fees book stating that “All cleared”Now submit everything to the designated official who will forward the application to the Principal upon further verification, then you may have to pay a nominal fees for issuing a T.C , in my case I had to pay R.s 100/-, which you have to pay through bank challan!",
                            answered_by: "akila"
                        }
                    ]
                }
            ],
            answer:[],
            response:[],
            hasMoreItems: true,
            loggedin
        }
    }

    getanswer = (ans) =>{
        return(
            <div>
                <div>
                
                <ReadMoreAndLess
                            className="read-more-content"
                            charLimit={200}
                            readMoreText="Read more"
                            readLessText=" Read less"
                        >
                        {ans.answer}
                </ReadMoreAndLess>
                </div>
            </div>
        );

    }

    showItems = () =>{
        var questions=this.state.questions;
        /*questions = [
            {
                question: "What is CS ?",
                questioned_by: "AIS",
                answer: [{
                    answer: "CS IS COMPUTER SCIENCE",
                    answered_by: "AKILA"
                }]
            }
        ];*/
        console.log()
        var items = [];
        for (var i = 0; i < this.state.count; i++) {
            if(questions[i]){
                items.push(
                <div key={i}>
                    <div className="box">
                        <div className="question_asked_by">
                            <p className="subscript">answered_by</p>
                            <i className="fa fa-user-circle-o"></i>
                            &nbsp;{questions[i].answer[0].answered_by}
                        </div>
                        <Link to={'/singlequestionpage/'+ questions[i].question + '/' + questions[i].questioned_by}>
                            <p className="question">{questions[i].question}?</p>
                        </Link>
                        <div className="answer">{this.getanswer(questions[i].answer[0])}</div>
                        <p className="subscript">answered_by</p>
                            <i className="fa fa-user-circle-o"></i>
                            &nbsp;{questions[i].answer[1].answered_by}
                        <div className="answer">{this.getanswer(questions[i].answer[1])}</div>
                    </div>
                </div>
                )
            }
        }

        return items;
    }

    loadMore() {
        const accesstoken=localStorage.getItem("token"); 
       /* if(this.state.hasMoreItems === true){
          setTimeout(() => {
            axios.get("/getlimitedquestionanswers?questionloaded="+ this.state.count,
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
        }*/
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

    backbtn = () =>{
        window.location.reload();
    }

    getreloadbutton = () =>{
        if(!this.state.hasMoreItems){
            return (
                <div>
                    <button className="Reloadbtn" onClick={() => {this.backbtn()}}>BACK TO TOP</button>
                </div>
            );
        }
        else{
            return <div></div>
        }
    }

    logouthandler = () =>{
        this.setState({loggedin:false});
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
                                <p className="homepageusername">&nbsp;<i className="fa fa-user-circle-o"></i>&nbsp;{this.state.username}</p>
                                <p>&nbsp;What is your question ?</p>
                            </div>
                            <div>
                                <InfiniteScroll
                                    loadMore={this.loadMore.bind(this)}
                                    hasMore={this.state.hasMoreItems}
                                    loader={<div className="loader" key={0}> Loading...</div>}
                                    useWindow={true}
                                >
                                    {this.showItems()}{" "}
                                </InfiniteScroll>{" "}
                            </div>{" "} 
                            {this.getreloadbutton()}
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

export default Homepage;

/*

.then(res=>{this.temp(res)})
            .catch(err=>console.log(err));
<p><i class="fa fa-user-circle-o"></i> {q.question_asked_by}</p>

<p className="answer">{this.getanswer(q.answers)}</p>
*/

/*axios.get("http://localhost:8080/getlimitedquestions?questionloaded=" + this.state.count)
                .then(res => {
                    this.setState({
                        response:[...this.state.response,...res.data],
                        count:this.state.count+res.length
                    })
                })
                .catch(err => {console.log(err)})*/
            /*axios.get('/questionanswers',{
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            })
            .then(res=>{
                this.setState({response:res.data});
                console.log(res);
            })
            .catch(err=>{console.log(err)});
*/

/*
<div className="col-sm-6">
                            <div className="box">
                                <p className="homepageusername">&nbsp;<i className="fa fa-user-circle-o"></i>&nbsp;{this.state.username}</p>
                                <p>&nbsp;What is your question ?</p>
                            </div>
                            <div>
                                {qa.map(q => (
                                    <div className="box">
                                        <div className="question_asked_by">
                                            <p className="subscript">answered_by</p>
                                            <i className="fa fa-user-circle-o"></i>
                                            &nbsp;{q.answer[0].answered_by}
                                        
                                        </div>
                                        <Link to={'/singlequestionpage/'+ q.question + '/' + q.questioned_by}>
                                            <p className="question">{q.question}?</p>
                                        </Link>
                                        <p className="answer">{this.getanswer(q.answer[0])}</p>
                                    </div>
                                ))}
                            </div>
                            <button onClick = {() => {this.loadmore()}}>loadmore</button>
                        </div>
*/

/*
<div>
                                {qa.map(q => (
                                    <div className="box">
                                        <div className="question_asked_by">
                                            <p className="subscript">answered_by</p>
                                            <i className="fa fa-user-circle-o"></i>
                                            &nbsp;{q.answer[0].answered_by}
                                        
                                        </div>
                                        <Link to={'/singlequestionpage/'+ q.question + '/' + q.questioned_by}>
                                            <p className="question">{q.question}?</p>
                                        </Link>
                                        <p className="answer">{this.getanswer(q.answer[0])}</p>
                                    </div>
                                ))}
                            </div>


*/

/*loadquestions = () =>{

        axios.get("http://localhost:8080/getlimitedquestions?questionloaded=" + this.state.count)
                .then(res => {
                    this.setState({
                        response:[...this.state.response,...res.data],
                        count:this.state.count+res.data.length
                    })
                })
                .catch(err => {console.log(err)})


    }*/
    /*loadmore = () =>{
        console.log("clicked");
        this.loadquestions();
    }*/

    /*console.log(response);
            this.setState({
                count:this.state.count+response.length,
                questions : [...this.state.questions,...response]
            });*/
 /*console.log("Hasmoreitems");
            this.setState({ hasMoreItems: false}); */

/*if(this.state.count >= 17){
            console.log("Hasmoreitems");
            this.setState({ hasMoreItems: false});
          }
          else{*/

/*componentDidMount() {
        if(this.state.loggedin){
            const accessToken=localStorage.getItem("token");
            console.log('Bearer ' + accessToken);
            const url="login/qa";

            //this.loadquestions();
            
        }
    }*/