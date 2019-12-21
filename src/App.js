import React from 'react';
import data from './data.js';
import Header from './components/header'
import './App.css'
import ModalForm from './components/modalForm'


class App extends React.Component {
  
constructor(props){
  super(props);
  this.state = {
      id : Math.random(),
      data: data,
      subject: '',
      minPer : null,
      clsAtt : null,
      totCls : null,
      isEditMode : false,
      sub : null
  }
}


  subjectC = (e) => {
    this.setState({
     subject: e.target.value 
    })
  }

  minPerC = (e) => {
    this.setState({
      minPer : e.target.value
    })
  }

  clsAttC = (e) => {
    this.setState({
      clsAtt : e.target.value
    })
  }

  totClsC = (e) => {
    this.setState({
      totCls : e.target.value
    })
  }


  createNewSubject = () => {
    let newSubject = {
      id: Date.now(),
      subject: this.state.subject,
      minPer : this.state.minPer,
      clsAtt : this.state.clsAtt,
      totCls : this.state.totCls,
    }
    let data = [...this.state.data, newSubject];
    this.setState({
      data,
      subject: "",
      minPer : null,
      clsAtt : null,
      totCls : null,
      sub : null
    });
  }

  delete = (td) => {
    var data = this.state.data.filter(obj => obj.id !== td.id);
    this.setState({
      data,
      subject: "",
      minPer : null,
      clsAtt : null,
      totCls : null,
      sub : null
    });
  }

  edit = (td) => {
    let data = this.state.data;
    this.setState({
      data,
      subject: "",
      minPer : null,
      clsAtt : null,
      totCls : null,
      sub  : td
    });
  }

  editted = (edittedSub) => {
    var info = this.state.data.filter(obj => obj.id !== edittedSub.id);
    var data = [...info , edittedSub];
    this.setState({
      
      data,
      subject: "",
      minPer : null,
      clsAtt : null,
      totCls : null,
      sub  : null
    })
  }

  showList = newSubject => {
    var percentage = (newSubject.clsAtt/newSubject.totCls)*100;
    percentage = percentage.toFixed(2);
      return <span>
        <div className="row">
          <div className="col-sm-4">
            {percentage}%
          </div>
          <div className="col-sm-8">
          {newSubject.subject  } 
          <div id="buttons" className="btn-group btn-group-sm">
            <button   onClick={()=>this.edit(newSubject)}  
             className="btn btn-primary">Edit</button>
             
            <button  onClick = {() =>  this.delete(newSubject)}
             className="btn btn-primary">Delete</button>
          </div>  
          </div>
        </div>
        </span>
  }
 

  form = () => {
    if(this.state.isEditMode){
      return (
        <div>
        
        </div>
      )
    } else 
    return (<div>
      <div className="">
        <h4>Add New Subject</h4>
      </div>
      <div className="col-sm-4">
        <label htmlFor="">Subject:</label>
        <br/>
        <input
          type="text"
          className=""
          value={this.state.subject}
          placeholder="subject..."
          onChange={this.subjectC}
          />
          <label htmlFor="">Minimum percentage:</label>
          <br/>
          <input type="number"
          className=""
          value={this.state.minPer}
          placeholder="min%..."
          onChange={this.minPerC} />
          <label htmlFor="">Classes Attended:</label>
          <br/>
          <input type="number"
          className=""
          placeholder="Classes Attended..."
          value={this.state.clsAtt}
          onChange={this.clsAttC} />
          <label htmlFor="">Total Classes:</label>
          <br/>
          <input type="number"
          className=""
          value={this.state.totCls}
          placeholder="Total Classes..."
          onChange={this.totClsC} />
          <button
            onClick={this.createNewSubject}
            className="btn btn-default">Add </button>
      </div>
    </div>)
  }
  
  render () {
    return (
      <div>
      <ModalForm sub={this.state.sub} editted={this.editted} />
        <Header />
    <div className="row">
      <div className="col-sm-8">
        <div className="list-group">
        {
          this.state.data.map(newSubject => {  
            return <li className="list-group-item" key={newSubject.id}>
            {this.showList(newSubject)}
            </li>
          })
        }
        </div>
      </div>
      <div className="col-sm-4">
        {
          this.form()
        }
      </div>
    </div>
    <div>
                 
                
    </div>
    </div>
    )
  }
}

export default App;