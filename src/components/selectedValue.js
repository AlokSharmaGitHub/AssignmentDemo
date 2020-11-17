import React, { Component } from 'react';
import {Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
class SelectedValue extends React.Component {

  constructor() {
    super();
    this.state = {
      minute:0,
      second:0,
      hour:0,
      isRunning:false,
      timeInterval:1
    }
  }

  componentDidMount(){
   
  }

  handleStartPauseClick = ()=>{
    if(this.state.isRunning){
      clearInterval(this.timerId);
      this.setState({isRunning:false})
    }else{
      this.timerId = setInterval(()=>{
        return this.setState((state, props)=>{
         return {
           second:this.state.second==59?0:this.state.second+this.state.timeInterval,
           minute:this.state.second==59?this.state.minute+1:this.state.minute,
           hour:this.state.minute==59?this.state.hour+1:this.state.hour
         }
        })
     }, 1000)
     this.setState({isRunning:true})
    }
    
  }

  handleStopClick = () =>{
    clearInterval(this.timerId);
    this.setState({second:0, minute:0, hour:0, isRunning:false})
  }

  handleDecrementClick = () =>{
   this.setState({timeInterval:this.state.timeInterval - 1})
  }

  handleIncrementClick = () =>{
    this.setState({timeInterval:this.state.timeInterval + 1})
  }
 
  render() {
    return (<div>
      <h1>{this.state.hour}:{this.state.minute}:{this.state.second}</h1>
      <Button type="button" variant="primary" onClick={this.handleStartPauseClick}>{this.state.isRunning?"Pause":"Start"}</Button>&nbsp;
      <Button type="button" variant="primary" onClick={this.handleStopClick}>Stop</Button><br /><br />
      <Button type="button" variant="primary" onClick={this.handleDecrementClick}><FontAwesomeIcon icon={faMinus} /></Button>&nbsp;
      <span><strong>{this.state.timeInterval}</strong></span>&nbsp;
      <Button type="button" variant="primary" onClick={this.handleIncrementClick}><FontAwesomeIcon icon={faPlus} /></Button>

    </div>
     
    )
  }
}

export default SelectedValue;