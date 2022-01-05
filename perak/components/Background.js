import React from 'react'
import Image from 'next/image'
import Bg from '../styles/Background.module.css'

const Background = () => {
    return (
        <div>
            <div className = {Bg.group_109}>
                <Image className = {Bg.child_109} src = '/Group 109.png' width = {200} height = {280}/>
            </div>
            <div className = {Bg.group_110}>
                <Image src = '/Group 110.png' width = "100%" height = "100%"/>
            </div>
            <div className = {Bg.group_108}>
                <Image src = '/Group 108.png' width = "100%" height = "100%"/>
            </div>
            <div className = {Bg.group_659} >
                <Image src = '/Group 659.png' width = "100%" height = "100%"/>
            </div>
            <div className = {Bg.group_660}>
                <Image src = '/Group 660.png' width = "100%" height = "100%"/>
            </div>
        
        </div>
    )
}

export default Background
