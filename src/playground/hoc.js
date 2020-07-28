// Higher Order Component (HOC) - A Component (HOC) that renders another component

// reuse code
// render hijacking
// prop manipulation
// abstruct state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
        {/* { props.isAuthenticated ? <p>The info is: {props.info}</p> : <p>Please login first.</p> }  */}
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login first.</p> }
        </div>
    );
};

// const AdminInfo = withAdminWarning(Info); 
// ReactDOM.render(<AdminInfo isAdmin={false} info="Today is sunday!" />, document.getElementById('app'));

const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Today is sunday!" />, document.getElementById('app'));
