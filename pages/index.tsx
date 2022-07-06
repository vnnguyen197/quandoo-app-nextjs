import BestRestaurants from '@/components/BestRestaurants';
import Booking from '@/components/Booking';
import BookingApp from '@/components/BookingApp';
import Directory from '@/components/Directory';
import Districts from '@/components/Districts';
import Flavours from '@/components/Flavours';
import RestaurantGuide from '@/components/RestaurantGuide';
import SildeFind from '@/components/SlideFind';
import TopDistricts from '@/components/TopDistricts';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quandoo Restaurant</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SildeFind />
      <RestaurantGuide />
      <Districts />
      <Booking />
       <BookingApp />
      <Directory/>
      <Flavours  />  
      <BestRestaurants/>
     <TopDistricts/>
    </div>
  );
};

export default Home;
