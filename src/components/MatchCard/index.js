// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachCard} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = eachCard

  return (
    <li className="main">
      <img src={competingTeamLogo} className="image" alt="logo" />
      <p className="about-paragraph">{competingTeam}</p>
      <p className="about-paragraph">{matchStatus}</p>
      <p className="about-paragraph">{result}</p>
    </li>
  )
}

export default MatchCard
