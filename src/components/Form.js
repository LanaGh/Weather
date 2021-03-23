import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="city" />
                <button>get the weather</button>
            </form>
        );
    }
} 

export default Form;