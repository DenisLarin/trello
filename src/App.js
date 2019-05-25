import React from 'react';
import Layout from "./hoc/Layout";
import TaskBlocks from "./containers/taskBlocks/TaskBlocks";

function App() {
  return (
    <Layout>
      <TaskBlocks/>
    </Layout>
  );
}

export default App;
