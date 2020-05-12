import React from 'react';
import withGnb from '../common/Gnb';
import { withRouteState } from '../common/StateRouter';

const HomePage = props => {
  return <div>home</div>;
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
