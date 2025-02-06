import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  email: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface UserState {
  userList: User[];
}

const initialState: UserState = {
  userList: [],
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setUserList(state, action: PayloadAction<User[]>) {
      state.userList = action.payload;
    },
  },
});

export const { setUserList } = userListSlice.actions;
export default userListSlice.reducer;
