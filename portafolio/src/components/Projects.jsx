import React from 'react';
import '../css/Projects.css'

export default function Projects(props) {
  const { titulo, tec, img } = props;
  return (
    <div className="projects">
      <div>
        <img src={img} alt="foto" className='img-project'/>
        <div className="button-container">
          <button>View more</button>
        </div>
      </div>
      <h1 className='project-title'>{titulo}</h1>
      <p className='project-description'>{tec}</p>
    </div>
  );
}
