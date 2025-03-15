import { auth } from "@clerk/nextjs/server"

const adminIds = [
  "user_2uJel5QBi264H0o6OIRzNEfB7gl",
];

export const isAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
