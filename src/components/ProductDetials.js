import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import StarIcon from '@mui/icons-material/Star';
import React, { useEffect } from 'react'
import IncrementDecrementBox from './IncrementDecrementBox';
import Button from './ButtonCustom';
import ButtonCustom from './ButtonCustom';
import { Product_detials } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetials() {
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(Product_detials(id))
    }, [])

    const productDetial = useSelector((state) => state.ProductDetials.productData)
    console.log(productDetial)
    return (

        <Box sx={{ width: "calc(100% - 1rem)", margin: "1rem auto 4rem auto" }}>
            {/* --upper bar--- */}
            <Box></Box>

            {/* --img bar--- */}
            <Box>
                <img src={productDetial.image} alt="" style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 0px 10px lightgray" }} />
            </Box>

            {/* --upper bar--- */}
            <Box sx={{ width: "100%" }}>
                <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
                    <Typography variant='h5'>{productDetial.title}</Typography>
                    <Typography variant='subtitle2' sx={{ color: "red", display: "flex", alignItems: "center", fontSize: "0.8rem" }}><StarIcon sx={{ color: "gold", fontSize: "15px" }} /> 4.7</Typography>
                </Stack>

                {/* --catagorsy-- */}
                <Box sx={{ width: "100%", overflow: "auto", margin: "1rem 0" }}>
                    <Stack direction="row" justifyContent="space-around" sx={{ width: "100%" }} gap={1}>
                        <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                        <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                        <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                        <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                        <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                        <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                    </Stack>
                </Box>

                {/* --catagorsy-- */}
                <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
                    <Typography variant='h5'>${productDetial.price}</Typography>
                    <IncrementDecrementBox />
                </Stack>


                <Box sx={{ width: "100%", margin: "1rem 0" }}>
                    <Typography variant='h6'>About</Typography>
                    <Typography variant='Subtitle1'>{productDetial.description}</Typography>
                </Box>



            </Box>

            {/* ---add to cart button-- */}
            <Box sx={{ position: "sticky", bottom: "0px" }}>
                <ButtonCustom btn={{ text: "add to cart", type: "contained" }} />
            </Box>
        </Box>
    )
}

export default ProductDetials