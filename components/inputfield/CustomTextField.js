import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useFormContext, Controller} from 'react-hook-form'

const CustomTextField = ({ name, label }) => {
    const { control } = useFormContext()

    return (
        <>
            <Grid item xs={12} sm={6}>
                <Controller render={({ field }) => <TextField label={label} fullWidth  required {...field} />}
                    name={name}
                    control={control}
                    defaultValue=""
                    />
                    
            </Grid>
        </>
    )
}

export default CustomTextField