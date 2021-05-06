import './App.css';
import ReactionsList from './ReactionsList';
import firebase from './Firebase';
import Lecture from './Lecture';
import LectureList from './LectureList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main className="main">
      <Switch>
        <Route exact path='/lecture-estimation/' component={LectureList}/>
        <Route path='/lecture-estimation/lecture/:lectureId' component={Lecture}/>
      </Switch>
    </main>
  );
}

export default App;
