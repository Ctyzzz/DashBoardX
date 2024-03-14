import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    profileLink: 'profile',
    settingsLink: 'account',
    friendsLink: 'friends'
}
const navLinkSlice = createSlice({
    name: 'navLink',
    initialState,
    reducers: {
        setProfileLink: (state, action) => {
            state.profileLink = action.payload;
        },
        setSettingsLink: (state, action) => {
            state.settingsLink = action.payload;
        },
        setFriendsLink: (state, action) => {
            state.friendsLink = action.payload;
        },
    },
})
export const navLinkReducer = navLinkSlice.reducer
export const { setProfileLink, setSettingsLink, setFriendsLink } = navLinkSlice.actions
