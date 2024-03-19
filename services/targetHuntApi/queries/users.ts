import { UserSchema } from "target-hunt-bridge"
import { z } from "zod"
import { query } from "../setup";
import { handleError } from "../setup/helpers";

type User = z.infer<typeof UserSchema>

export const searchUserQuery = async (
  search: string,
): Promise<User[] | null> => {
  try {
    const result = await query.get("users/search", {
      searchParams: {
        "search-string": search
      }
    });
    const json = await result.json<User[]>();
    return json;
  } catch (e) {
    handleError(e);
    return null;
  }
};
