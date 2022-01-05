import headerStyle from '../styles/Header.module.css'
import Image from 'next/image'

const Header = ({children}) => {
    return (
        <div className = {headerStyle.container}>
            <div className={headerStyle.section}>
                <div className={headerStyle.logosect}> 
                    <div className={headerStyle.logo}>
                        <Image className = {headerStyle.img_logo} src = '/logobgtransparent.png' width = {66} height = {66}/>                  
                    </div>

                    <div className={headerStyle.title}>
                        <a href = './'> 
                            <p> Pesta Rakyat Komputer </p>
                        </a>
                    </div>
                </div>

                <div className={headerStyle.option}>
                    <p className = {headerStyle.last}> Pendaftaran </p>
                    <a> Score </a>
                    <a> Games Map </a>
                    <a> Team Profile </a>
                    <a> News </a>
                    <a> Explore Cafeteria </a>
                    <a className={headerStyle.last}> Merchandise </a>
                </div>
                
            </div>
            {children}
        </div>
    )
}

export default Header
