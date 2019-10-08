import React, {Component} from 'react';
export default class SimpleButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            hasButtonBeenClicked: false
        }
    }
    render = () =>
        <button onClick={this.handleClick}
            className={this.props.className}
            disabled={this.props.disabled === "true" || this.props.disabled =="true"}>
                {this.props.text} {this.state.counter}
                {this.state.hasButtonBeenClicked &&
                    <div>
                        Button Clicked!
                    </div>
                }
        </button>
    handleClick = () => {
        for (let i = 0; i < 5; i++){
            this.setState({
                counter = this.state.counter + 1       
            })
        }
        this.setState({ hasButtonBeenClicked: true });
        this.props.callback();
    }
}