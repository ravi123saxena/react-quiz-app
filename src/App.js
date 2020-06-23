import React from 'react'
import './App.css'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [
        { qId: "q01", question: 'What is the current year?', name: '1', answers: ['2020', '2021', '2022','2023'],  rightAnswer: '2020' },
        { qId: "q02", question: 'What is the current month?', name: '2', answers: ['May', 'June', 'July', 'August'],  rightAnswer: 'June' },
        ],
      selectedIndex:0,
      selectedOption:'',
      prevquestion: true,
      nextquestion:false,
    };
    
  }

  prev = (index) => {
     return(
       <div>
          <p><em>{index+1}</em>. <span className="text-strong">{this.state.questions[index].question}</span></p>
           {this.state.questions[index].answers.map((a) => <div><input onChange={this.handleOptionChange} checked={this.state.selectedOption === a}
            type="radio"
            defaultValue={a}
            whichQuestionIndex={index}
            name={a.name} /> {a}
          </div>)
          }
       </div>
     )

  }

  next = (index) => {
    return(
      <div>
         <p><em>{index+1}</em>. <span className="text-strong">{this.state.questions[index].question}</span></p>
          {this.state.questions[index].answers.map((a) => <div><input onChange={this.handleOptionChange} checked={this.state.selectedOption === a}
           type="radio"
           defaultValue={a}
           whichQuestionIndex={index}
           name={a.name} /> {a}
         </div>)
         }
      </div>
    )
    

 }

 handleOptionChange =  (changeEvent) =>  {
  this.setState({
    selectedOption: changeEvent.target.value,

  });
}

 checkAnswer = () => {
    const rightAnswer = this.state.questions[this.state.selectedIndex].rightAnswer;
    
    if(rightAnswer === this.state.selectedOption){
      alert('Correct')
    }
    else {
      alert('Wrong')
    }
 }

 showAnswer = () => {
    const rightAnswer = this.state.questions[this.state.selectedIndex].rightAnswer;
    alert(rightAnswer)
 }

  render() {
    return (
      <div class="wrapper">
        {
          this.state.prevquestion && this.prev(0)
        }
        {
          this.state.nextquestion && this.next(1)
        }
        <div class="buttonContainer">
          <button onClick={()=>{this.setState({prevquestion:true, nextquestion:false, selectedIndex:0})}}>
              Prev
          </button>
          <button onClick={this.checkAnswer}>
              Submit
          </button>
          <button onClick={()=>{this.setState({prevquestion:false, nextquestion:true, selectedIndex:1})}}>
              Next
          </button>
          <button onClick={this.showAnswer}>
              Show Answer
          </button>
        </div>
       
      </div>
    )
  }
}





