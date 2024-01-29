'use client';
import { itunesApi } from '@/app/services/itunesapi';
import React, { useEffect, useState } from 'react';

export default function Card() {
  const [podcasts, setPodcasts] = useState([]);

  const service = itunesApi();

  useEffect(() => {
    service.getAll().then((res) => setPodcasts(res.data.feed.entry));
  }, []);

  return (
    <>
      <h2>Card</h2>
      {podcasts.map((podcast, index) => (
        <div key={index}>
          <h3>{podcast.title.label}</h3>
          <h2>{index}</h2>
          <h3>{podcast['im:name'].label}</h3>
          <img src={podcast['im:image'][2].label} alt="" />
          <h3>{podcast['im:artist'].label}</h3>
        </div>
      ))}
    </>
  );
}
