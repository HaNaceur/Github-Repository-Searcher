import { useState } from 'react';

/**
 * Permet d'utiliser un input controllé très rapidement et simplement
 * @param {string}  [initialValue=''] Valeur initial de l'input
 * @returns [{value: string, onChange: function}, string, function]
 * @example
 * const [bind, value, setValue] = useInput('valeurInitial');
 * <Input {...bindSearchInput} />
 */
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
