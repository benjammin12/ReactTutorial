//anything inside client folder is automatically ran

//this searches node modules for a string called react and stores it in a variable React is sucessful
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

//components produces html

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {images: []};
  }

  componentWillMount() {
    //use componentWillMount to load data because it always called only once before your app is about to render
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => this.setState({images: response.data.data}));
  }

  render() {
    return (
      <div>
      <ImageList images = {this.state.images}/>
      </div>
    );
  }
};


//render

Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));

});
