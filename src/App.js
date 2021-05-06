import './App.css';
import ReactionsList from './ReactionsList';
import firebase from './Firebase';
import Lecture from './Lecture';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main className="main">
      <Switch>
        <Route path='/lecture/:lectureId' component={Lecture}/>
      </Switch>
    </main>
  );
}

export default App;
