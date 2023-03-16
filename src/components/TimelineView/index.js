// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getCards = each => {
    if (each.categoryId === 'COURSE') {
      return <CourseTimelineCard details={each} key={each.id} />
    }
    return <ProjectTimelineCard details={each} key={each.id} />
  }

  return (
    <div className="bg-container">
      <h1 className="main-heading">
        MY JOURNEY OF <br /> <span className="4.0-para">CCBP 4.0</span>{' '}
      </h1>

      <div style={{width: '900px', height: '950px'}}>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(each => getCards(each))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
