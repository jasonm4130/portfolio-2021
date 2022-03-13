import React from 'react';
import PropTypes from 'prop-types';

import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  latestProjects,
  latestProjectsContainer,
  latestProjectsTitle,
  latestProjectsLead,
  latestProjectsBanner,
  latestProjectsGrid,
  projectCard,
  projectCardTags,
  projectCardLink,
  projectCardLogoContainer,
  projectCardLogo,
} from './latest-projects.module.scss';

// Import the backgrounds
import Background1 from '../../assets/svgs/project-backgrounds/background-1.svg';
import Background2 from '../../assets/svgs/project-backgrounds/background-2.svg';
import Background3 from '../../assets/svgs/project-backgrounds/background-3.svg';
import Background4 from '../../assets/svgs/project-backgrounds/background-4.svg';
import Background5 from '../../assets/svgs/project-backgrounds/background-5.svg';
import Background6 from '../../assets/svgs/project-backgrounds/background-6.svg';

const backgrounds = {};

const backgroundArray = [
  <Background1 />,
  <Background2 />,
  <Background3 />,
  <Background4 />,
  <Background5 />,
  <Background6 />,
];

const LatestProjects = () => {
  function getBackground(key) {
    if (backgrounds[key]) {
      return backgrounds[key];
    }

    // Get a random background
    const randomBackground =
      backgroundArray[Math.floor(Math.random() * backgroundArray.length)];

    // Add the background to the object
    backgrounds[key] = randomBackground;

    // Return the background
    return backgrounds[key];
  }

  const projects = useStaticQuery(graphql`
    query ProjectsQuery {
      allMdx(filter: { fields: { collection: { eq: "projects" } } }) {
        nodes {
          frontmatter {
            title
            technologies
            path
            intro
            logo {
              dataURI
            }
          }
          id
        }
      }
    }
  `);

  console.log(projects);

  return (
    <section className={latestProjects}>
      <div className={latestProjectsContainer}>
        <div className={latestProjectsBanner}>
          <h2 className={latestProjectsTitle}>Latest Projects</h2>
          <div className={latestProjectsLead}>
            Some of the recent projects I have been working on
          </div>
        </div>
        <div className={latestProjectsGrid}>
          {projects.allMdx.nodes.map((project) => (
            <div className={projectCard} key={project.id}>
              <Link
                to={project.frontmatter.path}
                className={projectCardLogoContainer}
              >
                {getBackground(project.id)}
                {
                  // If there is a logo we should use it
                  project?.frontmatter?.logo && (
                    <img
                      className={projectCardLogo}
                      src={project.frontmatter.logo.dataURI}
                      alt={project.frontmatter.title}
                    />
                  )
                }
                {
                  // If there is no logo, use the title
                  project.frontmatter.logo === null && (
                    <h3 className={projectCardLogo}>
                      {project.frontmatter.title}
                    </h3>
                  )
                }
              </Link>
              <ul className={projectCardTags}>
                {project.frontmatter.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.intro}</p>
              <Link className={projectCardLink} to={project.frontmatter.path}>
                More info
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
