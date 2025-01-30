import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { fetchBookById } from "../redux/actions/bookActions";

export function useBookById(bookId: string) {
  //const [book, setBook] = useState<Book | null>(null);
  //const [loading, setLoading] = useState<boolean>(false);
  //const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const { book, loading, error } = useSelector(
    (state: RootState) => state.book
  );

  useEffect(() => {
    if (bookId) {
      dispatch(fetchBookById(bookId));
    }
  }, [bookId, dispatch]);

  return { book, loading, error };
}
