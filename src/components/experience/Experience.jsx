import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import axios from 'contentful-management/node_modules/axios';
import { experience } from './experience.module.scss';

const Experience = () => {
  const [stats, setStats] = useState(null);

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
          language,
        })
      );

      // Sort the langauges by the xps
      const sortedLanguages = languages.sort((a, b) => b.xps - a.xps);

      setStats(sortedLanguages);
    })();
  }, []);

  return (
    <section className={experience}>
      <h2>Experience</h2>
      {stats.map((language) => (
        <div key={language.language}>
          {language.language}, {language.xps}
        </div>
      ))}
    </section>
  );
};

export default Experience;
