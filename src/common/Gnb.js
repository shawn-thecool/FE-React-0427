import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Drawer from './Drawer';
import { hidePopup, showPopup, toggleDrawer } from '../appActions';
import { isDrawerOpenSelector } from '../appReducer';

const withGnb = options => Component => props => {
  const {
    labelSelector,
    hasDrawerButton,
    buttons = [],
    isHidden,
    isHomePage
  } = options;
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector(isDrawerOpenSelector);
  const label = options.label
    ? options.label
    : labelSelector
    ? useSelector(labelSelector)
    : query.get('title')
    ? query.get('title')
    : null;

  const moveBack = () => alert('moveBack');
  const onCloseClick = () => alert('onCloseClick');
  const closeWindow = () => alert('closeWindow');

  return (
    <React.Fragment>
      <header className={isHidden ? 'head_basic' : ''}>
        <div className="k_head">
          <div aria-hidden={!isDrawerOpen}>
            {
              /* prettier-ignore */
              isHomePage
                ? (
                    <h1>
                      {label}
                      <span>BETA</span>
                    </h1>
                  )
                : (
                    <React.Fragment>
                      <h1></h1>
                      <h2>{label}</h2>
                    </React.Fragment>
                  )
            }
          </div>
          {
            /* prettier-ignore */
            hasDrawerButton
              ? (
                  <React.Fragment>
                    <button>
                      <span>서비스 메인메뉴 펼치기</span>
                    </button>
                    <Drawer />
                  </React.Fragment>
                )
              : (
                  <a onClick={moveBack} />
                )
          }
          <div>
            {
              /* prettier-ignore */
              buttons.includes('search') &&
              (
                <Link to="/search/project">
                  <span>검색</span>
                </Link>
              )
            }
            {
              /* prettier-ignore */
              buttons.includes('close') &&
              (
                <a onClick={onCloseClick}>
                  <span>서비스 닫기</span>
                </a>
              )
            }
          </div>
        </div>
      </header>
      <hr />
      <Component isDrawerOpen={isDrawerOpen} />
    </React.Fragment>
  );
};

export default withGnb;
