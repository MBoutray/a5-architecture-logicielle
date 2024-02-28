import { useState } from 'react';

export const useCustomHook = () => {
  const [state, setState] = useState(null);
  return [state, setState];
}
