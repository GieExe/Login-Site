// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello from MyComponent</h1>
      <p>Welcome, {name}!</p>
    </div>
  );
};

export default MyComponent;