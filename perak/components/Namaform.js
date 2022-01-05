import React, {useState, useContext} from 'react'
import { NamaContext } from '../contexts/NamaContext'

export default function Namaform() {
    const [nama, setNama] = useState('')
    const { addNama} = useContext(NamaContext)
    return (
        <div>
            
        </div>
    )
}
