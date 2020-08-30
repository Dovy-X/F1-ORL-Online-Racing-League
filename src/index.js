import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'tachyons';
import './main.css';
import * as serviceWorker from './serviceWorker';

import PageHome from './pages/page-home/PageHome';

import PageResultsF1A from './pages/pages-results/page-results-f1a/PageResultsF1A';
import PageResultsF1B from './pages/pages-results/page-results-f1b/PageResultsF1B';

import PageStandingsF1A from './pages/pages-standings/page-standings-f1a/PageStandingsF1A';
import PageStandingsF1B from './pages/pages-standings/page-standings-f1b/PageStandingsF1B';

import PageScheduleF1A from './pages/pages-schedule/page-schedule-f1a/PageScheduleF1A';
import PageScheduleF1B from './pages/pages-schedule/page-schedule-f1b/PageScheduleF1B';

import Header from './header/Header';



ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <div className="content" >
        <Route path="/" exact component={PageHome}/>

        <Route path="/results-f1a" exact component={PageResultsF1A}/>
        <Route path="/results-f1b" exact component={PageResultsF1B}/>

        <Route path="/standings-f1a" exact component={PageStandingsF1A}/>
        <Route path="/standings-f1b" exact component={PageStandingsF1B}/>

        <Route path="/schedule-f1a" exact component={PageScheduleF1A}/>
        <Route path="/schedule-f1b" exact component={PageScheduleF1B}/>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
