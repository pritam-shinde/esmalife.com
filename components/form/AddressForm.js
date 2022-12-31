import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Box, TextField } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import { CustomTextField } from '../components'
import commerce from '../../lib/commerce'
import { useSelector, useDispatch } from 'react-redux'
import { generateCheckoutToken, fetchShippingSubdivison, fetchShippingOptions } from '../../redux/action/checkoutActions'
import { retriveCart } from '../../redux/action/cartActions'

const AddressForm = ({ next }) => {
    const dispatch = useDispatch()
    
    const cart = useSelector((state) => state.setCartReducer.cart)
    
    const { checkoutToken, shippingSubdivisions, shippingOptions } = useSelector((state) => state.setCheckoutReducer)
    
    const shippingCountry = 'IN'
    
    const [options, setOptions] = useState({ country: "India", Option: "Domestic Shipping Charges", Shipping_charges: 50 })
    
    const [shippingOption, setShippingOption] = useState(shippingOptions ? shippingOptions[0] ? shippingOptions[0].id ? shippingOptions[0].id : 'ship_8XxzoBY0OwPQAZ' : 'ship_8XxzoBY0OwPQAZ' : 'ship_8XxzoBY0OwPQAZ')
    
    const [shippingSubdivision, setShippingSubdivision] = useState("AN")



    useEffect(() => {
        dispatch(retriveCart())
    }, [])

    useEffect(() => {
        if (cart && cart.id) dispatch(generateCheckoutToken(cart.id))
    }, [cart])

    useEffect(() => {
        if (checkoutToken && checkoutToken.id && shippingCountry) dispatch(fetchShippingSubdivison(checkoutToken.id, shippingCountry))
    }, [checkoutToken])

    useEffect(() => {
        if (checkoutToken && checkoutToken.id && shippingCountry && shippingSubdivision) dispatch(fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision))
    }, [checkoutToken, shippingSubdivision])

    const methods = useForm()

    return (
        <>
            <Box p={2}>
                <Typography variant='h4' className='mb-3'>Shipping Address</Typography>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(data => { next({ ...data, shippingCountry, shippingSubdivision, shippingOption }) })} >
                        <Grid container spacing={2}>
                            <CustomTextField name="firstname" label='First Name' />
                            <CustomTextField name="lastname" label='Last Name' />
                            <CustomTextField name="address1" label='Address' />
                            <CustomTextField name="email" label='Email' />
                            <CustomTextField name="phone" label='Phone No.' />
                            <CustomTextField name="city" label='City' />
                            <CustomTextField name="zip" label='ZIP / Postal Address' />
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Country</InputLabel>
                                <TextField value="INDIA" fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Subdivision</InputLabel>
                                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)} required>
                                    {
                                        shippingSubdivisions ? Object.entries(shippingSubdivisions).map(subdivision => <MenuItem key={subdivision[0]} value={subdivision[0]}>
                                            {subdivision[1]}
                                        </MenuItem>) : null
                                    }
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Options</InputLabel>
                                <TextField value={`${options.country}-${options.Option}-${options.Shipping_charges}`} fullWidth />
                            </Grid>
                        </Grid>
                        <br />
                        <Box className='d-flex justify-content-between'>
                            <Button variant='outlined'><a href="/cart/">BACK TO CART</a></Button>
                            {shippingSubdivisions ? <Button type="submit" variant='contained'>NEXT</Button> : null}
                        </Box>
                    </form>
                </FormProvider>
            </Box>
        </>
    )
}

export default AddressForm