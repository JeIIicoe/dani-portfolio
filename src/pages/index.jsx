import React from "react";
import ReactDOM from "react-dom";

import "../styles/style.scss";

const Home = () => {
    return(
        <div>
            <h1>HI THERE</h1>
        </div>
    )
}

export default Home;
ReactDOM.render(<Home />, document.getElementById("root"));