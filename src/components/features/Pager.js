import React from 'react';

const Pager = (props) => {
  const { contents } = props;
  return (
    <div>
      <ol>
        {contents.map((tiem) => (
          <li></li>
        ))}
      </ol>
    </div>
  );
};

export default Pager;
