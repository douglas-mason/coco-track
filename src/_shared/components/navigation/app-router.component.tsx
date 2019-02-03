import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LogEntryDashboard } from '../../../log-entry-dashboard/log-entry-dashboard.container';
import { ReportingDashboard } from '../../../reporting-dashboard/reporting-dashboard.component';
import { AsideMenu } from './aside-menu.component';

export class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AsideMenu>
          <Switch>
            <Route exact path="/" component={LogEntryDashboard} />
            <Route exact path="/log-entry" component={LogEntryDashboard} />
            <Route exact path="/analytics" component={ReportingDashboard} />
          </Switch>
        </AsideMenu>
      </BrowserRouter>
    );
  }
}
