import { items } from '@/mock/mock';

import { Item } from '@/types/item';

export const useFetch = (params: string) => {
  const data: Item | undefined = items.find((item) => item.link === params);
  const isError: boolean = data === undefined;

  return {
    data,
    isError,
  };
};
