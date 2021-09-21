import * as React from 'react';

export const Background: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 613 1080"
      fill="none"
      {...props}
      style={{
        height: '100vh',
        position: 'absolute',
        inset: '0 61.69% 0 0',
        zIndex: 1,
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
