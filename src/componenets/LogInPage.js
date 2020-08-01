import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { firebase, googleAuthProvider } from '../firebase/firebase';

// export const LogInPage = ({ startLogin }) => (
//     <div>
//         <button onClick={() => firebase.auth().signInWithPopup(googleAuthProvider)}>Login</button>
//     </div>
// );

// export const LogInPage = ({ startLogin }) => (
//     <div>
//         <button onClick={() => startLogin }>Login</button>
//     </div>
// );

// export class LogInPage extends React.Component {
//     onClick = () => {
//         this.props.startLogin();
//         this.props.history.push('/dashboard');
//     }

//     render() {
//         return (
//             <button onClick={this.onClick}>Login</button>
//         );
//     };
// };

export const LogInPage = ({ startLogin }) => (
    <div>
        <button onClick={ startLogin }>Login</button>
    </div>
);
  
const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => {
            dispatch(startLogin())
        }
    }
};
  
export default connect(undefined, mapDispatchToProps)(LogInPage);