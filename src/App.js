// Styling

import './App.css';

const smallBox = (
  <Box className='box box--small' style={{ backgroundColor: 'lightblue' }}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box className='box box--medium' style={{ backgroundColor: 'pink' }}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box className='box box--large' style={{ backgroundColor: 'orange' }}>
    large orange box
  </Box>
);

function Box({ className = '', style, ...otherProps }) {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  );
}

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
