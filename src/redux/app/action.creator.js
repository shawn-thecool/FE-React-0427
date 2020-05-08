import { LOG_MSG } from './action.type';

export const logMsg = (msg) => ({
  type: LOG_MSG,
  msg
});
