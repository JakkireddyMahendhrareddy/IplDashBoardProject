// Write your code here
// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="lis">
      <Link to={`/team-matches/${id}`} className="about-container">
        <img src={teamImageUrl} className="image" alt="logo" />
        <p className="about-paragraph">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
