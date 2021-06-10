import './App.css';
import Layout from './components/Layout/Layout';
import MainContainer from './containers/MainContainer';


function App() {
  return (
    <div className="App-dark">
      <Layout>
        <MainContainer />
     </Layout>
    </div>
  );
}

export default App;
