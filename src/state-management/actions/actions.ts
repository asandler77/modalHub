import {TOGGLE_MODAL} from '../../utils/constants';

export function changeToggleStatus(status: boolean) {
  return {
    type: TOGGLE_MODAL,
    payload: status,
  };
}
