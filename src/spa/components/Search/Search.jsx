import React from 'react';
import { Request } from '../../request';

export class Search extends React.Component {
    componentDidMount() {
        const request = new Request();
        
        request.get(
            `https://api.unsplash.com/search/photos?page=1&query=${this.props.match.params.queryString}&client_id=0b42abb24c8adf1966a72f20f38f8d06a0f90301a82df72da8a6a70039c0f598`,
            (responseJSON) => {
                const response = JSON.parse(responseJSON);
                if (response && response.results) {
                   console.log(response);
                } else {
                    console.error('Response is empty', responseJSON);
                }
            },
            (e) => {
                throw new Error(e);
            }
        )
    }
    render() {
        return <h2>Search page!!!!!!!!</h2>
    }
}

export const t = () => {
    
}