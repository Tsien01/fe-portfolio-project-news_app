import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header.jsx'
import { ArticleList } from './components/ArticleList';
import { ArticleDisplay } from './components/ArticleDisplay';
import { UsersList } from './components/UsersList';
import { UserDetails } from './components/UserDetails';
import { Search } from './components/Search';
import { FilteredArticleList } from './components/FilteredArticleList';
import { Error } from './components/Error';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<ArticleList></ArticleList>}></Route>
        <Route path="/articles/:article_id" element={<ArticleDisplay></ArticleDisplay>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/articles/search/:topic" element={<FilteredArticleList></FilteredArticleList>}></Route>
        <Route path="/users" element={<UsersList></UsersList>}></Route>
        <Route path="/userDetails/:username" element={<UserDetails></UserDetails>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
