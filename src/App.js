import React,{ lazy, Suspense } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ProgressBar from './Components/Progress';

const Dashboard = lazy(() => import('./Pages/Dasboard'));

function App() {
  return (
    <>
<Router>
  <Suspense fallback={<ProgressBar color={"#ff7979"} width={"100%"} value={100} max={100} />
}>
   <Dashboard />
  </Suspense>
</Router>
    </>
  );
}

export default App;
