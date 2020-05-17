import React, { Fragment, useState, useEffect } from 'react';
import withGnb from '../common/Gnb';
import { withRouteState } from '../common/StateRouter';
import PullToRefresh from '../common/PullToRefresh';
import StateSwitch, { SuccessState } from '../common/StateSwitch';
import { useHistory } from 'react-router-dom';
/**
 * constants
 */
const SCROLL_POSITION = 73;
/**
 * components
 */
const HomePage = props => {
  const { enterProps, dispatch } = props;
  console.log('home page props', props);
  const history = useHistory();
  // 스크롤이 화면 하단에 위치하는지 여부
  const [atBottom, setAtBottom] = useState(false);
  // 무한 스크롤 값
  // const [lastId, setLastId] = useState(enterProps.lastId);
  // 스크롤 이벤트 처리
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  /**
   * events
   */
  let prevScrollTop = document.documentElement.scrollTop;
  const onScroll = e => {
    const { scrollTop, scrollHeight, offsetHeight } = document.documentElement;
    // validations
    const isDown = scrollTop - prevScrollTop > 0;
    const isAtBottom = atBottom;
    const isInRangeScroll =
      scrollHeight - (offsetHeight + scrollTop) <= SCROLL_POSITION;
    const isOutRangeScroll =
      scrollHeight - (offsetHeight + scrollTop) >= SCROLL_POSITION;
    if (isDown && !isAtBottom && isInRangeScroll) {
      setAtBottom(true);
    } else if (!isDown && isAtBottom && isOutRangeScroll) {
      setAtBottom(false);
    }
    prevScrollTop = scrollTop;
    console.log('prevScrollTop', prevScrollTop);
  };

  return (
    <PullToRefresh>
      <main style={{ height: '100vh' }}>
        <h2>서비스</h2>
        <strong>배너</strong>
        {/* <StateSwitch
          on={[homeData, ongoingData]}
          previousOn={[
            enterProps.previousHomeData,
            enterProps.previousOngoingData
          ]}
          keepPreviousData={true}>
          <SuccessState>
            {([data, ongoing]) => {
              const liveProjects = data.live_projects;
              const newProjects = data.new_projects;
              const banners = data.banners;
              return (
                <Fragment>
                  {liveProject.length > 0 && (
                    <LiveProjects list={liveProjects} />
                  )}
                  {newProjects.length > 0 && (<newProjects list={newProjects} />)}
                      {banners.length > 0 && (<Banners list={banners} />)}
                      <OngoingProjects list={ongoing} />
                </Fragment>
              );
            }}
          </SuccessState>
        </StateSwitch> */}
      </main>
      <button>
        <span>프로젝트 만들기</span>
      </button>
    </PullToRefresh>
  );
};

export default withRouteState({
  willEnter: props => {}
})(
  withGnb({
    label: '서비스',
    hasDrawerButton: true,
    isHomePage: true,
    buttons: ['search', 'close']
  })(HomePage)
);
