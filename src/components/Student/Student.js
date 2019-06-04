import React, { Component } from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo : {}
    }

  }

  componentDidMount() {
    Axios.get( `http://localhost:3005/students/${this.props.match.params.id}`).then( res => {
      this.setState({
        studentInfo: res.data
      })
      console.log(this.state)
    }).catch(err => console.log(err))
  }

  render() {
    let {first_name, last_name, grade, email} = this.state.studentInfo
    return (
      <div className="box">
        <Link to={`/classlist/${this.state.studentInfo.class}`}><h4>Back</h4></Link>
        <h1>Student</h1>
        <h1>{`${first_name} ${last_name}`}</h1>
        <h3>{`Grade: ${grade}`}</h3>
        <h3>{`Email: ${email}`}</h3>
      </div>
    )
  }
}