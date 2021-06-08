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

const useRequest = (initialData, getData) => {
  const [state, dispatch] = useReducer(reducer, {
    data: initialData,
    isLoading: true,
    isError: null,
  });

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: 'INIT' });

    getData()
      .then((data) => !cancelled && dispatch({ type: 'SUCCESS', data }))
      .catch(() => !cancelled && dispatch({ type: 'FAIL' }));

    return () => (cancelled = true);
  }, [getData, trigger]);

  return {
    ...state,
    updateRequest: () => setTrigger((prev) => !prev),
  };
};

export default useRequest;
