import React, { Component } from 'react';

export default class header extends Component {
    constructor(props){
        super(props);
        this.state = {
            subject: null,
            minPer : null,
            clsAtt : null,
            totCls : null
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

      change = () => {
          let edittedSub = {
            id: this.props.sub.id,
            subject: this.state.subject,
            minPer : this.state.minPer,
            clsAtt : this.state.clsAtt,
            totCls : this.state.totCls
          }
          this.setState({
            subject: null,
            minPer : null,
            clsAtt : null,
            totCls : null
          })
          this.props.editted(edittedSub);
      }

    render() {
        if (this.props.sub !== null)
        {
            return (
            <div>
                 <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h4 class="modal-title">Want to edit !!!!</h4>
                          </div>
                          <div class="modal-body">
                          <label htmlFor="">Subject:</label>
                                <br/>
                                <input
                                type="text"
                                className=""
                                value={this.state.subject}
                                placeholder="subject..."
                                onChange={this.subjectC}
                                /> <br/>
                                <label htmlFor="">Minimum percentage:</label>
                                <br/>
                                <input type="number"
                                className=""
                                value={this.state.minPer}
                                placeholder="min%..."
                                onChange={this.minPerC} /> <br/>
                                <label htmlFor="">Classes Attended:</label>
                                <br/>
                                <input type="number"
                                className=""
                                placeholder="Classes Attended..."
                                value={this.state.clsAtt}
                                onChange={this.clsAttC} /> <br/>
                                <label htmlFor="">Total Classes:</label>
                                <br/>
                                <input type="number"
                                className=""
                                value={this.state.totCls}
                                placeholder="Total Classes..."
                                onChange={this.totClsC} />
                          </div>
                          <div class="modal-footer">
                          <button onClick={()=>this.change()}
                           class="btn btn-success" >Edit</button>
                          </div>
                      </div>
                  </div>
            </div>
        )} else 
        {
            return <div>

            </div>
        }
    }
}
