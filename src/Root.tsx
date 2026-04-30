import React from 'react';
import {Composition} from 'remotion';
import {OcliveDemo} from './OcliveDemo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="OcliveDemo"
        component={OcliveDemo}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

