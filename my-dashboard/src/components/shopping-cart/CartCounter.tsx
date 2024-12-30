"use client";
import { useAppDispatch, useAppSelector } from "@/src/store";
import LoaderSpinner from "@components/common/LoaderSpinner";
import {
  decrement,
  increment,
  initialCounterState,
  set,
} from "@store/counter/counterSlice";
import { useEffect } from "react";
interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> =>
  fetch("/api/counter").then((res) => res.json());

export default function CartCounter() {
  const { count, isLoading } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(initialCounterState(count));
    });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <span className="text-7xl">{count}</span>

          <div className="flex gap-4 mt-5">
            <button
              disabled={count === 0}
              onClick={() => dispatch(decrement())}
              className="p-2 rounded-lg hover:bg-blue-700 bg-blue-500 w-16 text-white transition-opacity"
              style={{
                opacity: count === 0 ? 0.5 : 1,
                cursor: count === 0 ? "not-allowed" : "pointer",
              }}
            >
              -1
            </button>
            <button
              onClick={() => dispatch(increment())}
              className="p-2 rounded-lg hover:bg-blue-700 bg-blue-500 w-16 text-white transition-colors"
            >
              +1
            </button>
          </div>
        </>
      )}
    </>
  );
}
