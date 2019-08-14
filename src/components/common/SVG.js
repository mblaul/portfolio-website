import React from 'react';
import PropTypes from 'prop-types';

const getPath = (name, props) => {
  switch (name) {
    case 'menu-icon':
      return (
        // author credit:
        //<div>Icons made by <a href="https://www.flaticon.com/authors/eleonor-wang" title="Eleonor Wang">Eleonor Wang</a> from <a href="https://www.flaticon.com/"                 //title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        <g>
          <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z" />
          <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z" />
          <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z" />
        </g>
      );
    default:
      return <path />;
  }
};

const SVG = (props) => {
  const { fill, name, width, height, classNames, styles, viewBox } = props;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={fill}
      width={width}
      height={height}
      style={styles}
      className={classNames}
      viewBox={viewBox}
    >
      {getPath(name)}
    </svg>
  );
};

SVG.propTypes = {};

SVG.defaultProps = {
  name: ``,
  fill: `white`,
  styles: {},
  classNames: ``,
  viewBox: `0 0 24 24`,
};

export default SVG;
