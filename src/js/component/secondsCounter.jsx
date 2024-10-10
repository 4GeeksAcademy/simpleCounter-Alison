import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    return (
        <div className="card m-1 p-2" style={{
            borderRadius: "5px", minWidth: "50px", textAlign: "center",
            fontSize: "2rem", backgroundColor: "pink", color: "black", border: "1px solid #444"
        }}>
            <div className="card-body">
                <h5 className="card-title">{props.digito}</h5>
            </div>
        </div>
    );
}

const SecondsCounter = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#d3d3d3", padding: "20px", margin: "px" }}>
            <Card digito={<FontAwesomeIcon icon={faClock} />} />
            <Card digito={Math.floor(props.seconds / 100000 % 10)} />
            <Card digito={Math.floor(props.seconds / 10000 % 10)} />
            <Card digito={Math.floor(props.seconds / 1000 % 10)} />
            <Card digito={Math.floor(props.seconds / 100 % 10)} />
            <Card digito={Math.floor(props.seconds / 10 % 10)} />
            <Card digito={props.seconds % 10} />
        </div>
    );
};

export default SecondsCounter;
