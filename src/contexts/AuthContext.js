import React, { useState, useEffect, useContext, useCallback } from 'react';

import * as cognito from '../lib/cognito';

export const AuthStatus = {
  Loading: 0,
  SignedIn: 1,
  SignedOut: 2,
};

const defaultState = {
  sessionInfo: {},
  authStatus: AuthStatus.Loading,
};

export const AuthContext = React.createContext(defaultState);

export const AuthIsSignedIn = ({ children }) => {
  const { authStatus } = useContext(AuthContext);

  return <>{authStatus === AuthStatus.SignedIn ? children : null}</>;
};

export const AuthIsNotSignedIn = ({ children }) => {
  const { authStatus } = useContext(AuthContext);

  return <>{authStatus === AuthStatus.SignedOut ? children : null}</>;
};

const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);
  const [sessionInfo, setSessionInfo] = useState({});
  const [attrInfo, setAttrInfo] = useState([]);

  const getSession = useCallback(async () => {
    try {
      const session = await cognito.getSession();
      return session;
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    async function getSessionInfo() {
      try {
        const session = await getSession();
        setSessionInfo({
          idToken: session.idToken.jwtToken,
          refreshToken: session.refreshToken.token,
        });
        window.localStorage.setItem(
          'cityFeedIdToken',
          `${session.idToken.jwtToken}`
        );
        window.localStorage.setItem(
          'cityFeedRefreshToken',
          `${session.refreshToken.token}`
        );
        const attr = await getAttributes();
        setAttrInfo(attr);
        setAuthStatus(AuthStatus.SignedIn);
      } catch (err) {
        setAuthStatus(AuthStatus.SignedOut);
      }
    }
    getSessionInfo();
  }, [authStatus, getSession]);

  async function signInWithUsername(username, password) {
    try {
      await cognito.signInWithUsername(username, password);
      setAuthStatus(AuthStatus.SignedIn);
    } catch (err) {
      setAuthStatus(AuthStatus.SignedOut);
      throw err;
    }
  }

  function signOut() {
    cognito.signOut();
    setAuthStatus(AuthStatus.SignedOut);
  }

  function getUserInfo() {
    try {
      const userInfo = cognito.getCurrentUser();
      return userInfo;
    } catch (err) {
      throw err;
    }
  }

  async function getAttributes() {
    try {
      const attr = await cognito.getAttributes();
      return attr;
    } catch (err) {
      throw err;
    }
  }

  async function setAttribute(attr) {
    try {
      const res = await cognito.setAttribute(attr);
      return res;
    } catch (err) {
      throw err;
    }
  }

  if (authStatus === AuthStatus.Loading) {
    return null;
  }

  const state = {
    authStatus,
    sessionInfo,
    attrInfo,
    signInWithUsername,
    signOut,
    getSession,
    getUserInfo,
    getAttributes,
    setAttribute,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
