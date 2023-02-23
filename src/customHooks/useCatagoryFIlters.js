import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Services_filter } from '../redux/actions/actions'

function useCatagoryFIlters() {
    const dispatch = useDispatch()
    // ---home page caterogry slider---
    const products = useSelector((state) => state.serviceShow)
    const homePageCatFilter = (e) => {
        console.log(e)
        // dispatch(Services_filter())
    }
    return { homePageCatFilter }

}

export default useCatagoryFIlters