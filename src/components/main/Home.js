import { Outlet } from "react-router-dom";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./Home.css";
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import abi from "./constants/constants";
import uploadSign from "./plus_addIcon.png";

const Home = () => {
  // const uploadSign = "/plus_addIcon.png";
  // const [account, setAccount] = useState("");
  // const [contract, setContract] = useState(null);
  // const [provider, setProvider] = useState(null);
  // // const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);

  //   const loadProvider = async () => {
  //     if (provider) {
  //       window.ethereum.on("chainChanged", () => {
  //         window.location.reload();
  //       });

  //       window.ethereum.on("accountsChanged", () => {
  //         window.location.reload();
  //       });
  //       await provider.send("eth_requestAccounts", []);
  //       const signer = provider.getSigner();
  //       const address = await signer.getAddress();
  //       setAccount(address);
  //       let contractAddress = "0xd4903Ce1FfED3dDF72071bf79404c264Cd7080aB";

  //       const contract = new ethers.Contract(contractAddress, abi, signer);
  //       //console.log(contract);
  //       setContract(contract);
  //       setProvider(provider);
  //     } else {
  //       console.error("Metamask is not installed");
  //     }
  //   };
  //   provider && loadProvider();
  // }, []);

  return (
    <div className="home">
      <aside className="sidemenu">
        <div className="sidemenu-btn child-1">ALLOW ACCESS</div>
        <div className="sidemenu-btn child-2">REVOKE ACCESS</div>
        <div className="sidemenu-btn child-3">ADDED MEMBERS</div>
        <div className="sidemenu-btn child-4">ACCESS LIST</div>
      </aside>

      <section className="drive-space">
        <div className="user-details">
          <div className="acc-logo"></div>
          <div className="acc-address">
            0x273eBAcF2D5365B4F4438d93849255288b879b10
          </div>
        </div>
        <div className="drive-space-main">
          <div className="drive-space-container">
            <div className="img">1</div>
            <div className="img">2</div>
            <div className="img">3</div>
            <div className="img">4</div>
            <div className="img">5</div>
            <div className="img">6</div>
            <div className="img">7</div>
            <div className="img">8</div>
            <div className="img">9</div>
            <div className="img">10</div>
          </div>
          <div className="upload-btn">
            <img src={uploadSign} />
          </div>
          {/* main workspace */}
          {/* images function implement here */}
        </div>
      </section>
      {/* <h1>Home</h1> */}
    </div>
  );
};

export default Home;
