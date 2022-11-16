import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'
import Styles from '../../styles/Button.module.css'
import { ArrowForward } from '@mui/icons-material'

const PurpleFilledBtn = ({ navlink, anchor, btntitle, btnlink, fullWidth }) => {
    return (
        <>
            <Button className={Styles.PurplefilledButton} fullWidth={fullWidth ? true : false} focusRipple>
                {
                    navlink ? <Link href={btnlink} legacyBehavior><a>{btntitle} <ArrowForward /></a></Link> : null
                }
                {
                    anchor ? <a href={btnlink} target="_blank">{btntitle} <ArrowForward /></a> : null
                }
            </Button>
        </>
    )
}

export default PurpleFilledBtn