import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/slices/loadingSlice';

export default function usePreloader() {
  const dispatch = useDispatch();

  const preLoader = (time) => {
    dispatch(setLoading(true));

    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, time);
    return timer;
  };
  return { preLoader };
}
