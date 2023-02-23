import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';

function Product_detials_up_bar() {
    const navigate = useNavigate()
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Button sx={{ border: "1px solid lightgray", borderRadius: "5px", padding: "5px", minWidth: "auto" }} onClick={() => navigate(-1)}><ArrowBackIcon /></Button>
            <Typography sx={{ fontWeight: "600" }}>Detail</Typography>
            <Button sx={{ border: "1px solid lightgray", borderRadius: "5px", padding: "5px", minWidth: "auto" }}><FavoriteIcon /></Button>
        </Stack>
    )
}

export default Product_detials_up_bar