import * as React from 'react';
import { withAuthenticationContext } from '../../_shared/contexts/authentication/with-authentication-context.component';
import { IAuthenticationContext } from '../../_shared/contexts/authentication/authentication.context';

interface LogListProps {
  // authContext: IAuthenticationContext;
}

class LogListComponent extends React.Component<LogListProps> {
  render() {
    return <div>test</div>;
    // const {
    //   authContext: { currentUser },
    // } = this.props;
    // return <div>{currentUser && currentUser.firstName}</div>;
  }
}

// export const LogList = withAuthenticationContext<LogListProps>(
//   LogListComponent
// );
export const LogList = LogListComponent;
