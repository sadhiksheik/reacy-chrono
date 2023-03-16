// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, tagsList, duration} = details

  const getEachTag = eachTag => (
    <li className="li-el">
      <p>{eachTag.name}</p>
    </li>
  )

  return (
    <div className="course-container">
      <div className="tittle-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="ul-container">
        {tagsList.map(eachTag => getEachTag(eachTag))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
