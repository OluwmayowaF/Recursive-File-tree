import React from "react";
//import ReactDOM from "react-dom";
import FileTree from "./Filetree";

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 
*/

const root = {
  name: "foo",
  type: "dir",
  children: [
    {
      name: "bar",
      type: "dir",
      children: [
        {
          name: "corge",
          type: "file"
        }
      ]
    },
    {
      name: "baz",
      type: "dir",
      children: [
        {
          name: "bar",
          type: "file"
        }
      ]
    },
    {
      name: "quux",
      type: "file"
    },
    {
      name: "grault",
      type: "file"
    },
  ]
}; 

const App = props => {
  return (
     <div id="app">
      <h3> File Tree </h3> 
      <FileTree root={root} />
    </div>
  );
}

export default App;