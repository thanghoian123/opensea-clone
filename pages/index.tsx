import { useWeb3 } from "@3rdweb/hooks";
import type { NextPage } from "next";
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { client } from "../lib/sanityClient";
import toast, { Toaster } from "react-hot-toast";
import { IdentifiedSanityDocumentStub } from "@sanity/client";
const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `bg`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

function randomId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
}
const Home: NextPage = () => {
  const { address, connectWallet } = useWeb3();
  const welcomeUser = (userName: string) => {
    toast.success(
      `Welcome back${userName !== "Unnamed" ? ` ${userName}` : ""}!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };
  useEffect(() => {
    if (!address) return;

    (async () => {
      const userDoc = {
        _type: "users",
        _id: address || randomId(),
        userName: "Unnamed",
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);
      welcomeUser(result.userName);
    })();
    console.log("🚀 ~ file: index.tsx ~ line 47 ~ result2");
  }, [address]);
  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />
      {!address ? (
        <div className="h-screen flex justify-center flex-col items-center">
          <button
            className="bg-amber-500 py-1 px-2 text-white rounded"
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </button>
          <p>
            You need Chrome to be
            <br /> able to run this app.
          </p>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
        </>
      )}

      <button onClick={() => toast("Here is your toast.")}>
        Make me a toast
      </button>
    </div>
  );
};

export default Home;
