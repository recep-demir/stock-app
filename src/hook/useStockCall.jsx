import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail } from '../features/stockSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'

const useStockCall = () => {

    const dispatch =useDispatch()
    const BASE_URL=import.meta.env.VITE_BASE_URL
    const {token}= useSelector((state) => state.auth)

const getFirms = () = {
dispatch(fetchStart())

    try {
        const {data} = await axios(`${BASE_URL}firms`)
        {
            headers :{
                Authorization: `Token ${token}`
            }
        }

    } catch (error) {
        dispatch(fetchFail())
    }
}









  return (getFirms)
}




export default useStockCall