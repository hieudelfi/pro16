import React, {Component} from 'react';
import {SimpleButton} from './SimpleButton';

export class Messsage extends Component {
    componentDidMount() {
        console.log('componentDidMount Message Component');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Message Component');
    }
}