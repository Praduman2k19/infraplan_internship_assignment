const SEARCH_DATA='SEARCH_DATA' 

const initialState={
  searchData:''
}
 const CakeReducer=(state=initialState,action)=>{
  switch(action.type)
  {
      case SEARCH_DATA:
        return {
          ...state,
          searchData : action.payload,
        }

      default:return state;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default CakeReducer