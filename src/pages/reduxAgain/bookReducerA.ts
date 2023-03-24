import { buy_book } from "./bookTypeA"
const initialState={
    numberofBooks:40
}


const BookReducer=(state=initialState,action:any)=>{
    switch(action.type){
       case buy_book:return{
            ...state,  numberofBooks :state.numberofBooks-1
       }
       default:return state

    }

}
 export default BookReducer