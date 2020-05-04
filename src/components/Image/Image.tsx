import React, { FC, useMemo } from 'react';
import GatsbyImage, { FluidObject, FixedObject } from "gatsby-image"
import { Link } from 'gatsby';

import { fetchImages, AllImagesQuery } from './queries';

import styles from './Image.module.css';

interface Props {
  title?: string;
  alt?: string;
  src: string;
  additionalClassName?: string;
};

const Image = ({ alt, title, src, additionalClassName }: Props) => {
  const data: AllImagesQuery = fetchImages();
  const imageMatch = useMemo(
    () => data.allImageSharp.edges.find(
      ({ node: { fixed } }) => fixed?.originalName === src
    ),
    [data, src],
  );
  const fluidImage: FluidObject | undefined = imageMatch?.node?.fluid;
  if (fluidImage) {
    return (
      <section className={`${styles.main} ${additionalClassName}`}>
        <a title={title} href={fluidImage.src}>
          <GatsbyImage fluid={fluidImage} />
        </a>
        {(title || alt) &&
          <span className={styles.imageTitle}>{title || alt}</span>}
      </section>
    );
  }
  return null;
};

export default Image as FC<Props>;
