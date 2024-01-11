// @ts-ignore
import { usePioneer, Transfer } from "@pioneer-sdk/pioneer-react";
import { useEffect } from "react";

import { initWallets } from "./setup";

const Home = () => {
  const { onStart } = usePioneer();

  // start the context provider
  useEffect(() => {
    initWallets(onStart);
  }, []);

  return (
    <div>
      <Transfer />
    </div>
  );
};

export default Home;
