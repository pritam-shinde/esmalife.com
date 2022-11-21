import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useFormContext, Controller} from 'react-hook-form'

const CustomTextField = ({ name, label, required }) => {
    const { control } = useFormContext()

    return (
        <>
            <Grid item xs={12} sm={6}>
                <Controller render={({ field }) => <TextField label={label} fullWidth  {...field} />}
                    name={name}
                    control={control}
                    required={required}
                    />
                    
            </Grid>
        </>
    )
}

export default CustomTextField