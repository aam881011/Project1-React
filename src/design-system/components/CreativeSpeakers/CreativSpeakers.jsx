import React from 'react';
import { SpeakersWrapper } from './style';

export default function CreativSpeakers({ img, name, Job, alt }) {
  return (
    <SpeakersWrapper>
        <img src={img} alt={alt} width="50%" />
        <h2>{name}</h2>
        <span>{Job}</span>
    </SpeakersWrapper>
  )
}
