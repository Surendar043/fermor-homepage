"use client";
import { useState } from "react";

// Indian digit grouping: 12,34,567
const inr = (n) => {
  const s = String(Math.round(n));
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  return rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3 : last3;
};

export default function Planner() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);

  const n = years * 12;
  const r = rate / 100 / 12;
  const total = r ? monthly * ((Math.pow(1 + r, n) - 1) / r) : monthly * n;
  const put = monthly * n;

  return (
    <div className="calc">
      <div>
        <div className="field">
          <label htmlFor="m">Monthly saving <b>₹{inr(monthly)}</b></label>
          <input id="m" type="range" min="1000" max="50000" step="500" value={monthly} onChange={(e) => setMonthly(+e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="r">Expected yearly return <b>{rate}%</b></label>
          <input id="r" type="range" min="2" max="14" step="0.5" value={rate} onChange={(e) => setRate(+e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="y">Years <b>{years}</b></label>
          <input id="y" type="range" min="1" max="30" step="1" value={years} onChange={(e) => setYears(+e.target.value)} />
        </div>
      </div>
      <div className="out" aria-live="polite">
        <p>In {years} years you could have</p>
        <div className="big">₹{inr(total)}</div>
        <div className="split">
          <div><b>₹{inr(put)}</b>you put in</div>
          <div><b>₹{inr(total - put)}</b>growth</div>
        </div>
        <div className="fine" style={{ color: "var(--bg)", opacity: 0.6 }}>
          Illustration only. Returns aren't guaranteed and real results vary.
        </div>
      </div>
    </div>
  );
}
