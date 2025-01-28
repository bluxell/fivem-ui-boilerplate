import React from "react";
import { useState, lazy, Suspense } from "react";
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

/* Components */
interface componentVisibleType {
  [key: string]: boolean;
}

const App: React.FC = () => {
  const [componentVisible, setComponentVisible] =
    useState<componentVisibleType>({
      TestComponent: true,
    });
  const TestComponent = lazy(() => import("./TestComponent"));

  console.log("App rendered");
  console.log("componentVisible", componentVisible);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {componentVisible.TestComponent && <TestComponent />}
      </Suspense>
    </>
  );
};

export default App;
