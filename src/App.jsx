import { useState,Component } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './components/Plan'

class App extends Component {
  state={
    items:[],
    Text:"",
  }
  handelChange=e=>{
    this.setState({
      Text:e.target.value
    })
  }
  handelAdd= e=>{
    if(this.state.Text!==""){
      const items=[...this.state.items,this.state.Text];
      this.setState({items:items,Text:""})
    }
  }
  handelDelete= id=>{
    console.log("Delete",id);
    const oldItem=[...this.state.items]
    console.log(oldItem)
    const items=oldItem.filter((element,i) =>{
      return i!==id
    })
    console.log(items)
    this.setState({items:items});

  }
  render() {
    return (
      <div className='container-fluid my-4'>
        <div className="row">
          <div className="col-sm-6 mx-auto text-black shadow-lg p-2">
            <h1 className="text-center">Today's Plan</h1>
            <div className="row">
              <div className="col-9">
                <input type="text" className='form-control' placeholder='Write your plan here...' value={this.state.Text
                } onChange ={this.handelChange} />
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5 fw-bold' onClick={this.handelAdd}>Add</button>
                </div>
              <div className="container-fluid">
              <ul className='list-unstyled row m-5'>
                {
                  this.state.items.map((value,i)=>{
                  return <Plan key={i} id={i} value={value} sendData={this.handelDelete}/>
                  }
                )}
              </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
    
    )
  }
}

export default App;