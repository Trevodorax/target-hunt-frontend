import { UserSchema } from "target-hunt-bridge";
import { z } from "zod";

import { query } from "../setup";
import { handleError } from "../setup/helpers";

type User = z.infer<typeof UserSchema>;

export const removeFriendQuery = async (deletedId: string): Promise<null> => {
  try {
    await query.delete(`friends/${deletedId}`);
    return null;
  } catch (e) {
    handleError(e);
    return null;
  }
};

export const getFriendsQuery = async (): Promise<User[] | null> => {
  try {
    const result = await query.get(`friends`);
    const data = result.json<User[]>();
    return data;
  } catch (e) {
    handleError(e);
    return null;
  }
};
