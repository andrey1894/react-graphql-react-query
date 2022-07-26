import { useState } from "react"

export const useFetching = (cb: Function) => {
  const [isLoading, chageLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      chageLoading(true);
      await cb();
    } catch (error: any) {
      setError(error?.message || error);
    } finally {
      chageLoading(false);
    }
  }

  return [fetching, isLoading, error] as const;
}