import React, { useRef } from 'react';
import { has } from 'ramda';

/**
 * compoents
 */
export default function StateSwitch(props) {
  const { children, on, previousOn: prevOn, keepPreviousData } = props;
  let currentState = INITIAL_STATE;
  const previousOn = useRef(prevOn);
  const deps = Array.isArray(on) ? on : [on];
  // 1. 한 개라도 실패하면 FAILURE_STATE
  // 2. 한 개라도 로딩중이면 LOADING_STATE
  // 3. 한 개라도 초기 상태이면 INITIAL_STATE
  // 4. 모두 아닐 경우 SUCCESS_STATE
  if (deps.find(o => o.hasFailed)) {
    currentState = FAILURE_STATE;
    previousOn.current = null;
  } else if (deps.find(o => o.hasLoading)) {
    currentState = LOADING_STATE;
  } else if (deps.find(o => o.isInitial)) {
    currentState = INITIAL_STATE;
  } else {
    currentState = SUCCESS_STATE;
    previousOn.current = Array.isArray(on) ? [...on] : { ...on };
  }
  const compoents = React.Children.toArray(children);
  const c = compoents.find(c => c.type.fName === currentState);
  if (c) return React.cloneElement(c, { on });
  // successs가 아니더라도 keepPreviousData가 true 일 경우, 기존 on을 가지고 <SuccessState> 호출
  if (
    (currentState === INITIAL_STATE || currentState === LoadingState) &&
    keepPreviousData &&
    isValidOn(previousOn.current)
  ) {
    const s = compoents.find(c => c.type.fName === SUCCESS_STATE);
    return React.cloneElement(s, { on: previousOn.current });
  }
  return null;
}
export const InitialState = props => {
  const { children = null } = props;
  return children;
};
export const LoadingState = props => {
  const { children = null } = props;
  return children;
};
export const SuccessState = props => {
  const { children = () => null, on } = props;
  const data = Array.isArray(on) ? on.map(o => o.data) : on.data;
  return children(data);
};
export const FailureState = props => {
  const { children = () => null, on } = props;
  const data = Array.isArray(on) ? on.map(o => o.data) : on.data;
  return children(data);
};
/**
 * constants
 */
// minify 되어도 사용 가능하도록 속성값을 사용
const INITIAL_STATE = (InitialState.fName = 'InitialState');
const LOADING_STATE = (LoadingState.fName = 'LoadingState');
const SUCCESS_STATE = (SuccessState.fName = 'SuccessState');
const FAILURE_STATE = (FailureState.fName = 'FailureState');
/**
 * helpers
 */
const isValidOn = on => {
  if (!on) return false;
  if (Array.isArray(on)) {
    const hasEmpty = on.filter(o => o === undefined || o === null).length > 0;
    if (hasEmpty) return false;
  }
  return true;
};
