import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error } from './pages';
import { SharedLayout } from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<div>About</div>} />
          <Route path='my-work' element={<div>Work</div>} />
          <Route path='skills' element={<div>Skills</div>} />
          <Route path='hobby' element={<div>Hobby</div>} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
