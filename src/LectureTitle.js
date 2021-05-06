import React,{Component} from 'react';
import firebase from './Firebase';

class LectureTitle extends Component{
    constructor(props) {
      super(props);
      this.state = {title: ""};
    }  
  
    componentDidMount(){
      firebase.database().ref("/lectures/"+this.props.lectureId).once('value', (snapshot) => {
        this.setState({title: snapshot.val().name});
      });
    }
  
    render() {
      return <h1 className="lecture-title">{this.state.title}</h1>;
    }
}

export default LectureTitle;
