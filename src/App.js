import React from 'react';
import data from './data.js';
import Header from './components/header'


class App extends React.Component {
  state = {
    data: data,
    subject: '',
    minPer : null,
    clsAtt : null,
    totCls : null
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
      totCls : null
    });
  }


  showList = newSubject => {
    var percentage = (newSubject.clsAtt/newSubject.totCls)*100;
    percentage = percentage.toFixed(2);
      return <span>
        <div className="row">
          <div className="col-sm-3">
            {percentage}
          </div>
          <div className="col-sm-9">
          {newSubject.subject}
          </div>
        </div>
        </span>
  }
 

  form = () => {
    return <div className="">
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
    </div>
  }
  
  render () {
    return (
      <div>
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
    
    </div>
    )
  }
}

export default App;