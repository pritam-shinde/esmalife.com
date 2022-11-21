import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Box } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import { CustomTextField } from '../components'

import  commerce  from '../../lib/commerce'

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState("")
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("")
    const methods = useForm()

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {contries} = await commerce.services.localeListCountries(checkoutTokenId);
        setShippingCountries(contries)
    }

    const handleFormSubmit = () => {

    }

    return (
        <>
            <Box p={2}>
                <Typography variant='h4' className='mb-3'>Shipping Address</Typography>
                <FormProvider {...methods}>
                    <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={2}>
                            <CustomTextField required name="firstname" label='First Name' />
                            <CustomTextField required name="lastname" label='Last Name' />
                            <CustomTextField required name="address1" label='Address' />
                            <CustomTextField required name="email" label='Email' />
                            <CustomTextField required name="city" label='City' />
                            <CustomTextField required name="zip" label='ZIP / Postal Address' />
                            {/* <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Country</InputLabel>
                                <Select value={ } fullWidth onChange={ }>
                                    <MenuItem key={ } value={ }>
                                        Select Me
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Subdivision</InputLabel>
                                <Select value={ } fullWidth onChange={ }>
                                    <MenuItem key={ } value={ }>
                                        Select Me
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Options</InputLabel>
                                <Select value={ } fullWidth onChange={ }>
                                    <MenuItem key={ } value={ }>
                                        Select Me
                                    </MenuItem>
                                </Select>
                            </Grid> */}
                        </Grid>
                    </form>
                </FormProvider>
            </Box>
        </>
    )
}

export default AddressForm