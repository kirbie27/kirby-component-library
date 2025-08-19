import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const KirbyButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>YE BOY {children}</button>;
};

export default KirbyButton;
