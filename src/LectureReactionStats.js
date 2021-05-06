import React,{Component} from 'react';
import firebase from './Firebase';
import ReactionsList from './ReactionsList';

class LectureReactionStats extends Component{
    constructor(props) {
      super(props);
      this.state = {lectures: []};
    }
  
    componentDidMount(){
      var estimationsRef = firebase.database().ref("lectures/" + this.props.lectureId + "/estimations");
      estimationsRef.once('value', (snapshot) => {
        let lectures = [];
        snapshot.forEach(function(childSnapshot) {
          lectures.push({key: childSnapshot.key, val: childSnapshot.val()})
        });
        this.setState({lectures: lectures});
      });
      estimationsRef.on('child_changed', (data) => {
        let newLectures = this.state.lectures.reduce(
          (list, curr) => list.concat(curr.key == data.key ? {key: curr.key, val: data.val()} : curr), []
        );
        this.setState({lectures: newLectures});
      });
    }
  
    render(){
      const summ = this.state.lectures.reduce(function(sum, current) { return sum + parseInt(current.val); }, 0);
      const listItems = this.state.lectures.map((lec) => 
        <li className="results__item">
            <img className="results__icon" src={ReactionsList[lec.key]} />
            <span className="results__span" style={{width: Math.round(lec.val / summ * 100) + '%'}}>{lec.val}</span>
        </li>
      );
      return (
        <div className="results">
          <h2>Результаты</h2>
          <ul className="results__items">{listItems}</ul>
        </div>
      );
    }
}

export default LectureReactionStats;
