const heading = React.createElement(
  "h1",
  {
    id: "heading",
    className: "subho",
    style: {
      backgroundColor: "red",
    },
  },
  "Hello World",
);
const rootIndex = document.getElementById("root");
const root = ReactDOM.createRoot(rootIndex);
root.render(heading);
