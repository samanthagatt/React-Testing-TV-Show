import React from 'react';
import parse from 'html-react-parser';
import { EPISODES_PARENT_DIV, EPISODE_DIV } from "../testIds";

export default function Episodes(props) {
  return (
    <div className="episodes" data-testid={EPISODES_PARENT_DIV}>
      {props.episodes.map(e => (
        <div className="episode" key={e.id} data-testid={EPISODE_DIV}>
          {e.image && (
            <img className="episode-image" src={e.image.medium} alt={e.name} />
          )}
          <div className="episode-info">
            <p className="episode-number">
              Season {e.season}, Episode {e.number}
            </p>
            <h3>{e.name}</h3>
            {e.summary && parse(e.summary)}
            <div className="flex-spacer" />
            <p className="episode-runtime">{e.runtime} minutes</p>
          </div>
        </div>
      ))}
    </div>
  );
}
