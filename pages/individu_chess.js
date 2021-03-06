import React, { useState } from 'react'
import Image from 'next/image'
import Individu from '../styles/Individu.module.css' 
import Head from 'next/head'

const individu_chess = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    const togglePopup = () => {
        setButtonPopup(!buttonPopup)
    }

    if (typeof window !== "undefined") {
        function handleSubmit () {
            let value_full_name, value_short_name, value_tipe, value_npm, value_social_media;

            const full_name = document.getElementById('full_name');

            if(full_name !== null){
                value_full_name = full_name.value;
            }else{
                value_full_name = null;
            }
            
            const short_name = document.getElementById('short_name');

            if(short_name !== null){
                value_short_name = short_name.value;
            }else{
                value_short_name = null;
            }

            const tipe = document.querySelector("input[name='tipe']:checked");

            if(tipe !== null){
                value_tipe = tipe.value;
            }else{
                value_tipe = null;
            }

            const npm = document.getElementById('npm');

            if(npm !== null){
                value_npm = npm.value;
            }else{
                value_npm = null;
            }

            const social_media = document.getElementById('social_media');
            
            if(social_media !== null){
                value_social_media = social_media.value;
            }else{
                value_social_media = null;
            }
        
            if(value_full_name === null || value_short_name === null || value_tipe === null || value_tipe === null || value_npm === null || value_social_media === null){
                
            }else{
                sessionStorage.setItem("FULL_NAME", value_full_name);
                sessionStorage.setItem("SHORT_NAME", value_short_name);
                sessionStorage.setItem('TIPE', value_tipe);
                sessionStorage.setItem("NPM", value_npm);
                sessionStorage.setItem("SOCIAL_MEDIA", value_social_media);
                return;
            }
        }

        imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
            blah.src = URL.createObjectURL(file)
            }
        }

        const imgPath = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            sessionStorage.setItem("image", reader.result);
        }, false);

        if (imgPath) {
            reader.readAsDataURL(imgPath);
        }

    }

    return (
        <div className = {Individu.container}>
            <Head>
                <title> Pendaftaran Game Individual </title>
                <link rel="icon" href = "/logobgtransparent.png"/>
            </Head>
            <div className = {Individu.img}>
                <div className = {Individu.parent}>
                    <Image src = '/Group 752.png' width = {756} height = {581} />
                    <div className = {Individu.child}>
                        <Image src = '/chesspieces 1.png' width = {552} height = {374} />
                    </div>
                </div>
            </div>
            <div className = {Individu.title}> 
                <p className= {Individu.p}> Pendaftaran Games Individual </p>
            </div>
            <div className = {Individu.category}>
                <p className = {Individu.p}> Chess </p>
            </div>

            <div className = {Individu.biaya}>
                <p className = {Individu.p_biaya_1}> Biaya pendaftaran : Rp xx.xxx </p>
                <p className = {Individu.p_biaya_2}> Instruksi pembayaran diberikan setelah mengisi form pendaftaran </p>
            </div>

            <div className = {Individu.form}>
                <div className= {Individu.radio}>
                    <label className = {Individu.stados}> Elemen Staf / Dosen
                        <input id = 'stados' type = 'radio' value = 'Elemen Staf / Dosen' name = 'tipe'/>
                        <span className = {Individu.checkmark_stados}> </span>
                    </label>
                    <label className = {Individu.mahasiswa}> Mahasiswa
                        <input id = 'mahasiswa' type = 'radio' value = 'Mahasiswa' name = 'tipe'/> 
                        <span className = {Individu.checkmark_mahasiswa}> </span>
                    </label>
                </div>
                <div className = {Individu.entry}>
                    <div className = {Individu.nama_panjang}>
                        <a> Nama Lengkap </a>
                        <input id = 'full_name' type = 'text' name = 'nama' placeholder='Aang Perak'/> 
                    </div>
                    <div className = {Individu.nama_panggilan}>
                        <a> Nama Panggilan </a>
                        <input id = 'short_name' type = 'text' name = 'nama' placeholder='Aang Aja'/> 
                    </div>

                    <div className = {Individu.profile_picture}> 
                        <p className = {Individu.a_special}> Profile Picture </p>
                        <div className = {Individu.grid}>
                            <div className = {Individu.image}>
                                <div className = {Individu.image_2}> </div>
                                <div className = {Individu.place_image}>
                                    <img id="blah" src="#" className = {Individu.gambar}/>
                                </div>
                            </div>
                            <div className = {Individu.masukin}>
                                <p className = {Individu.p_hilang}> Pilih Gambar </p>
                                <input type = 'text' name = 'nama' placeholder='Aang Foto.png'/> 
                            </div>
                            <div className = {Individu.attachment}>
                                <input id = 'imgInp' type = 'file' name = 'file' title = 'Masukkan gambar yang kamu inginkan' accept = 'image/gif, image/jpeg, image/png' className = {Individu.input}/>
                            </div>
                        </div>
                    </div>

                    <div className = {Individu.npm}>
                        <a> NPM </a>
                        <input id = 'npm' type = 'number' name = 'nama' placeholder='1900000000' min = '0' pattern={10}/> 
                    </div>

                    <div className = {Individu.linewa}>
                        <a> ID Line / WhatsApp </a>
                        <input id = 'social_media' type = 'text' name = 'nama' placeholder='aangperak21'/> 
                    </div>
                </div>
                <div className = {Individu.daftar}>
                    <button onClick={togglePopup}> Daftar Sekarang </button>
                    {buttonPopup && (
                        <div className = {Individu.popup}>
                            <div className = {Individu.box}>
                                <h1> Apakah Anda Yakin Ingin Mendaftar di Permainan Ini? </h1>
                                <p> Pastikan semua data yang telah anda masukkan tidak ada yang salah. Anda tidak bisa mengubah data setelah pendaftaran tersimpan. </p>
                                <div className = {Individu.double_btn}>
                                    <div className = {Individu.btn_1}>
                                        <button onClick = {togglePopup}> Batal </button>
                                    </div>
                                    <div className = {Individu.btn_2}>
                                        <a id = 'a-link' href = './konfirmasi_brawlhalla'> 
                                            <button onClick = {handleSubmit()}> Simpan </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default individu_chess
