import './App.css';
import { Route, Routes } from 'react-router';
import * as rota from './Routes.jsx';

function App() {

  return (
    <>
    <div className='h-screen bg-slate-300 flex flex-col justify-center items-center'>
        <Routes>

          <Route
          exact
          path='/'
          element={<rota.Join/>}
          />

          <Route
          exact
          path='/chat/:idChat'
          element={<rota.Chat />}
          />
        </Routes>
    </div>
    </>
  )
}

export default App
