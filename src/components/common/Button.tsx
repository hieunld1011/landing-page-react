import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
  padding?: String;
  margin?: String;
  classBtn?: String;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  padding,
  margin,
  classBtn,
  onClick,
  children,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`btn ${classBtn} ${padding} ${margin}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
