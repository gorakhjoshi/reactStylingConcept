// Styling

import './App.css';

function Box({ className = '', style, ...otherProps }) {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  );
}

const smallBox = (
  <Box className='box--small' style={{ backgroundColor: 'lightblue' }}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box className='box--medium' style={{ backgroundColor: 'pink' }}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box className='box--large' style={{ backgroundColor: 'orange' }}>
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
