import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { purchase_book } from './bookActionA'
const BookContainerA = () => {
  
  const noOfBooks=useSelector((state:any)=>state.numberofBooks)
  console.log(noOfBooks)
  const dispatch= useDispatch()
    return ( 
    <>
    <div className='App'>
    <div>BookContainerA</div>
    <h2>no of books-{noOfBooks}</h2>
    <button onClick={()=>(dispatch(purchase_book()))}>buy_book</button>
    </div>
    </>

  )
}

export default BookContainerA