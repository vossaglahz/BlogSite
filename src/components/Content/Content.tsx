import React from 'react';
import "./Content.css";

interface ContentProps {
  title: string;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
  onReadMore: VoidFunction;
}

const Content: React.FC<ContentProps> = ({ title, onEdit, onDelete, onReadMore}) => {

  return (
    <div className="content">
      <h1 className="title">{title}</h1>
      <button className='editMainButton' onClick={onEdit}>Edit</button>
      <button className='deleteMainButton' onClick={onDelete}>Delete</button>
      <button className='readMoreButton' onClick={onReadMore}>Read More</button>
    </div>
  );
};

export default Content;