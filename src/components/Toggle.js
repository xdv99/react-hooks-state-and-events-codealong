import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button onClick={() => setIsOn((current) => !current)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
