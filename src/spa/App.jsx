import React from 'react';
import { Navbar } from './components/Navbar';
import { Request } from './request';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            currentPage: 1
        };
        this.nextImages = this.nextImages.bind(this);
    }

    setImages(images) {
        this.setState({ images });
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages() {
        console.log(this.state.currentPage);
        const request = new Request();
        request.get(
            `https://api.unsplash.com/photos?page=${this.state.currentPage}`,
            (imagesJSON) => {
                this.setImages(JSON.parse(imagesJSON));
            },
            (e) => {
                console.log(e);
            },
            { 'Authorization': 'Client-ID HERE SHOULD BE YOUR CLIENT ID' })
    }

    nextImages() {
        this.setState(
            (state) => {
                const newState = Object.assign(state);
                newState.currentPage++;
                return newState;
            }, () => {
                this.fetchImages();
            });
    }

    renderImages() {
        // const imageElements = [];

        // for(let image of this.state.images) {
        //     imageElements.push(<img src={`${image.urls.small}`} />);
        // }

        // return imageElements;

        return this.state.images.map(image => {
            return <img src={`${image.urls.small}`} />;
        });
    }

    searchHandler(response) {
        console.log('>>>RESPONSE FROM SEACR', JSON.stringify(response));\
        // this.setImages(JSON.parse(imagesJSON));
    }

    render() {
        return <div>
            <Navbar onSearchSucceed={this.searchHandler}/>
            <div>
                {this.renderImages()}
            </div>
            <button onClick={this.nextImages}>Next</button>
        </div>
    }
}