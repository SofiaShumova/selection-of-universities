import { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data,
      };
    case 'FAIL':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useRequest = (initialData, promise) => {
  const [state, dispatch] = useReducer(reducer, {
    data: initialData,
    isLoading: true,
    isError: null,
  });

  const [request, setRequest] = useState(() => promise);

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: 'INIT' });

    request()
      .then((data) => !cancelled && dispatch({ type: 'SUCCESS', data }))
      .catch(() => !cancelled && dispatch({ type: 'FAIL' }));

    return () => (cancelled = true);
  }, [request]);

  return { ...state, updateRequest: (req = promise) => setRequest(() => req) };
};

export default useRequest;
