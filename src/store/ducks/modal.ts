import { createActions, createReducer } from 'reduxsauce';
import { ModalProps } from '~/components/Modal/interface';

export const { Types, Creators } = createActions({
  setModal: ['data'],
});

const INITIAL_STATE: ModalProps = {
  show: false
};

const setModal = (state = INITIAL_STATE, action: any) => ({
  show: !state.show
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_MODAL as any]: setModal
});
