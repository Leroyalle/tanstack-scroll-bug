'use client';
import { useInfinityScrollUsers } from '@/hooks';
import React from 'react';

export const UserList: React.FC = () => {
  const {
    data: users,
    isPending,
    isFetching,
    cursor,
    isFetchingNextPage,
  } = useInfinityScrollUsers();
  if (isPending) {
    return <div>Loading...</div>;
  }

  // FIXME: Removing isFetching while a cursor is present will prevent cache updates after user creation
  if (isFetching) return <div>Fetching...</div>;

  console.log('USER_LIST_COMP', users);
  return (
    <div className="flex flex-col gap-y-3">
      {users?.map((f) => (
        <div key={f.id} className="flex flex-col gap-x-3 bg-green-500 w-fit">
          <p>{f.name}</p>
        </div>
      ))}
      {cursor}
      {isFetchingNextPage && <div>Loading...</div>}
    </div>
  );
};
