import React from "react";

// class Weather extends React.Component {
//     render() {
//         return (
//             <>
//             {
//                 this.props.city &&
//                 <div>
//                     <p> locality: {this.props.city} , {this.props.country} </p>
//                     <p> temp: {this.props.temp} </p>
//                     <p> sunset: {this.props.sunset} </p>
//                     <p> pressure: {this.props.pressure} </p>
//                 </div>
//             }
//             <p>{this.props.error}</p>
//             </>
//         );
//     }
// } 

const Weather = props => (
    <div className="infoweath">
    {
        props.city &&
        <div>
            <p> locality: {props.city} , {props.country} </p>
            <p> temp: {props.temp} </p>
            <p> sunset: {props.sunset} </p>
            <p> pressure: {props.pressure} </p>
        </div>
    }
    <p className="error">{props.error}</p>
    </div>
);

export default Weather;