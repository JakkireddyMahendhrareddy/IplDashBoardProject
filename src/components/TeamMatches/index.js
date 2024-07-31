// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {Logo: '', latestMatch: '', matchCard: [], isLoading: true}

  componentDidMount() {
    this.getOneTeamBlogData()
  }

  getOneTeamBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {recentMatches, latestMatchDetails, teamBannerUrl} = newData

    const a = teamBannerUrl

    const matchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const recentMatchDetails = recentMatches.map(eachValue => ({
      competingTeam: eachValue.competing_team,
      competingTeamLogo: eachValue.competing_team_logo,
      id: eachValue.id,
      matchStatus: eachValue.match_status,
      result: eachValue.result,
    }))

    this.setState({
      Logo: a,
      latestMatch: matchDetails,
      matchCard: recentMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {Logo, latestMatch, matchCard, isLoading} = this.state
    return (
      <div className="Home-container">
        <div className="Home-inner-container">
          <div className="logo-matter">
            {isLoading ? (
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            ) : (
              <div>
                <img src={Logo} alt="logo" className="ipl-logo" />
                <LatestMatch latestMatch={latestMatch} />
                {matchCard.map(eachCard => (
                  <MatchCard eachCard={eachCard} key={eachCard.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default TeamMatches
