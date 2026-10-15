import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    firstName: string;
    lastName: string;
    phone: string;
}

const initialState: UserState = {
    firstName: '',
    lastName: '',
    phone: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserState>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.phone = action.payload.phone;
        },
    },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;