import { getUsers } from '@/services';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfinityScrollUsers = () => {
  const { ref, inView } = useInView();

  const { data, isPending, isFetching, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['user-list'],
    queryFn: (meta) => getUsers({ page: meta.pageParam, perPage: 10 }),
    initialPageParam: 1,
    select: ({ pages }) => pages.flatMap((page) => page),
    getNextPageParam(lastPage, allPages) {
      return lastPage.length === 0 ? undefined : allPages.length + 1;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const cursor = <div ref={ref} className="h-1 w-full bg-transparent" />;

  return { data, isPending, isFetching, cursor, isFetchingNextPage };
};
