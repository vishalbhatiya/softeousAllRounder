import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { purchase_book } from './bookAction'
const BookContainer = () => {
  const noOfBooks=useSelector((state:any) => state.NumberOfBooks)
 const dispatch= useDispatch()
  return (
    <>
    <div className='App'>
    <div>bookContainer</div>
    <h1>no of Books-{noOfBooks}</h1>
    <button onClick={()=>(dispatch(purchase_book()))}>buy hook</button>
    </div>
    </>
  )
}

export default BookContainer