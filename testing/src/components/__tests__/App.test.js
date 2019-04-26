import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  // JSDOM creates a fake div
  // provides document.xxx object
  const div = document.createElement("div");

  // React sends HTML from component to div
  // created by JSDOM
  ReactDOM.render(<App />, div);

  // Looks inside div to see if CommentBox is there

  // Look at div, find App component and remove
  // it, performing cleanup
  ReactDOM.unmountComponentAtNode(div);
});
