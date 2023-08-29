import {
  createContext, FC, ReactNode, useMemo, useState,
} from 'react';

type TInitialState = {
  renderImageOption: string,
  setRenderImageOption: (option: string) => void
};

type TCommonProvider = {
  children: ReactNode
};

const initialState: TInitialState = {
  renderImageOption: 'default',
  setRenderImageOption: () => {},
};

const CommonContext = createContext(initialState);

const CommonProvider: FC<TCommonProvider> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setRenderImageOption = (option: string) => {
    setState({
      ...state,
      renderImageOption: option,
    });
  };

  const contextValue = useMemo(() => ({ ...state, setRenderImageOption }), [state, setRenderImageOption]);

  return (
    <CommonContext.Provider value={contextValue}>
      {children}
    </CommonContext.Provider>
  );
};

export { CommonContext, CommonProvider };
