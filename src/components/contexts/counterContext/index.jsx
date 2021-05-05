/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer, useRef } from "react"
import  P from 'prop-types';
import { reducer } from "./reducer";
import { buildAction } from "./buildActions";

export const initialState = {
    counter: 0,
    loading: false
}

const Context = createContext()

export const CounterContextProvider = ({children}) =>{
  const [state,dispatch] = useReducer(reducer,initialState)
  const actions = useRef(buildAction(dispatch))
  return <Context.Provider value = {[state,actions.current]}> {children}</Context.Provider>

}

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
}

export const useCounterContext = () => {
  const context = useContext(Context)
  if(typeof context ==='undefined'){
    throw new Error('You have to use useCounterContext inside <CounterContextProvider>')
  }
  return [...context]
   // or return return [context[0], context[1]];

}
