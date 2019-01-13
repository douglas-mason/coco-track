import React from 'react';
import { User } from '../../interfaces/user.interface';

export interface IAuthenticationContext {
  currentUser?: User;
  setCurrentUser: (currentUser?: User) => void;
}

const defaultContext: IAuthenticationContext = {
  currentUser: undefined,
  setCurrentUser: (currentUser?: User) => {},
};

export const AuthenticationContext = React.createContext<
  IAuthenticationContext
>(defaultContext);
