import * as React from 'react';

export const Background: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  const [color, setColor] = React.useState<string>('');

  React.useEffect(() => {
    changeBackgroundColor();
  }, [props.name]);

  const changeBackgroundColor = (): void => {
    let color: string;
    switch (props.name) {
      case 'mega-sena':
        color = '#6befa3';
        break;
      case 'quina':
        color = '#8666ef';
        break;
      case 'lotofácil':
        color = '#dd7ac6';
        break;
      case 'lotomania':
        color = '#ffab64';
        break;
      case 'timemania':
        color = '#5aad7d';
        break;
      case 'dia de sorte':
        color = '#bfaf83';
        break;
      default:
        color = '#6befa3';
        break;
    }
    setColor(color);
  };
  return (
    <svg
      viewBox="0 0 613 1080"
      fill="none"
      {...props}
      style={{
        height: '100vh',
        position: 'relative',
        inset: '0 61.69% 0 0',
        zIndex: 1,
      }}
    >
      <path
        width="100%"
        height="100%"
        d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
        fill={color}
      />
    </svg>
  );
};

Background.defaultProps = {
  fill: '#aa1010',
};
