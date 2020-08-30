import React, { Component } from 'react';
import Select from 'react-select';
import './PageStandingsF1A.css';
import Table from 'react-bootstrap/Table';
import StandingsF1A_S13_json from './standingsF1A';

const StandingsF1A_S13_data = StandingsF1A_S13_json.standings_f1a.sort(function (a, b) {
    return b.POINTS - a.POINTS
});

const options = [
    { value: 'season13', label: 'Season 13' },
    { value: 'season12', label: 'Season 12' },
    { value: 'season11', label: 'Season 11' },
    { value: 'season10', label: 'Season 10' },
    { value: 'season9', label: 'Season 9' },
    { value: 'season8', label: 'Season 8' },
    { value: 'season7', label: 'Season 7' },
    { value: 'season6', label: 'Season 6' },
    { value: 'season5', label: 'Season 5' },
    { value: 'season4', label: 'Season 4' },
    { value: 'season3', label: 'Season 3' },
    { value: 'season2', label: 'Season 2' },
    { value: 'season1', label: 'Season 1' },
]

class PageStandingsF1A extends Component {
    render() {
        return (
            <div className="page-standings">
                <div className="page-standings-title">
                    STANDINGS
                </div>
                <div className="page-standings-league-title">
                    Formula 1 - A League
                </div>
                <Select className="selection" options={options} defaultValue={options[0]} />
                <Table className="page-standings-table" striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>POS</th>
                            <th>DRIVER</th>
                            <th>CAR</th>
                            <th>POINTS</th>
                            <th>GAP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {StandingsF1A_S13_data.map((value, index) => {
                            return (
                                <tr id="standings-table-f1-row">
                                    <td id="standings-table-f1-pos">{index + 1}</td>
                                    <td id="standings-table-f1-name">{value.DRIVER}</td>
                                    <td id="standings-table-f1-car">{value.CAR}</td>
                                    <td id="standings-table-f1-points">{value.POINTS}</td>
                                    <td id="standings-table-f1-gap">{StandingsF1A_S13_data[0].POINTS - value.POINTS}</td>
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