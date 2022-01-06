import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Pendaftaran from '../styles/Pendaftaran.module.css'

const Home: NextPage = () => {
  return (
    <div className={Pendaftaran.container}>
      <Head>
        <title>PERAK 2022</title>
        <link rel="icon" href = "/logobgtransparent.png"/>
      </Head>
      <div className= {Pendaftaran.title}> 
        <p className= {Pendaftaran.p}> Pilih games yang kamu inginkan </p>
      </div>

      <div className= {Pendaftaran.pilih}>
        <p className= {Pendaftaran.p}> Games Individual </p>
      </div>

      <div className = {Pendaftaran.games}>
        <div className = {Pendaftaran.brawlhalla_game}>
          <a href = './individu_brawlhalla'>
            <Image className = {Pendaftaran.brawlhalla} src = '/logobrawhalla.png' width = {238} height = {161} />
          </a>
        </div>

        <div className = {Pendaftaran.osu_game}>
          <a href = './individu_osu'>
            <Image className = {Pendaftaran.osu} src = '/Osu!Logo_(2019) 1.png' width = {205} height = {205} />
          </a>
        </div>

        <div className = {Pendaftaran.chess_game}>
          <a href = './individu_chess'>
            <Image className = {Pendaftaran.chess} src = '/chesspieces 1.png' width = {180} height = {180} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Home;
