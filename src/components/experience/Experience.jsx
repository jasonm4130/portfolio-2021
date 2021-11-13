import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link, useStaticQuery, graphql } from 'gatsby';
import axios from 'contentful-management/node_modules/axios';
import {
  experience,
  experienceContainer,
  experienceLeadSection,
  experienceLead,
  experienceHeading,
  experienceInfo,
  experienceGrid,
  experienceItem,
  experiencePoints,
  experiencePointsSmall,
  experiencePointsChange,
  experienceName,
  experienceElipse,
  experienceWave,
} from './experience.module.scss';
import Elipse from '../../assets/svgs/experience-elipse.svg';
import Wave from '../../assets/svgs/experience-wave.svg';

const Experience = () => {
  // Get the language states that were generated at build time and sort by xps
  const languageStats = useStaticQuery(graphql`
    query {
      allCodeStatsLanguage {
        nodes {
          xps
          name
          new_xps
        }
      }
    }
  `).allCodeStatsLanguage.nodes.sort((a, b) => b.xps - a.xps);

  //   Setup the local state for language stats (using the language stats from the query above)
  const [stats, setStats] = useState(languageStats || []);

  //   Get the language stats from the live api
  useEffect(() => {
    // Get the stats from codestats api
    async function fetchData() {
      const response = await axios.get(
        'https://codestats.net/api/users/jasonm4130'
      );

      return response;
    }

    // Process the response data and set the state
    (async () => {
      // Await the response
      const response = await fetchData();

      // Turn the response languages object into an array
      const languages = Object.keys(response.data.languages).map(
        (language) => ({
          ...response.data.languages[language],
          name: language,
        })
      );

      // Sort the langauges by the xps
      const sortedLanguages = languages.sort((a, b) => b.xps - a.xps);

      setStats(sortedLanguages);
    })();
  }, []);

  return (
    <section className={experience}>
      <div className={experienceContainer}>
        <div className={experienceLeadSection}>
          <div className={experienceLead}>Skill Set</div>
          <h2 className={experienceHeading}>Experience</h2>
          <p className={experienceInfo}>
            Each xp point represents a charachter typed. This has been recorded
            with CodeStats since April 2018.
          </p>
        </div>
        <div className={experienceGrid}>
          {stats.slice(0, 9).map((language) => (
            <div key={language.name} className={experienceItem}>
              <div className={experiencePoints}>
                {language.xps.toLocaleString()}
                <span className={experiencePointsSmall}>xp</span>
              </div>
              <div className={experiencePointsChange}>
                +{language.new_xps.toLocaleString()} today
              </div>
              <div className={experienceName}>{language.name}</div>
            </div>
          ))}
        </div>
        <Elipse className={experienceElipse} />
        <Wave className={experienceWave} />
      </div>
    </section>
  );
};

export default Experience;
