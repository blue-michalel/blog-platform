import { useMemo } from 'react';
import { CreateTime } from 'services/models';

export const useTime = ({ seconds }: CreateTime) => {
  const time = useMemo(() => new Date(seconds * 1000).toLocaleDateString(), [seconds]);

  return time;
};
