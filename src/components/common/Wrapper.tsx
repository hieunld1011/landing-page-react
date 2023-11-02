import React from 'react';
import './common.scss';

interface WrapperProps {
  classWrapper?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ classWrapper, children }) => {
  return <main className={`${classWrapper}`}>{children}</main>;
};

export default Wrapper;
