import React,{Component} from 'react';
import axios from 'axios';


class Dummy extends Component{
  getvalue = () =>{
    axios.get("http://localhost:8080/getlimitedquestions?questionloaded=17")
      .then(res => {console.log(res.data)})
      .catch(err => {console.log(err)});

  }


  render(){
    return(
      <div>
          Helloooo.....
          {this.getvalue()}
      </div>
    );
  }
}

/*class Dummy extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count:0,
        questions:[],
        totalnumberofquestion:0,
        hasMoreItems: true
      };
    }

          componentDidMount(){
            axios.get("http://localhost:8080/getcountofquestionandanswer")
              .then(res => {
                  this.setState({totalnumberofquestion : res.data})
              })
              .catch(err => {
                console.log(err);
              })
          }
        
    showItems() {
    console.log("showitems");
    console.log(this.state.questions);
    var questions = this.state.questions;
    var items = [];
    
    for (var i = 0; i < this.state.count; i++) {
      if(questions[i]){
      items.push(
        <li key={i}> <h2>{questions[i].question}</h2></li>

      );
      }
    }
    return items;
    }
  
    loadMore() {
    console.log("***********loadMore****************");
      if(this.state.count >= 17){  
        console.log("Hasmoreitems");
        this.setState({ hasMoreItems: false});
      }
      else{
          setTimeout(() => {
            axios.get("http://localhost:8080/getlimitedquestions?questionloaded="+ this.state.count)
              .then(res => {
                console.log(res);
                this.setState({
                  items: this.state.items + 5,
                  count:this.state.count+res.data.length,
                  questions : [...this.state.questions,...res.data]
                });
              })
              .catch(err => {
                console.log(err);
              })
            //this.setState({items: this.state.items + 10});
            //console.log(this.state.items);
          }, 500);
      }
    }
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            
            <h1 className="App-title"> Welcome to React </h1>{" "}
          </header>
  
          <div style={{height:'250px', overflow:'auto'}}>
            <InfiniteScroll
              loadMore={this.loadMore.bind(this)}
              hasMore={this.state.hasMoreItems}
              loader={<div className="loader"> Loading... </div>}
              useWindow={false}
            >
              {this.showItems()}{" "}
            </InfiniteScroll>{" "}
          </div>{" "}
        </div>
      );
    }
  }
  */

export default Dummy;

/*<ReadMoreAndLess className="read-more-content" charLimit={15} readMoreText="Read more" readLessText=" Read less">
 </ReadMoreAndLess>

[
    { 
        M:{
            answer={S: A company secretary is a senior position in a private sector company or public sector organisation. In large American and Canadian publicly listed corporations, a company secretary is typically named a corporate secretary or secretary.  ,}, 
            answered_by={S: Akila,}
        },
    }, 
    {
        M:{
            answer={S: Computer Science,}, 
            answered_by={S: Akila,}},
        }, 
    {
        M: {
            answer={S: cs="Computer Science",}, 
            answered_by={S: Akila,}},
        }
]
*/