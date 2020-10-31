import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addNote } from './actions';
import './App.scss';
import { Nav } from './nav/nav';
// import { NewNoteInput } from './NewNoteInput';
// import { NotesState } from './noteReducer';
function App() {
  // const notes = useSelector<NotesState, NotesState['notes']>(state => state.notes);
  // const dispatch = useDispatch();
  // const onAddNote = (note: string) => {
  //   dispatch(addNote(note));
  // }
  return (
    <>
      <Nav />
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
