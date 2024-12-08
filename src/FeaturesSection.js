import React from 'react';

const FeaturesSection = () => {
  const features = [
    { head: 'Graphic Designer', title: 'Creative Visual Design', description: 'Expertise in layouts, color theory, and typography for stunning visual communication.' },
    { head:'Software Developer' , title: 'Full-Stack Expertise', description: 'Proficient in front-end (React,Flask) and back-end (C, C++, Python, Java) development. and skilled in front-end' },
    { head:'Video Editing', title: 'Motion Graphics & Effects', description: ' Enhance videos with animations, transitions, and VFX. [>>>Skilled in Adobe Premiere Pro, After Effects<<<]' },
  ];

  return (
    <div id="features" className="container my-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div className="col-md-4 text-center" key={index}>
            <div id="card" className="card p-3">
              <h3 >{feature.head}</h3>
              <h4 className='text-primary'>{feature.title}</h4>
              <b><p>{feature.description}</p></b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;