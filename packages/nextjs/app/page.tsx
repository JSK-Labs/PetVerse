"use client";

// import Link from "next/link";
// import Image from "next/image";
// import { ConnectedAddress } from "~~/components/ConnectedAddress";
import { BusinessProfile } from "./(petverse)/pages/business";

const Home = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <BusinessProfile />
    </div>
  );
};

export default Home;
