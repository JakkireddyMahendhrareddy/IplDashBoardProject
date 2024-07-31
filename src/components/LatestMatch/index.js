import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch

  return (
    <li className="main">
      <img src={competingTeamLogo} className="image" alt="logo" />
      <p className="about-paragraph">{competingTeam}</p>
      <p className="about-paragraph">{date}</p>
      <p className="about-paragraph">{firstInnings}</p>
      <p className="about-paragraph">{id}</p>
      <p className="about-paragraph">{manOfTheMatch}</p>
      <p className="about-paragraph">{matchStatus}</p>
      <p className="about-paragraph">{result}</p>
      <p className="about-paragraph">{secondInnings}</p>
      <p className="about-paragraph">{umpires}</p>
      <p className="about-paragraph">{venue}</p>
    </li>
  )
}

export default LatestMatch
