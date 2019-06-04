import React, { Component } from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }
  componentDidMount() {
    console.log(this.props)
    Axios.get(`http://localHost:3005/students?class=${this.props.match.params.class}`).then( (res) => {
      this.setState({
        students: res.data
      })
      console.log(11111111, this.state)
    }).catch( err => console.log(err))
  }

  render() {
    let student = this.state.students.map( student => {
    return <Link key={student.id} to={`/student/${student.id}`}><h3 >{`${student.first_name} ${student.last_name}`}</h3></Link>
    })
    return (
      <div className="box">
        <Link to='/'><h4>Back</h4></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {student}
      </div>
    )
  }
}