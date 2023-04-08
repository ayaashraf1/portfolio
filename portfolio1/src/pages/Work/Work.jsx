import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projects from "../../mock/projects.json";
import "./Work.css";

export default function Work() {

  return (
    <div id="work-section" data-testid="work-section">
      <div id="work-section-titles">
        <h1>Work</h1>
        <h2>Dig into my universe</h2>
      </div>
      <Carousel showStatus={false} showIndicators={false} width="100%" >
        {
          projects.map((project)=><div key={project.id}>
            <h2>{project.date}</h2>
            <h1>{project.title}</h1>
            <p>
             {project.description}
            </p>
            <div>
              {
                project.links.map((link) =><a href={link.link} key={link.id}>{link.title}</a>)
              }
            </div>
            <hr />
          </div>)
        }
      </Carousel>
    </div>
  )
}