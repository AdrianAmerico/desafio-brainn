import * as React from 'react';

export const Background: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 613 1080"
      fill="none"
      {...props}
      style={{
        width: ' 100%',
        height: ' 100%',
        position: 'absolute',
        background: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        zIndex: -1000,
        backgroundColor: '#666',
      }}
    >
      <path
        width="100%"
        height="100%"
        d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
        fill={props.fill}
      />
    </svg>
  );
};

Background.defaultProps = {
  fill: '#aa1010',
};
