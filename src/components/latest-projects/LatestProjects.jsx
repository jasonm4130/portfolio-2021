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
} from './latest-projects.module.scss';

const LatestProjects = () => {
  const projects = useStaticQuery(graphql`
    query ProjectsQuery {
      allMdx(filter: { fields: { collection: { eq: "projects" } } }) {
        nodes {
          frontmatter {
            title
            technologies
          }
          slug
        }
      }
    }
  `);

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
            <Link to={project.slug} key={project.slug}>
              {project.frontmatter.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
