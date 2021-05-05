import * as actionTypes from './actions-types'

export const buildAction = (dispatch) => {
   return {
     increase: () => dispatch({type: actionTypes.INCREASE}),
     decrease: () => dispatch({type: actionTypes.DECREASE}),
     reset: () => dispatch({type: actionTypes.RESET}),
     asyncIncrease: () => asyncIncrease(dispatch),
     asyncError: () => asyncErrorFn(dispatch),
     setCounter: (payload) => dispatch({type:actionTypes.SET_COUNTER,payload}),
   }
}


const asyncIncrease = async (dispatch) => {
  dispatch({type:actionTypes.ASYNC_INCREASE_START})

  return await new Promise(r=> {
    setTimeout(() => {
      dispatch({type:actionTypes.ASYNC_INCREASE_END})
      r('Resolved!')
    },2000)
  })
}


const asyncErrorFn = async (dispatch) => {
  dispatch({type:actionTypes.ASYNC_INCREASE_START})

  return await new Promise((resolve,reject)=> {
    setTimeout(() => {
      dispatch({type:actionTypes.ASYNC_INCREASE_ERROR})
      reject(new Error('New Error...'))
    },2000)
  })
}
