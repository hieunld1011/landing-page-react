import React from 'react';

interface SpanProps {
  color?: string;
  classSpan?: string;
  children: React.ReactNode;
}

const Span: React.FC<SpanProps> = ({ color = 'blue_color', classSpan, children }) => {
  return <span className={`${classSpan} ${color}`}>{children}</span>;
};

export default Span;
