//anything inside client folder is automatically ran

//this searches node modules for a string called react and stores it in a variable React is sucessful
import React from 'react';
import ReactDOM from 'react-dom'

//components produces html

const App = () => {
  return (
    <div>Something from a react component</div>
  );
};


//render

Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));
});
