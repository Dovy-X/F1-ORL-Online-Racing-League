import React, { Component } from 'react';
import Select from 'react-select';
import Table from 'react-bootstrap/Table';
import './styles/PageStandingsF1B.css';
import StandingsF1B_json from './standingsF1B';

const options = [
    { value: 'S13', label: 'Season 13' },
    { value: 'S12', label: 'Season 12' },
    { value: 'S11', label: 'Season 11' },
];

class PageStandingsF1B extends Component {
    state = {
        season: StandingsF1B_json.S13.sort(function (a, b) {
            return b.POINTS - a.POINTS
        }),
    }

    handleChange = (selectedSeason) => {
        switch (selectedSeason.value) {
            case "S13":
                this.setState({
                    season: StandingsF1B_json.S13.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S12":
                this.setState({
                    season: StandingsF1B_json.S12.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S11":
                this.setState({
                    season: StandingsF1B_json.S11.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S10":
                this.setState({
                    season: StandingsF1B_json.S10.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S9":
                this.setState({
                    season: StandingsF1B_json.S9.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S8":
                this.setState({
                    season: StandingsF1B_json.S8.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S7":
                this.setState({
                    season: StandingsF1B_json.S7.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S6":
                this.setState({
                    season: StandingsF1B_json.S6.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            case "S5":
                this.setState({
                    season: StandingsF1B_json.S5.sort(function (a, b) {
                        return b.POINTS - a.POINTS
                    })
                });
                console.log(`Option selected:`, selectedSeason.value);
                break;
            default:
                this.setState({
                    season: StandingsF1B_json.S13.sort(function (a, b) {
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
                    Formula 1 - B League
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
                        <tr>
                            <th>POS</th>
                            <th>DRIVER</th>
                            <th>CAR</th>
                            <th>POINTS</th>
                            <th>GAP</th>
                        </tr>
                    </thead>
                    <tbody id="standings-table-f1">
                        {this.state.season.map((value, index) => {
                            return (
                                <tr id="standings-table-f1-row">
                                    <td id="standings-table-f1-pos">{index + 1}</td>
                                    <td id="standings-table-f1-name">{value.DRIVER}</td>
                                    <td id="standings-table-f1-car">{value.CAR}</td>
                                    <td id="standings-table-f1-points">{value.POINTS}</td>
                                    <td id="standings-table-f1-gap">{this.state.season[0].POINTS - value.POINTS}</td>
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

export default PageStandingsF1B;