import React from 'react';

const Drawer = props => {
  return (
    <div>
      <div>
        <h2>메뉴</h2>
        <dl>
          <dt></dt>
          <dd></dd>
        </dl>
        <nav>
          <ul>
            <li>내 서비스 관리</li>
            <li>공지사항</li>
            <li>고객센터</li>
            <li>운영정책</li>
            <li>서비스 가이드</li>
          </ul>
        </nav>
        <div>
          <p>내가 참여한 서비스의 소식을 받을 수 있습니다.</p>
          <div>
            <span>채널 추가</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
