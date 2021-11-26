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
          }
          id
          slug
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

  posts.forEach((post) => {
    actions.createPage({
      path: `/posts/${post.slug}`,
      component: pageTemplate,
      context: {
        slug: post.node.fields.slug,
        collection: 'posts',
        id: post.id,
        pathPrefix: `/posts`,
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
          }
          id
          slug
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

  projects.forEach((project) => {
    actions.createPage({
      path: `/projects/${project.slug}`,
      component: pageTemplate,
      context: {
        slug: project.node.fields.slug,
        collection: 'projects',
        id: project.id,
        pathPrefix: `/projects`,
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
