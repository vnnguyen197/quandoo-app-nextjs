import Booking from "@/components/Booking";
import BookingApp from "@/components/BookingApp";
import Directory from "@/components/Directory";
import Districts from "@/components/Districts";
import RestaurantGuide from "@/components/RestaurantGuide";
import SildeFind from "@/components/SlideFind";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quandoo Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SildeFind />
      <RestaurantGuide />
      <Districts />
      <Booking />
      <BookingApp />
      <Directory/>
    </div>
  );
};

export default Home;
