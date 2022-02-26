import Input from '../lib/input';

import React, { FormEvent, useState } from 'react';

export default {
  title: 'Input',
  component: Input 
};

export const Primary = () => {
  const [ data, setData] = useState('asfe')

  const handleChange = () => {}

  return <Input value={data} onChange={handleChange} />

};
