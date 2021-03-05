import { useEffect, useState } from 'react';

export default function useStateWithPromise(initialValue, callback) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    callback().then((data) => setState(data));
  }, []);

  return [state];
}
