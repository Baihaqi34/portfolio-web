import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import './App.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
