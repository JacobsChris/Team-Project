
import React from 'react';
export default class FormInput extends React.Component {
    render() {
        return <input type={this.props.type || 'text'}
            placeholder={this.props.place || this.props.name || ''}
            onChange={this.props.handleChange}
            value={this.props.value || ''}
            name={this.props.name || ''} />;
    }
}