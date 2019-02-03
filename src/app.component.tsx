import React, { Component } from 'react';
import { LogEntryDashboard } from './log-entry-dashboard/log-entry-dashboard.container';
import './app.styles.css';
import { User } from './_shared/interfaces/user.interface';
import {
  AuthenticationContext,
  IAuthenticationContext,
} from './_shared/contexts/authentication/authentication.context';
import { AsideMenu } from './_shared/components/navigation/aside-menu.component';

interface AppState {
  currentUser?: User;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentUser: {
        id: '1',
        createdAt: new Date(),
        departmentId: '1',
        email: 'test@test.com',
        firstName: 'Russell',
        lastName: 'Thomas',
        managerId: '2',
        password: 'pass',
        updatedAt: new Date(),
      },
    };
  }
  setCurrentUser = (currentUser?: User) => {
    this.setState({
      currentUser,
    });
  };

  render() {
    const { currentUser } = this.state;
    const initialContext: IAuthenticationContext = {
      currentUser,
      setCurrentUser: this.setCurrentUser,
    };
    return (
      <div className="App">
        <AuthenticationContext.Provider value={initialContext}>
          <AsideMenu>
            <LogEntryDashboard />
          </AsideMenu>
        </AuthenticationContext.Provider>
      </div>
    );
  }
}

export default App;
