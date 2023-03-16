// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = details

  return (
    <div className="projects-container">
      <img className="image" alt="project" src={imageUrl} />
      <div className="title-container">
        <h1 className="projectTitle">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="calender" />
          <p className="days">{duration}</p>
        </div>
      </div>
      <p className="paraa">{description}</p>
      <a className="anchor" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
