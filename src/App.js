import React, {Component} from 'react';
import Card from './Card';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      activity: [],
    }
  }

  componentDidMount(){
    fetch('https://www.boredapi.com/api/activity/').then(response=>{
      return response.json();
    }).then(activity =>{ 
      this.setState({activity: activity})  
    });
    
  }

  
  render(){
    const activityObject = this.state.activity;
    if(this.state.activity.length === 0){
      return <h1>Loading ....</h1>
    }else{

      return (
        <div className='tc'>
          <h1 className='f1'>Kill Boredom</h1>
                <Card activity={activityObject}/>
                <button onClick={() => window.location.reload(false)}>Show me another way to fight boredom!</button>
        </div>
      );
    }
  }
}

export default App;

