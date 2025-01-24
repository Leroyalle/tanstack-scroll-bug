export type User = {
  id: number;
  name: string;
};

export const mocks: User[] = [
  {
    id: 1,
    name: 'Nikolay Melonov',
  },
  {
    id: 2,
    name: 'Asechx Q',
  },
  {
    id: 3,
    name: 'Danila Kurlov',
  },
];

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const addUser = async (data: { id: number; name: string }) => {
  await delay();
  console.log('ADD_USER_BEFORE', mocks);
  mocks.push({
    id: Number(data.id),
    name: data.name,
  });
  console.log('ADD_USER_AFTER', mocks);
};

export const getUsers = async ({
  page = 1,
  perPage = 10,
}: {
  page: number;
  perPage: number;
}): Promise<User[]> => {
  await delay();
  const users = mocks.slice((page - 1) * perPage, page * perPage);
  console.log('GET_USERS_FUNC', users);
  return users;
};
