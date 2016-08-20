//create a component folder and create a js file for each component of project

import React from 'react';
import ImageDetail from './image_detail';

//array of objects
const IMAGES = [
  {title: 'pen', link: 'https://dummyimage.com/600x400'},
  {title: 'pencil' , link: 'https://dummyimage.com/600x400'},
  {title: 'money', link: 'https://dummyimage.com/600x400'}
];

const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail image={image}/>
  });

  return (
    <ul className="media-list list-group">
        {RenderedImages}
    </ul>
  );
};

export default ImageList;

//Create other 2 components.
