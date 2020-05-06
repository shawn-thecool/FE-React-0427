import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseByAmount,
  decreaseByAmount,
  increaseAsync,
  decreaseAsnc
} from '../../redux/modules/counter/action';
import '../../assets/css/counter.css';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [amount, setAmount] = useState(1);
  const [delay, setdelay] = useState(1000);

  return (
    <div className="comp_counter">
      <strong className="tit_counter">Counter</strong>
      <label>Amount</label>
      <input
        tpye="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <label>Delay</label>
      <input
        tpye="number"
        value={delay}
        onChange={(e) => setdelay(Number(e.target.value))}
      />
      <br />
      <button onClick={() => dispatch(decreaseAsnc(amount, delay))}>
        -delayed
      </button>
      <button onClick={() => dispatch(decreaseByAmount(amount))}>-</button>
      <span className="num_count">{count}</span>
      <button onClick={() => dispatch(increaseByAmount(amount))}>+</button>
      <button onClick={() => dispatch(increaseAsync(amount, delay))}>
        +delayed
      </button>
    </div>
  );
};

export default Counter;
