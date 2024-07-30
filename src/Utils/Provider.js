import { createContext, useReducer, useContext } from 'react'

export const ContextData = createContext();

const initialState = {
  user: null,
  profile: false,
  hamburger: false,
  tasks:[],
}


const reducers = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_TASKS":
        return {
          ...state,
          tasks: action.tasks,
        };
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "SET_HAMBURGER":
      return {
        ...state,
        hamburger: action.hamburger,
      };

    default:
      return state;
  }

};

export const useStateValues = () => useContext(ContextData);

export function NewContextProvider({ children }) {

  return (<ContextData.Provider value={useReducer(reducers, initialState)} >
    {children}
  </ContextData.Provider>
  )
}
