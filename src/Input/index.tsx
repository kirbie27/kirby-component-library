import React from 'react';

type InputProps = {
  value: string;
  onChange: (val: string) => void;
};

const KirbyInput: React.FC<InputProps> = ({ value, onChange }) => {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
};

export default KirbyInput;
