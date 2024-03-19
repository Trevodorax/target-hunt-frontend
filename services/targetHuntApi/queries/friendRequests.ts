import { FriendRequestSchema } from "target-hunt-bridge";
import { z } from "zod";

import { query } from "../setup";
import { handleError } from "../setup/helpers";

type FriendRequest = z.infer<typeof FriendRequestSchema>;

export const sendInviteQuery = async (receiverId: string): Promise<void> => {
  try {
    await query.post(`friend-requests/send`, { json: { receiverId } });
  } catch (e) {
    handleError(e);
  }
};

export const getReceivedInvitesQuery = async (): Promise<
  FriendRequest[] | null
> => {
  try {
    const result = await query.get(`friend-requests/received`);
    const data = result.json<FriendRequest[]>();
    return data;
  } catch (e) {
    handleError(e);
    return null;
  }
};

export const getSentInvitesQuery = async (): Promise<
  FriendRequest[] | null
> => {
  try {
    const result = await query.get(`friend-requests/sent`);
    const data = result.json<FriendRequest[]>();
    return data;
  } catch (e) {
    handleError(e);
    return null;
  }
};

export const acceptInviteQuery = async (inviteId: string): Promise<void> => {
  try {
    await query.post(`friend-requests/accept/${inviteId}`);
  } catch (e) {
    handleError(e);
  }
};

export const refuseInviteQuery = async (inviteId: string): Promise<void> => {
  try {
    await query.delete(`friend-requests/refuse/${inviteId}`);
  } catch (e) {
    handleError(e);
  }
};
