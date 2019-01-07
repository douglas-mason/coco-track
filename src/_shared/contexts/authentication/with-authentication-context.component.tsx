import React, { ComponentType } from 'react';
import {
  AuthenticationContext,
  IAuthenticationContext,
} from './authentication.context';

interface IAuthenticationContextWrappedComponent {
  authContext: IAuthenticationContext;
}
export function withAuthenticationContext<P>(
  ComponentToWrap: ComponentType<IAuthenticationContextWrappedComponent>
) {
  return function AuthenticationContextWrappedComponent(props: P) {
    return (
      <AuthenticationContext.Consumer>
        {authContext => (
          <ComponentToWrap {...props} authContext={authContext} />
        )}
      </AuthenticationContext.Consumer>
    );
  };
}
