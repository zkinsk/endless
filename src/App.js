import React from 'react';

//utilities
import api from './utils/api';
import helper from './utils/helper';

// components
import Header from './components/header/Header';
import ImageContent from './components/imageContent/ImageContent';
import HiW from './components/howItWorksBox/HowItWorksBox';

//for global css styles and variables see index.css

class App extends React.Component{

  state = {
    started: false,
    currentSteps: [],
  };

   componentDidUpdate() { 
    this.scrollToBottom(); //when steps dropdown is rendered, this will scroll the page to the bottom of its content 
  };
  
  scrollToBottom = () => {
    this.bottomOfPage.scrollIntoView({ behavior: "smooth" });
  };

  clickStart = () => {
    let started = this.state.started === false;

    if (started) {
      api
        .getStarted()
        .then(res => {
          // console.log(res.data)
          this.updateStateAndRender(res.data, started);
        })
        .catch(err => {
          console.log(err)
        })
    }else{
      this.setState({started: started});
    }
  };

  updateStateAndRender = (data, started) =>{
    let newSteps = helper.filterSortData(data); //sorts and parses api response
    this.setState({ //updates state to trigger rendering of the steps dropdown content
      started: started,
      currentSteps: [...newSteps]
     })
  };

  render(){

      return(
      <div className="fullPage">
      <Header>{/* Header only contains logo svg */}</Header>
      <ImageContent buttonClick = {this.clickStart}/>
      {this.state.started && <HiW steps = {this.state.currentSteps}/>} {/* renders the dropdown if the started button has been clicked */}
      <div ref={(el) => { this.bottomOfPage = el; }}></div>
    </div>
    )
  };
}

export default App;
