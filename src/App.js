import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFoundPage/NotFound';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';

// 홈페이지 /
// 영화 전체 보여주는 페이지(서치) /movies?q=adfsa
// 영화 디테일페이지 /movies/:id
// 추천영화 페이지 /movies/:id/recommendation
// 리뷰페이지 /movies/:id/reviews

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path='movies'>
            <Route index element={<MoviePage />} />
            <Route path=':id' element={<MovieDetailPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
