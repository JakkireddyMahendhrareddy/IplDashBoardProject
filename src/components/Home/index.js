import {Component} from 'react'

import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsBlogData()
  }

  getTeamsBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(formattedData)
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="Home-container">
        <div className="Home-inner-container">
          <div className="logo-matter">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="logo"
              className="ipl-logo"
            />
            <h1 className="dashBoard-heading">IPL DASHBOARD</h1>
          </div>

          {isLoading ? (
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          ) : (
            <ul className="data1">
              {teamsData.map(team => (
                <TeamCard key={team.id} teamDetails={team} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
