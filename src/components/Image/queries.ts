/**
 * Separate the graphql import from the rest of the 'gatsby' imports
 * Otherwise you'll run into the dreadded:
 * `ReferenceError: gatsby_1 is not defined`
 */
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { FluidObject } from "gatsby-image"

import { ImageSharp, ImageSharpFixed } from '@graphqlTypes';

export const fetchImages = () => useStaticQuery(graphql`
  query AllImages {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
          fixed {
            originalName,
          }
        }
      }
    }
  }
`);

/**
 * Needed to build our own ImageQuery type since the one generated automatically
 * uses `GatsbyImageSharpFluidFragment` rather then `FluidObject` and `gatsby-image`
 * really doesn't like that :(
 */
export interface AllImagesQuery {
  allImageSharp: {
    edges: Array<{
      node: (
        Pick<ImageSharp, 'id'> & {
          fluid?: FluidObject,
          fixed?: Pick<ImageSharpFixed, 'originalName'>
        }
      )
    }>
  };
};
