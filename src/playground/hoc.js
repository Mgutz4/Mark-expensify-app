// Higher order component

import React from 'react';
import ReactDOM from 'react-dom/client';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login to view info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.createRoot(document.getElementById('app')).render(
  <AuthInfo isAuthenticated={true} info='These are the details' />
);
