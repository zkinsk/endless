import React from 'react';

//utilities
import api from './utils/api';

// components
import Header from './components/header/Header';
import ImageContent from './components/imageContent/ImageContent';
import HiW from './components/howItWorksBox/HiW';

//for global styles and variables see index.css


class App extends React.Component{

  state = {
    started: false,
    currentSteps: [],
  };

  componentDidMount(){
    // console.log(this.state)
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  clickStart = () => {
    let started = this.state.started === false;

    if (started) {
      api
        .getStarted()
        .then(res => {
          // console.log(res.data)
         let newSteps = this.filterSortData(res.data);
         this.setState({
           started: started,
           currentSteps: [...newSteps]
          })
        })
        .catch(err => {
          console.log(err)
        })
    }else{
      this.setState({started: started});
    }
  }


  filterSortData = (data) =>{
    data.sort( (a,b) => a.stepNumber - b.stepNumber); //sorts results by step number
    
    return data.map( listItem => {
      // console.log(listItem)
      listItem.versionContent.sort( (a,b) => {
        a = new Date (a.effectiveDate);
        b = new Date (b.effectiveDate)
        return (b - a)
      })
      listItem.versionContent[0].id = listItem.id
      listItem.versionContent[0].stepNumber = listItem.stepNumber
      return  listItem.versionContent[0]
    })
    // console.log(finalArray)
  }
  
 
  render(){
    return(
      <div className="fullPage">
      <Header>{/* Header only contains logo svg */}</Header>
      <ImageContent buttonClick = {this.clickStart}/>
      {this.state.started && <HiW steps = {this.state.currentSteps}/>}
      <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
    </div>
    )
  }
}

export default App;
