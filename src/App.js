// Styling

import './App.css';

function Box({ className = '', size, style, ...otherProps }) {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${className} ${sizeClassName}`.trim()}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  );
}

const smallBox = (
  <Box size='small' style={{ backgroundColor: 'lightblue' }}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box size='medium' style={{ backgroundColor: 'pink' }}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box size='large' style={{ backgroundColor: 'orange' }}>
    large orange box
  </Box>
);

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>Sizeless Box</Box>
    </div>
  );
}

export default App;
