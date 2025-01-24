'use client';
import { useAddUser } from '@/hooks';
import Link from 'next/link';
import React from 'react';

export const AddUser: React.FC = () => {
  const { addUser, isPending } = useAddUser({
    userId: Math.floor(Math.random() * 100000) + 1,
    name: Math.random().toString(36).substring(2, 6),
  });

  return (
    <div className="flex flex-col gap-y-3">
      <h2>Add user</h2>
      <button
        className="p-2 bg-gray-500 rounded w-fit"
        onClick={() => addUser()}
        disabled={isPending}>
        {isPending ? 'Загрузка...' : 'Add'}
      </button>
      <Link className="p-2 bg-gray-500 rounded w-fit" href={'/users'}>
        User list
      </Link>
    </div>
  );
};
