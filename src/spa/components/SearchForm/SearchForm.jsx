import React from 'react';
import './SearchForm.scss';

export class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false,
            searchValue: ''
        }
        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        // ADD CODE FOR SEARCH REQUEST
        // new Request() https://api.unsplash.com/search/photos?page=3&query=apple&client_id=YOUR_CLIENT_ID
        // Handle response this.props.onSearchSucceed(response)
    }

    onChange(e) {
        const searchValue = e.currentTarget.value;
        this.setState({ searchValue })
    }

    render() {
        const className = this.props.className || '';

        return <form className={className + " search-form"} onSubmit={this.submitForm}>
            <button className="search-form__button">S</button>
            <input 
                type="text" 
                className="search-form__input" 
                onChange={this.onChange}
                value={ this.state.searchValue } 
                placeholder="Search..." />
        </form>
    }
}