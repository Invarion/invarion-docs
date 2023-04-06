import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Figure({ src, caption }) {
  return (
    <figure style={{ margin: 0, marginBottom: 20 }}>
      <img src={useBaseUrl(src)} alt={caption} />
      <figcaption style={{ fontStyle: 'italic', textAlign: 'center' }}>{`Figure ${caption}`}</figcaption>
    </figure>
  );
}
