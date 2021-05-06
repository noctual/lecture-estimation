import LectureTitle from './LectureTitle';
import LectureReaction from './LectureReaction'
import LectureReactionStats from './LectureReactionStats';

function Lecture(props) {
    return (
      <div className="lecture">
        <LectureTitle lectureId={props.match.params.lectureId} />
        <LectureReaction lectureId={props.match.params.lectureId} />
        <LectureReactionStats lectureId={props.match.params.lectureId} />
      </div>
    );
}

export default Lecture;
