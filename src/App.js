import './App.css';
import ReactionsList from './ReactionsList';
import firebase from './Firebase';
import LectureReaction from './LectureReaction'
import LectureReactionStats from './LectureReactionStats';

function App() {
  return (
    <main className="main">
      <LectureReaction lectureId="-MZhoqcP8rcQjxaCNbZK" />
      <LectureReactionStats lectureId="-MZhoqcP8rcQjxaCNbZK" />
    </main>
  );
}

export default App;
