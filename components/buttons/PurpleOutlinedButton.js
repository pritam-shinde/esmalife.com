import { ArrowForward } from '@mui/icons-material'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Styles from '../../styles/Button.module.css'

const PurpleOutlinedButton = ({navlink, anchor, btntitle, btnlink}) => {
    return (
        <>
            <Button className={Styles.PurpleOutlinedButton}>
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

export default PurpleOutlinedButton