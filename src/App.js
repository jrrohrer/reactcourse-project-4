import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);

  const tipAmount = bill * (tip / 100);

  function handleReset() {
    setBill("");
    setTip(0);
  }

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <TipInput
        msg="How much would you like to tip?"
        tip={tip}
        onSelect={setTip}
      />

      {bill > 0 && (
        <>
          <Total bill={bill} tip={tipAmount} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <label>Bill Amount:</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </>
  );
}

function TipInput({ msg, tip, onSelect }) {
  return (
    <>
      <label>{msg}</label>
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
      </select>
    </>
  );
}

function Total({ bill, tip }) {
  const total = (bill + tip).toFixed(2);
  const billFinal = bill.toFixed(2);
  const tipFinal = tip.toFixed(2);

  return (
    <p>
      Total: ${total} (${billFinal} + ${tipFinal} tip)
    </p>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
