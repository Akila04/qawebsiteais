import React,{Component} from 'react';
import axios from 'axios';

class Addquestionpage extends Component{
    constructor(){
        super();
        const username = localStorage.getItem("username");
        this.state={
            username:username
        }

    }

    clickHandler = () =>{
        var question=document.getElementById("question").value.trim();
        const accesstoken=localStorage.getItem("token");
        const len=question.length;
        if(question[len-1] === '?'){
           question = question.substr(0,len-2);
        }
        /*axios.post("/addquestion",
                {   question:question,
                    questioned_by:this.state.username
                },
                {   headers:{
                        "content-type":"application/json",
                        "Authorization":"Bearer " + accesstoken
                    }
                
                })
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{console.log(err)})*/

        
        console.log("***********" + question + "***********" + len + "*********" + question[len-1]);

    }

    render(){
        const username = localStorage.getItem("username");
        return(
            <div>
            
                <button type="button" className="btn addquestionbtn" data-toggle="modal" data-target="#myModal">
                 Add Question
                </button>
               

                <div className="modal modalbox"  id="myModal" data-backdrop="false" role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Question</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p className="addquestionubscript"><i className="fa fa-user-circle-o "></i>
                                &nbsp;{username} asked</p>
                                <input type="text" className="questiontextbox" id="question" placeholder = "Start Your question with What, How, Why, etc. "/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="modalbutton" data-dismiss="modal">Close</button>
                                <button type="button" className="modalbutton"  data-dismiss="modal" onClick={()=>{this.clickHandler()}}>Add Question</button>                            
                            </div>
                
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Addquestionpage