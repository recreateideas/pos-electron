import { useSelector as useReactReduxSelector } from 'react-redux';
import { isEqual } from 'lodash';

const useSelector = (fn, rerenderOnChange = true) => {
    const equalityFn = rerenderOnChange ? isEqual : () => true;
    return useReactReduxSelector(fn, equalityFn);
};

export { useSelector };
