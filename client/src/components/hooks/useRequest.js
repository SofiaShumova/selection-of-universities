import { useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'success':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data,
      };
    case 'fail':
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
    dispatch({ type: 'init' });

    request()
      .then((data) => !cancelled && dispatch({ type: 'success', data }))
      .catch(() => !cancelled && dispatch({ type: 'fail' }));

    return () => (cancelled = true);
  }, [request]);

  return { ...state, updateRequest: (req = promise) => setRequest(() => req) };
};

export default useRequest;
