import React,{Component} from 'react';
import firebase from './Firebase';
import ReactionsList from './ReactionsList';

class LectureReaction extends Component{
    constructor(props) {
      super(props);
      let localReaction = localStorage.getItem(this.props.lectureId);
      this.state = {reaction: localReaction, disabled: localReaction !== null};
    }  
  
    handleChange = (e) => {
      this.setState({reaction: e.target.value, disabled: true});
      firebase.database().ref("/lectures/" + this.props.lectureId + "/estimations/" + e.target.value).get().then(
        (snapshot) => snapshot.getRef().set(snapshot.val() + 1)
      );
      localStorage.setItem(this.props.lectureId, e.target.value-0);
    }
   
    render() {
      const listReactions = Object.keys(ReactionsList).map((key) =>  
          <div className="reactions__radio-wrapper">
            <input className="reactions__radio" type="radio" name="reaction" id={"reaction-" + key} value={key} onChange={this.handleChange} disabled={this.state.disabled} checked={key == this.state.reaction ? "checked" : ""} />
            <label className="reactions__label" for={"reaction-" + key}>
              <img src={ReactionsList[key]} />  
            </label>
          </div>
      );
      return (
        <form className="reactions">{listReactions}</form>
      );
    }
}

export default LectureReaction;
