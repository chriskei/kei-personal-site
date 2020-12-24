import React, { useState } from 'react';

const ColoredDiv = () => {
  const [color, setColor] = useState('blue');

  return (
    <div>
      <div style={{ height: 100 }} />
      <div onMouseOver={() => setColor('red')} style={{ background: color }}>
        <ul>
          <li>hi</li>
          <li id="hey">hi2</li>
        </ul>
      </div>
      <a href="/#">hi3</a>
      <a href="/#hey">hi3</a>
    </div>
  );
};

export { ColoredDiv };
