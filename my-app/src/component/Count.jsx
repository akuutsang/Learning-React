import { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div>
      <h1>Tick tock!!! {count}</h1>
    </div>
  );
}
