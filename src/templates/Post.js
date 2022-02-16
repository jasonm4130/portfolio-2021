import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout/Layout';

export default function SinglePostPage({ data }) {
  const post = data.mdx;

  return (
    <Layout>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
      body
    }
  }
`;
