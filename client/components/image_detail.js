import React from 'react';

const ImageDetail = (props) => {
  return (
  <li className="media list-group-item">
    <div className="media-left">
      <img src={props.picture.link} /> //variable set inside image_list
    </div>
    <div className="media-body">
      <h4 className="media-heading">
        {props.picture.title}
      </h4>
    </div>
  </li>
  );
};

export default ImageDetail;
