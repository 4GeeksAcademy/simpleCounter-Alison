import React from "react";

const Card = (props) =>{
    return(
        <div class="card text-bg-dark mb-3 m-1">
        <div class="card-body">
            <h5 class="card-title"> {props.digito} </h5>
        </div>
    </div>
    );
}

const SecondsCounter = (props) => {
    return (
        <div className = "d-flex">
            <h1> {props.seconds} </h1>
            <Card digito={Math.floor(props.seconds/100000 %10)}/>
            <Card digito={Math.floor(props.seconds/10000 %10)}/>
            <Card digito={Math.floor(props.seconds/1000 %10)}/>
            <Card digito={Math.floor(props.seconds/100 %10)}/>
            <Card digito={Math.floor(props.seconds/10 %10)}/>
            <Card digito={props.seconds % 10}/>
        </div>
    );

};

export default SecondsCounter;