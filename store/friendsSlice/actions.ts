import {
  acceptInviteQuery,
  getReceivedInvitesQuery,
  getSentInvitesQuery,
  refuseInviteQuery,
  sendInviteQuery,
} from "@services/targetHuntApi/queries/friendRequests";
import {
  getFriendsQuery,
  removeFriendQuery,
} from "@services/targetHuntApi/queries/friends";
import { useGlobalStore } from "@store/store";

export const fetchFriendsAction = async (): Promise<void> => {
  const setState = useGlobalStore.setState;
  const friends = await getFriendsQuery();

  if (friends === null) {
    return;
  }

  setState((state) => ({
    ...state,
    friends,
  }));
};

export const fetchReceivedInvitesAction = async (): Promise<void> => {
  const setState = useGlobalStore.setState;
  const receivedFriendRequests = await getReceivedInvitesQuery();

  if (receivedFriendRequests === null) {
    return;
  }

  setState((state) => ({
    ...state,
    receivedFriendRequests,
  }));
};

export const fetchSentInvitesAction = async (): Promise<void> => {
  const setState = useGlobalStore.setState;
  const sentFriendRequests = await getSentInvitesQuery();

  if (sentFriendRequests === null) {
    return;
  }

  setState((state) => ({
    ...state,
    sentFriendRequests,
  }));
};

export const acceptInviteAction = async (inviteId: string): Promise<void> => {
  await acceptInviteQuery(inviteId);
  // Refetch received and possibly friends list after acceptance
  const receivedFriendRequests = await getReceivedInvitesQuery();
  const friends = await getFriendsQuery();

  useGlobalStore.setState((state) => ({
    ...state,
    receivedFriendRequests:
      receivedFriendRequests ?? state.receivedFriendRequests,
    friends: friends ?? state.friends,
  }));
};

export const refuseInviteAction = async (inviteId: string): Promise<void> => {
  await refuseInviteQuery(inviteId);
  // Refetch received invites list after refusal
  const receivedFriendRequests = await getReceivedInvitesQuery();

  useGlobalStore.setState((state) => ({
    ...state,
    receivedFriendRequests:
      receivedFriendRequests ?? state.receivedFriendRequests,
  }));
};

export const sendInviteAction = async (receiverId: string): Promise<void> => {
  await sendInviteQuery(receiverId);
  // Refetch sent invites list after sending a new invite
  const sentFriendRequests = await getSentInvitesQuery();

  useGlobalStore.setState((state) => ({
    ...state,
    sentFriendRequests: sentFriendRequests ?? state.sentFriendRequests,
  }));
};

export const removeFriendAction = async (deletedId: string): Promise<void> => {
  const result = await removeFriendQuery(deletedId);
  const friends = await getFriendsQuery();
  if (result === null) {
    // Assuming useGlobalStore.setState is used for state management
    useGlobalStore.setState((state) => ({
      ...state,
      friends: friends ?? state.friends,
    }));
  }
};
