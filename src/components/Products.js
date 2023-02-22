import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import img3 from '../images/img3.jpg'
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import { useLocation, useNavigate } from 'react-router-dom';

function Products() {
    const navigate = useNavigate()

    // --addTocart--
    const addTocart = (e) => {
        alert(e)
    }
    // ----products from store----

    const products = useSelector((state) => state.serviceShow)
    const productsList = products.servicesData && products.servicesData
    console.log(products)

    return (
        <Box sx={{ width: "calc(100% - 1rem)", margin: "1rem auto 4rem auto" }} className="products">
            <Box sx={{ width: "100%" }}>
                {/* --card-- */}
                <Grid container>
                    {/* -item-- */}
                    {products.loading == true ? <Spinner /> : products.servicesData.map((e) => {
                        return (
                            <Grid item xs={6}>
                                <Box sx={{ width: "calc(100% - 10px)", boxShadow: "0px 0px 10px lightgray", margin: "auto auto 10px auto", borderRadius: "10px", overflow: "hidden" }}>
                                    <img src={e.image} alt="#" style={{ width: "100%", aspectRatio: "16 / 14", objectFit: "contain" }} className="img-fluid" />
                                    <Box sx={{ padding: "10px" }}>
                                        <Typography variant='subtitle2' sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{e.title}</Typography>
                                        <Typography variant='subtitle2' sx={{ color: "red", display: "flex", alignItems: "center", fontSize: "0.8rem" }}><StarIcon sx={{ color: "gold", fontSize: "15px" }} /> 4.7</Typography>
                                        <Stack direction="row" justifyContent="space-between" alignContent="center">
                                            <Typography sx={{ color: "#222" }}>${e.price}</Typography>
                                            <AddCircleIcon sx={{ color: "red" }} onClick={() => { navigate(`/productDetails/${e.id}`) }} />
                                        </Stack>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}

                    {/* -//item-- */}
                </Grid>

                {/* --//card-- */}
            </Box>
        </Box>
    )
}

export default Products