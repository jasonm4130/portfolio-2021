import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

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
  projectBackgroundImage,
} from './latest-projects.module.scss';

const backgrounds = {};

const LatestProjects = () => {
  const projects = useStaticQuery(graphql`
    query ProjectsQueryAndBackgroundsQuery {
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
      allFile(filter: { relativeDirectory: { eq: "project-backgrounds" } }) {
        edges {
          node {
            dataURI
          }
        }
      }
    }
  `);

  const backgroundArray = projects.allFile.edges.map(
    ({ node }) => node.dataURI
  );

  function getBackground(key) {
    if (backgrounds[key]) {
      return backgrounds[key];
    }

    // Get a random background
    const randomBackground = (
      <img
        className={projectBackgroundImage}
        src={
          backgroundArray[Math.floor(Math.random() * backgroundArray.length)]
        }
        alt="Project Background"
      />
    );

    // Add the background to the object
    backgrounds[key] = randomBackground;

    // Return the background
    return backgrounds[key];
  }

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
