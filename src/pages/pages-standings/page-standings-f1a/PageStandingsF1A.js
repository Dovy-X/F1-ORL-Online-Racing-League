import React, { Component } from 'react';
import Select from 'react-select';
import Table from 'react-bootstrap/Table';
import './styles/PageStandingsF1A.css';
import StandingsF1A_json from './standingsF1A';

const options = [
    { value: 'S13', label: 'Season 13' },
    { value: 'S12', label: 'Season 12' },
    { value: 'S11', label: 'Season 11' },
    { value: 'S10', label: 'Season 10' },
    { value: 'S9', label: 'Season 9' },
    { value: 'S8', label: 'Season 8' },
    { value: 'S7', label: 'Season 7' },
    { value: 'S6', label: 'Season 6' },
    { value: 'S5', label: 'Season 5' },
];

class PageStandingsF1A extends Component {
    state = {
        season: StandingsF1A_json.S13.sort(function (a, b) {
            return b.POINTS - a.POINTS
        }),
    }

    handleChange = (selectedSeason) => {
        switch (selectedSeason.value) {
            case "S13":
                this.setState({
                    season: StandingsF1A_json.S13.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S12":
                this.setState({
                    season: StandingsF1A_json.S12.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S11":
                this.setState({
                    season: StandingsF1A_json.S11.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S10":
                this.setState({
                    season: StandingsF1A_json.S10.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S9":
                this.setState({
                    season: StandingsF1A_json.S9.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S8":
                this.setState({
                    season: StandingsF1A_json.S8.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S7":
                this.setState({
                    season: StandingsF1A_json.S7.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S6":
                this.setState({
                    season: StandingsF1A_json.S6.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S5":
                this.setState({
                    season: StandingsF1A_json.S5.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            default:
                this.setState({
                    season: StandingsF1A_json.S13.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
        }
    }

    render() {
        return (
            <div className="page-standings">
                <div className="page-standings-title">
                    STANDINGS
                </div>
                <div className="page-standings-league-title">
                    Formula 1 - A League
                </div>
                <Select
                    options={options}
                    defaultValue={options[0]}
                    className="selection"
                    onChange={this.handleChange}
                    isSearchable={false} />
                <Table
                    striped
                    borderless
                    variant="light"
                    className="page-standings-table">
                    <thead>
                        <tr >
                            <th>POS</th>
                            <th>DRIVER</th>
                            <th className="desktop">CAR</th>
                            <th>POINTS</th>
                            <th>GAP</th>
                        </tr>
                    </thead>
                    <tbody id="standings-table-body">
                        {this.state.season.map((value, index) => {
                            return (
                                <tr id="standings-table-body-row">
                                    <td id="standings-table-pos">{index + 1}</td>
                                    <td id="standings-table-name">{value.DRIVER}</td>
                                    <td className="desktop" id="standings-table-car">{value.CAR}</td>
                                    <td id="standings-table-points">{value.POINTS}</td>
                                    <td id="standings-table-gap">{this.state.season[0].POINTS - value.POINTS}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {window.scrollTo(0, 0)}
            </div>
        );
    }
}

export default PageStandingsF1A;