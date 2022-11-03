import React from 'react';
import Auth from '../src/components/auth/isAuth.jsx';
import Login from '../src/components/auth/login.jsx';
import AuthContext from './context/auth.js';
import ToDo from './components/todo/todo.jsx'


class App extends React.Component {

  render() {
    return (
      <AuthContext>
        <Login />

        <Auth>
          <div>Any valid user can see this</div>
        </Auth>

        <Auth capability="create">
          <div>Users with create access can see this</div>
        </Auth>

        <Auth capability="update">
          <div>Users with update access can see this</div>
        </Auth>

        <Auth capability="delete">
          <div>Users with delete access can see this</div>
        </Auth>

        <Auth capability="read">
          <ToDo></ToDo>
        </Auth>

      </AuthContext>
    );
  }
}

export default App;


// import React from 'react';

// import ToDo from './components/todo/todo.jsx';

// export default class App extends React.Component {
//   render() {
//     return (
//       <ToDo />
//     );
//   }
// }
