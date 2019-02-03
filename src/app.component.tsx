import React, { Component } from 'react';
import './app.styles.css';
import { User } from './_shared/interfaces/user.interface';
import {
  AuthenticationContext,
  IAuthenticationContext,
} from './_shared/contexts/authentication/authentication.context';
import { AppRouter } from './_shared/components/navigation/app-router.component';

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
          <AppRouter />
        </AuthenticationContext.Provider>
      </div>
    );
  }
}

export default App;
