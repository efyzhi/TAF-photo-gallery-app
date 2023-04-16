import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Instagram from '../components/Instagram';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name='description' content='Generated by Next App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading='TAF Photography' message='I capture moments in nature and keep them alive.'/>
      <Slider slider={SliderData} />
      <Instagram />
    </div>
  );
}
