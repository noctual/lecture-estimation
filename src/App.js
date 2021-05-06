import './App.css';
import ReactionsList from './ReactionsList';
import firebase from './Firebase';
import LectureTitle from './LectureTitle';
import LectureReaction from './LectureReaction'
import LectureReactionStats from './LectureReactionStats';

function App() {
  return (
    <main className="main">
      <LectureTitle lectureId="-MZhoqcP8rcQjxaCNbZK" />
      <LectureReaction lectureId="-MZhoqcP8rcQjxaCNbZK" />
      <LectureReactionStats lectureId="-MZhoqcP8rcQjxaCNbZK" />
    </main>
  );
}

export default App;
