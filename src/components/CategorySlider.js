import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import useCatagoryFIlters from '../customHooks/useCatagoryFIlters'
function CategorySlider() {
    const { homePageCatFilter } = useCatagoryFIlters()
    return (
        <Box sx={{ width: "calc(100% - 1rem)", overflow: "auto", margin: "1rem auto" }}>
            <Stack direction="row" justifyContent="space-around" sx={{ width: "100%" }} gap={1}>
                <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }} onClick={() => { homePageCatFilter("hello") }}>Name</Typography>
                <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
                <Typography variant='subtitle' sx={{ borderRadius: "54px", border: "1px solid lightgray", padding: "5px 20px" }}>Name</Typography>
            </Stack>
        </Box>
    )
}

export default CategorySlider