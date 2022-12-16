import { useState } from 'react';

function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [
    bind,
    value,
    setValue,
  ];
}

export default useInput;
