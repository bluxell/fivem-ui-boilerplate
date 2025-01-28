import React, { useState } from "react";
import { debugData } from "../utils/debugData";
import "../app.css";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <div className="text-red-300">You successfully installed boilerplate.</div>
  );
};

export default App;
