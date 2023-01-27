import React, { useState } from 'react';

interface IProps {
  value: string;
  onClick: (value: string) => void;
}

const Button: React.FC<IProps> = ({ value, onClick }) => {
  return <button onClick={() => onClick(value)}>{value}</button>;
};

const Calculator: React.FC = () => {
  const [result, setResult] = useState(0);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);

  const performOperation = (operation: string) => {
    switch (operation) {
      case '+':
        setResult(val1 + val2);
        break;
      case '-':
        setResult(val1 - val2);
        break;
      case '*':
        setResult(val1 * val2);
        break;
      case '/':
        setResult(val1 / val2);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input type="number" value={val1} onChange={e => setVal1(Number(e.target.value))} />
      <input type="number" value={val2} onChange={e => setVal2(Number(e.target.value))} />
      <br />
      <Button value="+" onClick={performOperation} />
      <Button value="-" onClick={performOperation} />
      <Button value="*" onClick={performOperation} />
      <Button value="/" onClick={performOperation} />
      <br />
      <span>Result: {result}</span>
    </div>
  );
};

export default Calculator;