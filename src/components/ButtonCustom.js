import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonCustom({ btn }) {
    return (

        <Button variant={btn.type} sx={{ width: "100%" }}>{btn.text}</Button>

    );
}