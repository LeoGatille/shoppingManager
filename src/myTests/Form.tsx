import React, { Component, ChangeEvent } from 'react'
// import { render } from '@testing-library/react';

export interface InputSettings {
    type: string
    name: string,
    value?: string,
    checked?: boolean
    required: boolean,
}

export class CustomInput extends Component<InputSettings, InputSettings> {
    constructor(props: InputSettings) {
        super(props);
        this.state = {
            ...props
            // type: props.type,
            // name: props.name,
            // value: props.value,
            // required: props.required,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e);
        this.setState({
            value: e.currentTarget.value
        });
    }

    render() {
        return <input type={this.state.type} name={this.state.name} id={this.state.name} value={this.state.value} onChange={this.handleChange} />
    }
}

//* heritage
export class FilledInput extends Component {
    render() {
        return <CustomInput type="text" name="OUAH" required={true} value="OUAH" />
    }
}
