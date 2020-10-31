import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addNote } from './actions';
import './App.scss';
import { Body } from './body/body';
import { Nav } from './nav/nav';
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Body />
      </Router>
    </>
  );
}

//* Router implemented
// function App() {
//   return (
//     <>
//       <Router>
//         <Nav></Nav>
//           <Switch>
//             <Route path="/input">
//             </Route>
//             <Route path="/users">
//               <Users />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//       </Router>
//     </>
//   );
// }
// function Home() {
//   return <h2>Home</h2>;
// }
// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
