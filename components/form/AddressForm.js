import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Box } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import { CustomTextField } from '../components'
import commerce from '../../lib/commerce'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShippingCountries } from '../../redux/action/checkoutActions'
import { retriveCart } from '../../redux/action/cartActions'
import { generateCheckoutToken } from '../../redux/action/checkoutActions'

const AddressForm = ({ next }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.setCartReducer.cart)
    const checkoutToken = useSelector((state) => state.setCheckoutReducer.checkoutToken)
    const shippingCountries = useSelector((state) => state.setCheckoutReducer.shippingCountries)

    useEffect(() => {
        dispatch(retriveCart())
    }, [dispatch])

    useEffect(() => {
        const generateToken = () => {
            cart && cart.id ? dispatch(generateCheckoutToken(cart.id)) : dispatch(retriveCart())
        }
        generateToken()
    }, [cart])

    const [shippingCountry, setShippingCountry] = useState('IN')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState("")
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("")
    const methods = useForm()

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - ${sO.price.formatted_with_symbol}` }))

    // const fetchShippingSubdivisions = async (checkoutTokenId, countryCode) => {
    //     try {
    //         const { subdivisions } = await commerce.services.localeListShippingSubdivisions(checkoutTokenId, countryCode);
    //         setShippingSubdivisions(subdivisions)
    //         setShippingSubdivision(Object.keys(subdivisions)[0])
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const fetchShippingOptions = async (checkTokenId, country, region = subdivision) => {
    //     try {
    //         const options = await commerce.checkout.getShippingOptions(checkTokenId, { country, region });
    //         setShippingOptions(options);
    //         setShippingOption(options[0].id)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        if (checkoutToken && checkoutToken.id) { dispatch(fetchShippingCountries(checkoutToken.id)) }
    }, [checkoutToken, dispatch])

    // useEffect(() => {
    //     if (checkoutToken !== null) {
    //         if (shippingCountry !== null || shippingCountry !== "" || shippingCountry !== undefined) {
    //             fetchShippingSubdivisions(checkoutToken.id, shippingCountry)
    //         }
    //     }
    // }, [checkoutToken, shippingCountry])

    // useEffect(() => {
    //     if (checkoutToken !== null) {
    //         if (shippingCountry !== "" && shippingSubdivision !== "") {
    //             fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    //         }
    //     }

    // }, [checkoutToken, shippingCountry, shippingSubdivision])

    return (
        <>
            <Box p={2}>
                <Typography variant='h4' className='mb-3'>Shipping Address</Typography>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(data => { next({ ...data, shippingCountry, shippingSubdivision, shippingOption }) })}>
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
                                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                    {
                                        countries ? countries.map(country => <MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>) : <MenuItem>Loading...</MenuItem>
                                    }
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Subdivision</InputLabel>
                                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                    {
                                        subdivisions.map(subdivision => <MenuItem key={subdivision.id} value={subdivision.id}>
                                            {subdivision.label}
                                        </MenuItem>)
                                    }
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Shipping Options</InputLabel>
                                <Select value={shippingOption} fullWidth onChange={(e) => e.target.value}>
                                    {
                                        options.map(item => <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>)
                                    }
                                </Select>
                            </Grid>
                        </Grid>
                        <br />
                        <Box className='d-flex justify-content-between'>
                            <Button variant='outlined'><a href="/cart/">BACK TO CART</a></Button>
                            <Button type="submit" variant='contained'>NEXT</Button>
                        </Box>
                    </form>
                </FormProvider>
            </Box>
        </>
    )
}

export default AddressForm