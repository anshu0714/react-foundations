import React from "react";
import ReactDOM from "react-dom/client";

// Using React without JSX
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using React Element! 📝"
);
const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(heading);
console.log(heading); // React Element (JS Object)

// Using JSX - Single Line
const jsxHeading = <h1>Namaste React using JSX! 🚀</h1>;
const jsxRoot = ReactDOM.createRoot(document.getElementById("jsx-root"));
jsxRoot.render(jsxHeading);
console.log(jsxHeading); // React Element (JS Object)

// Using JSX - Multi Line
const jsxHeadingMultiLine = (
  <div>
    <h1>Namaste React using JSX Multi Line! 🚀</h1>
  </div>
);
const jsxRootMultiLine = ReactDOM.createRoot(
  document.getElementById("jsx-root-multi-line")
);
jsxRootMultiLine.render(jsxHeadingMultiLine);
console.log(jsxHeadingMultiLine); // React Element (JS Object)
