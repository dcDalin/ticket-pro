import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  isAuthModalOpen: boolean;
}

const initialState: ModalState = {
  isAuthModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openAuthModal: (state: ModalState) => {
      state.isAuthModalOpen = true;
    },
    closeModals: (state: ModalState) => {
      state.isAuthModalOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openAuthModal, closeModals } = modalSlice.actions;

export default modalSlice.reducer;
