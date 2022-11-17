import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { PurpleFilledBtn } from '../../components/components'
import { Container, Grid, Box, Typography } from '@mui/material'

const ProductCard = ({image, permalink, name, raw, price}) => {
    return (
        <>
            <Box>
                <Box>
                    <Image src={image} height="400" width="500" />
                </Box>
                <Box mt={2} p={2}>
                    <Typography variant='h3' align='center' gutterBottom><Link href={`/${permalink}/`} legacyBehavior><a className='text-light-grey'>{name}</a></Link></Typography>
                    <Typography variant='h4' align='center'><del className='text-light-grey'>₹ {raw + 200}</del> <span className='text-pestal-purple'>{price}</span></Typography>
                    <Box mt={3}>
                        <PurpleFilledBtn navlink={true} btnlink="/cart/" btntitle="ADD TO CART" fullWidth={true} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProductCard