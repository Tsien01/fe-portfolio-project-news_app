import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header.jsx'
import { ArticleList } from './components/ArticleList';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<ArticleList></ArticleList>}></Route>
        {/* <Route path="/articles/:article_id" element={<ArticleDisplay></ArticleDisplay>}></Route>
        <Route path="/search" element={<Search></Search>}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
