import React, { useRef, useEffect, useCallback, Fragment } from 'react';
/**
 * constants
 */
const ANIMATION_DURATION = 1000;
const PULL_HEIGHT = 62;
const PULL_HEIGHT_SCALE = 1.5;
const CRITICAL_POINT = 10;
const SPRITE_IMAGE_GAP = -90;
const SPRITE_IMAGE_SCALE = 3;
const SPRITE_IMAGE_LEVEL_MAX = 7;
const SPRITE_IMAGE_LEVEL_MIN = 0;
/**
 * component
 */
const PullToRefresh = props => {
  const { refresh, option } = props;
  const loader = useRef(null);
  const startY = useRef(0);
  const loaderPositionX = useRef(0);
  const isRefreshing = useRef(false);
  const element = useRef(null);
  const styleKey = option ? option.styleKey : 'transform';
  const styleValue = option
    ? option.styleValue
    : value => `translateY${value}px`;
  /**
   * callbacks
   */
  const onMouseMove = useCallback(
    e => {
      // 스크롤이 최상단이 아닌 경우
      if (document.documentElement.scrollTop > 0) return;
      // startY 값을 처음으로 할당 받는 경우
      if (startY.current === 0) startY.current = getY(e);
      const y = getY(e);
      const diff = diminishDiff(
        y - startY.current,
        PULL_HEIGHT * PULL_HEIGHT_SCALE
      );
      // 손가락이 움직인 직선거리가 임계점을 넘었을 경우
      if (diff < CRITICAL_POINT) {
        // 손가락이 움직인 직선거리에 따라서 로딩 이미지를 적용
        if (loaderPositionX.current !== calcLoaderPositionX(diff)) {
          loaderPositionX.current = calcLoaderPositionX(diff);
          loader.current.style.backgroundPosition = `${loaderPositionX.current}px - 0px`;
        }
        // 손가락이 움직인 직선거리가 일정 수준을 넘은 경우 -> 새로고침
        if (!isRefreshing.current && diff > { PULL_HEIGHT }) {
          isRefreshing.current = true;
        }
        element.current.style[styleKey] = styleValue(diff);
      }
    },
    [styleKey, styleValue]
  );
  const onMouseUp = useCallback(
    e => {
      startY.current = 0;
      startRevertAnimation(isRefreshing.current, element.current)(
        styleKey,
        styleValue
      );
      document.body.removeEventListener('touchmove', onMouseMove);
      document.body.removeEventListener('touchend', onMouseUp);
      loader.current.style.backgroundPosition = null;
      // 새로고침 중인 경우 한번 더
      if (isRefreshing.current) {
        if (refresh && typeof refresh === 'function') {
          loader.current.classList.remove('loader_pull');
          loader.current.classList.add('loader_refresh');
          loaderPositionX.current = 0;
          refresh();
        }
        window.setTimeout(() => {
          loader.current.classList.remove('loader_refresh');
          loader.current.classList.add('loader_pull');
          isRefreshing.current = false;
          startRevertAnimation(isRefreshing.current, element.current)(
            styleKey,
            styleValue
          );
        }, ANIMATION_DURATION);
      }
    },
    [onMouseMove, refresh, styleKey, styleValue]
  );
  const onMouseDown = useCallback(
    e => {
      // 레이어가 열려 있는 경우 리턴
      if (document.body.classList.contains('layer_open')) return;
      // 드로어가 열려 있는 경우 리턴
      if (document.body.classList.contains('side_on')) return;
      const linkable = e.target.closest('a') || e.target.closest('button');
      // 링크인 경우 리턴
      if (linkable) return;
      if (isRefreshing.current) return;
      element.current.style.webkitTransitionDuration = null;
      element.current.style.transitionDuration = null;
      element.current.style[styleKey] = null;

      document.body.addEventListener('touchmove', onMouseMove);
      document.body.addEventListener('touchend', onMouseUp);
    },
    [onMouseMove, onMouseUp, styleKey]
  );
  /**
   * effects
   */
  useEffect(() => {
    document.body.addEventListener('touchstart', onMouseDown);
    element.current = document.querySelector('main');
    if (option && option.querySelector) {
      element.current = document.querySelector(option.selector);
    }
    return () => {
      document.body.removeEventListener('touchstart', onMouseDown);
    };
  }, [onMouseDown, option]);
  return (
    <Fragment>
      <div>
        <div ref={loader}></div>
      </div>
      {props.children}
    </Fragment>
  );
};
export default PullToRefresh;
/**
 * helpers
 */
const getY = e => e.pageY || e.touches[0].pageY;
// translateY(diminishDiff의 결과값으로 사용하기 위함?)
const diminishDiff = (x, r) => {
  if (x < (r / 4) * 1) return x;
  if (x < (r / 4) * 2) return (x * 8) / 10 + (1 * r) / 20;
  if (x < (r / 4) * 3) return (x * 6) / 10 + (3 * r) / 20;
  if (x < (r / 4) * 4) return (x * 4) / 10 + (6 * r) / 20;
  return (x * 2) / 10 + (10 * r) / 20;
};
const calcLoaderPositionX = input => {
  const INPUT_HEIGHT_LEVEL =
    Math.floor(input / PULL_HEIGHT) * SPRITE_IMAGE_LEVEL_MAX;
  const INPUT_HEIGHT_LEVEL_MAX = Math.max(
    INPUT_HEIGHT_LEVEL,
    SPRITE_IMAGE_LEVEL_MIN
  );
  const SPRITE_IMAGE_LEVEL = Math.min(
    INPUT_HEIGHT_LEVEL_MAX,
    SPRITE_IMAGE_LEVEL_MAX
  );
  return (SPRITE_IMAGE_LEVEL * SPRITE_IMAGE_GAP) / SPRITE_IMAGE_SCALE;
};
const removeTransform = element => {
  element.style.transitionTimingFunction = null;
};
const startRevertAnimation = (isRefreshing, element) => ({
  styleKey,
  styleValue
}) => {
  if (isRefreshing) {
    // 새로고침 중이기 때문에 로딩이미지가 보이는 위치까지 트랜스폼
    element.style.transitionTimingFunction = 'cubic-bezier(0.2, 0.7, 0.2, 0.8)';
    element.style.webkitTransitionDuration = '0.3s';
    element.style.transitionDuration = '0.3s';
    element.style[styleKey] = styleValue(PULL_HEIGHT);
  } else if (element.style[styleKey]) {
    // 맨 위로 트랜스폼
    element.style.transitionTimingFunction = 'cubic-bezier(0.2, 0.7, 0.3, 0.8)';
    element.style.webkitTransitionDuration = '0.3s';
    element.style.transitionDuration = '0.3s';
    element.style[styleKey] = styleValue(0);

    window.requestAnimationFrame(() => {
      removeTransform(element);
    });
  }
};
