import React, { Fragment } from 'react';
import withGnb from '../common/Gnb';
import { withRouteState } from '../common/StateRouter';
import PullToRefresh from '../common/PullToRefresh';
import StateSwitch, { SuccessState } from '../common/StateSwitch';

const HomePage = props => {
  const { enterProps, dispatch } = props;
  return (
    <PullToRefresh>
      <main style={{ height: '100vh' }}>
        <h2>서비스</h2>
        <strong>배너</strong>
        <StateSwitch
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
                  {/* {newProjects.length > 0 && (<newProjects list={newProjects} />)}
                      {banners.length > 0 && (<Banners list={banners} />)}
                      <OngoingProjects list={ongoing} /> */}
                </Fragment>
              );
            }}
          </SuccessState>
        </StateSwitch>
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
