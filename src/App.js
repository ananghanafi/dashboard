import React from "react";
// import React, { Component } from "react";
// import logo from './logo.svg';
import face from "./Invisiblebackface.png";
import back from "./Invisiblebackcover.png";
import "./App.css";
// import QrReader from 'react-qr-reader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={face} className="gbounce face" alt="face" />
        <img src={back} className="cover" alt="back" />
        <div className="nama">Anang Hanafi</div>
      </header>
    </div>
  );
}

export default App;
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userName: "Anang Hanafi",
//       todoItems: [
//         { action: "Buy Flowers", done: false },
//         { action: "Get Shoes", done: false },
//         { action: "Collect Tickets", done: true },
//         { action: "Call Joe", done: false }
//       ],
//       newItemText: ""
//     };
//   }
//   changeStateData = () => {
//     this.setState({
//       userName: this.state.userName === "Anang Hanafi" ? "Bob" : "Anang Hanafi"
//     });
//   };
//   updateNewTextValue = event => {
//     this.setState({ newItemText: event.target.value });
//   };
//   createNewTodo = () => {
//     if (
//       !this.state.todoItems.find(item => item.action === this.state.newItemText)
//     ) {
//       this.setState({
//         todoItems: [
//           ...this.state.todoItems,
//           { action: this.state.newItemText, done: false }
//         ],
//         newItemText: ""
//       });
//     }
//   };
//   toggleTodo = todo =>
//     this.setState({
//       todoItems: this.state.todoItems.map(item =>
//         item.action === todo.action ? { ...item, done: !item.done } : item
//       )
//     });
//   todoTableRows = () =>
//     this.state.todoItems.map(item => (
//       <tr key={item.action}>
//         <td>{item.action}</td>
//         <td>
//           <input
//             type="checkbox"
//             checked={item.done}
//             onChange={() => this.toggleTodo(item)}
//           />
//         </td>
//       </tr>
//     ));
//   // render() {
//   //   return (
//   //     <div>
//   //       <h4 className="bg-primary text-white text-center p-2">
//   //         {this.state.userName}'s To Do List
//   //       </h4>
//   //       <button className="btn btn-primary m-2" onClick={this.changeStateData}>
//   //         Change
//   //       </button>
//   //     </div>
//   //   );
//   // }
//   render = () => (
//     <div>
//       <h4 className="bg-primary text-white text-center p-2">
//         {this.state.userName}'s To Do List (
//         {this.state.todoItems.filter(t => !t.done).length} items to do)
//       </h4>
//       <div className="container-fluid">
//         <div className="my-1">
//           <input
//             className="form-control"
//             value={this.state.newItemText}
//             onChange={this.updateNewTextValue}
//           />
//           <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
//             Add
//           </button>
//         </div>
//         <table className="table table-striped table-bordered">
//           <thead>
//             <tr>
//               <th>Description</th>
//               <th>Done</th>
//             </tr>
//           </thead>
//           <tbody>{this.todoTableRows()}</tbody>
//         </table>
//       </div>
//       <button className="btn btn-primary m-2" onClick={this.changeStateData}>
//         Change
//       </button>
//     </div>
//   );
// }
