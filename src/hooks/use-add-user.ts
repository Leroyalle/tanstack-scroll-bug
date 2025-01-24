import { addUser } from '@/services';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddUser = ({ userId, name }: { userId: number; name: string }) => {
  const queryClient = useQueryClient();
  const addUserMutation = useMutation({
    mutationFn: () => addUser({ id: userId, name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-list'] });
    },
  });

  return {
    addUser: addUserMutation.mutate,
    isPending: addUserMutation.isPending,
  };
};
