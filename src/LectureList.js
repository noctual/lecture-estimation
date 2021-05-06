import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './Firebase';

class LectureList extends Component{
    constructor(props) {
      super(props);
      this.state = {lectures: []};
    }
  
    componentDidMount(){
      var estimationsRef = firebase.database().ref("/lectures");
      estimationsRef.once('value', (snapshot) => {
        let lectures = [];
        snapshot.forEach(function(childSnapshot) {
          lectures.push({key: childSnapshot.key, name: childSnapshot.val().name})
        });
        this.setState({lectures: lectures});
      });
    }
  
    render() {
      const listItems = this.state.lectures.map(
        (lec) => <li className="lecture-list__item"><h2><Link to={'/lecture-estimation/lecture/' + lec.key}>{lec.name}</Link></h2></li>
      );
      return (
        <div className="lecture-list">
          <h1 className="lecture-list__title">Лекции</h1>
          <ul className="lecture-list__items">{listItems}</ul>
        </div>
      );
    }
}

export default LectureList;
