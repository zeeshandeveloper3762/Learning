import { useEffect, useState } from "react";

const App = () => {
  const curTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(curTime);
  const update = () => {
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime);
  };

  useEffect(() => {
    const IntervalId = setInterval(update, 1000);
    return () => clearInterval(IntervalId);
  }, []);
  return (
    <div>
      <h1>{curTime}</h1>
    </div>
  );
};

export default App;
