import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';

import { USER_POOL_ID, USER_POOL_CLIENT_ID } from '../keys';

const poolData = {
  UserPoolId: `${USER_POOL_ID}`,
  ClientId: `${USER_POOL_CLIENT_ID}`,
};

const userPool = new CognitoUserPool(poolData);

let currentUser = userPool.getCurrentUser();

export function getCurrentUser() {
  return currentUser;
}

function getCognitoUser(username) {
  const userData = {
    Username: username,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);

  return cognitoUser;
}

export async function getSession() {
  if (!currentUser) {
    currentUser = userPool.getCurrentUser();
  }

  return new Promise(function (resolve, reject) {
    currentUser.getSession(function (err, session) {
      if (err) {
        reject(err);
      } else {
        resolve(session);
      }
    });
  }).catch((err) => {
    throw err;
  });
}

export async function signInWithUsername(username, password) {
  return new Promise(function (resolve, reject) {
    const authenticationData = {
      Username: username,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    currentUser = getCognitoUser(username);

    currentUser.authenticateUser(authenticationDetails, {
      onSuccess: function (res) {
        resolve(res);
      },
      onFailure: function (err) {
        reject(err);
      },
    });
  }).catch((err) => {
    throw err;
  });
}

export function signOut() {
  if (currentUser) {
    currentUser.signOut();
  }
}

export async function getAttributes() {
  return new Promise(function (resolve, reject) {
    currentUser.getUserAttributes(function (err, attributes) {
      if (err) {
        reject(err);
      } else {
        resolve(attributes);
      }
    });
  }).catch((err) => {
    throw err;
  });
}

export async function setAttribute(attribute) {
  return new Promise(function (resolve, reject) {
    const attributeList = [];
    const res = new CognitoUserAttribute(attribute);
    attributeList.push(res);

    currentUser.updateAttributes(attributeList, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  }).catch((err) => {
    throw err;
  });
}
