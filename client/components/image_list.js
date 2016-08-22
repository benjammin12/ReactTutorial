//create a component folder and create a js file for each component of project

import React from 'react';
import ImageDetail from './image_detail';

//array of objects

//functional components get access to props object
const ImageList = (props) => {

// can add && image.description != null to filter out images without discription
const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image =>
     <ImageDetail key={image.title} image={image}/>
  );

  return (
    <ul className="media-list list-group">
        {RenderedImages}
    </ul>
  );
};

export default ImageList;

//Create other 2 components.
