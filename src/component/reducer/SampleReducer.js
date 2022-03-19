

const initstate={
    
        list:[],
        visible:true
}


export const SampleReducer=(state=initstate,action)=>{
    if(action.type==="list"){
        return{
            ...state,
            list:action.payload
        }
    }
    if(action.type==="visible"){
        return{
            ...state,
            visible:action.payload
        }
    }
    
   
   
    return state
   
}