import React from 'react';

import withGnb from '../common/Gnb';
import { withRouteState } from '../common/StateRouter';

const LiveProjectBoard = props => {
  const { enterProps } = props;

  return <main>무한스크롤</main>;
};

export default withRouteState({
  willEnter: props => {}
})(withGnb({ label: '해냈어 서비스', buttons: ['close'] })(LiveProjectBoard));
