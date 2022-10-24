import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';

import authForms from '@/redux/authForms/authFormsSlice';
import updateSettingsModal from '@/redux/modals/updateSettingsmodalSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      authForms,
      updateSettingsModal,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
