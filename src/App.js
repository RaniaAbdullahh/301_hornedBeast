import {React, Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast '
import HornedData from './components/HornedData.json'
class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      image_url : '',
      description : '',
      show : false

     
    };
  }
    selectHandler=(title,image_url,description)=>{
      this.setState({
        title : title,
        image_url :image_url,
        description : description
      })
      // console.log('state is here =>',this.state)

    }
    showHandler=()=>{
      this.setState({
        show : true

      })
    }
    closeHandler=()=>{
      this.setState({
        show : false
      })
    }
  
  render(){
    return (
      <>
      <Header/>
      <Main allData={HornedData} selectHandler= {this.selectHandler}  show={this.showHandler}/>
      <SelectedBeast show={this.state.show} close= {this.closeHandler} title={this.state.title}  image_url={this.state.image_url}  description={this.state.description}/>
      <Footer/>
  
  
      </>
    
    );

  }

 
}

export default App;
