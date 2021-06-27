import {TOGGLE_MODAL} from '../../constants/Constants';

export function changeToggleStatus(status: boolean) {
  return {
    type: TOGGLE_MODAL,
    payload: status,
  };
}
