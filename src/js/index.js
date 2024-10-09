//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondsCounter.jsx"

let counter = 0;

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))
app.render(<SecondsCounter seconds={counter} />);

setInterval(()=> {
    counter++;
    app.render(<SecondsCounter seconds={counter} />);
},1000)

