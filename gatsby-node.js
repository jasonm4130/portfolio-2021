const path = require('path');

async function turnPostIntoPage({ graphql, actions }) {
  // Get the page template
  const pageTemplate = path.resolve(`./src/templates/Post.js`);

  // Query all posts
  const { errors, data } = await graphql(`
    {
      allMdx(filter: { fields: { collection: { eq: "posts" } } }) {
        nodes {
          frontmatter {
            title
            path
          }
          id
        }
      }
    }
  `);

  //   If there was an error let us know
  if (errors) {
    console.error(errors);
  }

  // Create a page for each post
  const posts = data.allMdx.nodes;

  posts.forEach((node) => {
    const pagePath = node.frontmatter.path;
    actions.createPage({
      path: pagePath,
      component: pageTemplate,
      context: {
        collection: 'posts',
        id: node.id,
        pagePath,
      },
    });
  });
}

async function turnProjectIntoPage({ graphql, actions }) {
  // Get the page template
  const pageTemplate = path.resolve(`./src/templates/Projects.js`);

  // Query all posts
  const { errors, data } = await graphql(`
    {
      allMdx(filter: { fields: { collection: { eq: "projects" } } }) {
        nodes {
          frontmatter {
            title
            technologies
            path
            intro
            logo
          }
          id
        }
      }
    }
  `);

  //   If there was an error let us know
  if (errors) {
    console.error(errors);
  }

  // Create a page for each post
  const projects = data.allMdx.nodes;

  projects.forEach((node) => {
    const pagePath = node.frontmatter.path;
    actions.createPage({
      path: pagePath,
      component: pageTemplate,
      context: {
        collection: 'projects',
        id: node.id,
        pagePath,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  // Create pages dynamically
  // posts
  await turnPostIntoPage({ graphql, actions });
  // projects
  await turnProjectIntoPage({ graphql, actions });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};
