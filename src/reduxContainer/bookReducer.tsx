import { buy_book } from "./bookTypes"

  
const initialState={
    NumberOfBooks:20
}

const BookReducer =(state=initialState, action:any)=>{
        switch(action.type){
            case buy_book:return{
                ...state,NumberOfBooks :state.NumberOfBooks -1
            }
            default :return state
        }
}
export default BookReducer;