import React from 'react'
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material'

const Review = ({ checkoutToken, shippingData }) => {
    const shppingMethod = checkoutToken.shipping_methods.filter(entries=>entries.id === shippingData.shippingOption
        )

    return (
        <>
             <Box p={2}>
                <Typography variant='h5' gutterBottom>Order Summary</Typography>
                <List disablePadding>
                    {
                        checkoutToken.line_items.map(product => <ListItem key={product.name} style={{ padding: "10px 0" }}>
                            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                            <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
                        </ListItem>)
                    }
                    <ListItem style={{ padding: "10px 0" }}>
                    <ListItemText primary="Shipping Charges"/>
                    <Typography variant='subtitle1' style={{fontWeight: 700}}>{shppingMethod[0].price.formatted_with_symbol}</Typography>
                    </ListItem>
                    <ListItem style={{ padding: "10px 0" }}>
                    <ListItemText primary="Total"/>
                    <Typography variant='subtitle1' style={{fontWeight: 700}}>₹ {checkoutToken.subtotal.raw + shppingMethod[0].price.raw}</Typography>
                    </ListItem>
                </List>
            </Box> 
        </>
    )
}

export default Review