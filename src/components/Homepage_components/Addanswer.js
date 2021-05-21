import React,{Component} from 'react'

class Addanswer extends Component{

    render(){
        return(
            <div>
                
                <h1>{this.props.match.params.question}</h1>

            </div>
        );
    }
}
export default Addanswer;

/*
<button type="button" class="btn addquestionbtn" data-toggle="modal" data-target="#answermodel">
                 Answer{this.state.question}
                </button>
transition: width 2s,height 2s ease-in-out;

                .answertextbox:focus{
    width: 400px;
    height: 75px;

}


*/