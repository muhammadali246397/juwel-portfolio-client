import React from 'react';
import { Fade } from 'react-reveal';


class FadeExample extends React.Component {
  render() {
    return (
      <h1>
        <Fade top cascade>
          React Reveal
        </Fade>
      </h1>
    );
  }
}

export default FadeExample;