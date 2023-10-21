import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';

interface ContextProps {
  backgroundIndex: number
  setBackgroundIndex: Dispatch<SetStateAction<number>>
  setZenMode: Dispatch<SetStateAction<boolean>>
  zenMode: boolean
}
const BackgroundContext = createContext<ContextProps>({
  backgroundIndex: 0,
  zenMode: false,
  setBackgroundIndex: () => {},
  setZenMode: () => {}
});


export const BackgroundProvider = ({children}: PropsWithChildren) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [zenMode, setZenMode] = useState(false);

  return <BackgroundContext.Provider value={{
    backgroundIndex,
    setBackgroundIndex,
    zenMode,
    setZenMode,
  }}>
    {children}
  </BackgroundContext.Provider>
}

export const useBackgroundContext = () => useContext(BackgroundContext);
