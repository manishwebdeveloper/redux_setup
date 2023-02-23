import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Cart_Data, Services_show } from '../redux/actions/actions'
import AppBarNav from './AppBar'
import BottomBar from './BottomBar'
import CategorySlider from './CategorySlider'
import HeroSlider from './HeroSlider'
import Products from './Products'
import SearchBar from './SearchBar'

function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Services_show())
        // ----
        dispatch(Cart_Data())
    }, [])


    return (
        <>
            <div className="home_container mobile_container">
                {/* <SearchBar /> */}
                <AppBarNav />
                <HeroSlider />
                <CategorySlider />
                <Products />

            </div>
        </>
    )
}

export default Home