import { createContext, Dispatch, SetStateAction, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

interface IAppContext {
  selectedGenreId: number;
  setSelectedGenreId: Dispatch<SetStateAction<number>>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <AppContext.Provider value={{ selectedGenreId, setSelectedGenreId }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </AppContext.Provider>
  )
}