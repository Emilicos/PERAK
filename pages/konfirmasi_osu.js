import Head from 'next/head'
import Image from 'next/image'
import Konfirmasi from '../styles/Konfirmasi.module.css'

const konfirmasi_osu = () =>{
    if (typeof window !== "undefined") {
        window.addEventListener('load', () => {
        
            const full_name = sessionStorage.getItem('FULL_NAME');
            const short_name = sessionStorage.getItem('SHORT_NAME');
            const tipe = sessionStorage.getItem('TIPE') 
            const npm = sessionStorage.getItem('NPM');
            const social_media = sessionStorage.getItem('SOCIAL_MEDIA');
            let img = document.getElementById('blah');
            img.src = sessionStorage.getItem('image');

            document.getElementById('result-full_name').innerHTML = full_name;
            document.getElementById('result-short_name').innerHTML = short_name;
            document.getElementById('result-tipe').innerHTML = tipe;
            document.getElementById('result-npm').innerHTML = npm;
            document.getElementById('result-social_media').innerHTML = social_media;
        })
        
    }

    return (
        <div className= {Konfirmasi.container}>
            <Head>
                <title> Konfirmasi Game Individual </title>
                <link rel="icon" href = "/logobgtransparent.png"/>
            </Head>
            <div className = {Konfirmasi.img}>
                <div className = {Konfirmasi.parent}>
                    <Image src = '/Group 752.png' width = {756} height = {581} priority/>
                    <div className = {Konfirmasi.child}>
                        <Image src = '/Osu!Logo_(2019) 1.png' width = {552} height = {374} />
                    </div>
                </div>
            </div>
            <div className = {Konfirmasi.title}> 
                <p className= {Konfirmasi.p}> Pendaftaran Games Individual </p>
            </div>
            <div className = {Konfirmasi.category}>
                <p className = {Konfirmasi.p}> osu! </p>
            </div>

            <div className = {Konfirmasi.limit}>
                <p> Terima kasih telah melakukan pendaftaran games di PERAK 2021 </p>
                <a> Silahkan melakukan pembayaran biaya pendaftaran sebesar </a>
                <p> Rp 50.000 </p>
                <p> Melalui nomor rekening: </p>
                <div className = {Konfirmasi.rekening}>
                    <a> Mandiri 6969420 </a>
                    <a> Jenius 6969420 </a>
                    <a> Gopay 6969420 </a>
                </div>

                <div className = {Konfirmasi.profile_picture}>
                    <div className = {Konfirmasi.image}>
                        <div className = {Konfirmasi.image_2}> </div>
                            <div className = {Konfirmasi.place_image}>
                                <img id="blah" src="" className = {Konfirmasi.gambar}/>
                            </div>
                    </div>
                    <div className = {Konfirmasi.info}>
                        <p> <span id = 'result-full_name'/> </p>
                        <a> <span id = 'result-short_name'/> - <span id = 'result-element'/> </a>    
                    </div>
                </div>

                <div className = {Konfirmasi.informasi}>
                    <p> Sembunyikan Detil Informasi </p>
                    <div className = {Konfirmasi.npm}>
                        <p> NPM </p>
                        <a> <span id = 'result-npm'/> </a>
                    </div>
                    <div className = {Konfirmasi.linewa}>
                        <p> ID Line / WhatsApp </p>
                        <a> <span id = 'result-social_media'/> </a>
                    </div>
                </div>

                <div className = {Konfirmasi.daftar}>
                    <a href = './'> 
                        <button> Daftar Games Lain </button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default konfirmasi_osu
