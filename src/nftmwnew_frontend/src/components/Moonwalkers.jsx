import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/nftmwnew_backend";
import { Principal } from "@dfinity/principal";

function Moonwalker(props) {
  const [name, setName] = useState();
  const [owner, setOwner] = useState();
  const [image, setImage] = useState();

  const id = Principal.fromText(props.id);

  const localHost = "http://localhost:8080/";
  const agent = new HttpAgent({ host: localHost });

  async function mintNFT() {
    const NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: id,
    });

    const name = await NFTActor.getName();
    const owner = await NFTActor.getOwner();
    const imageData = await NFTActor.getAsset();
    const imageContent = new Uint8Array(imageData); //converting it into 
    const image = URL.createObjectURL( //nat8 nos to Blob data type
    new Blob([imageContent.buffer], { type: "image/png" }) //then Blob data type can be converted
    );

    setName(name);
    setOwner(owner.toText());
    setImage(image);
  }

  useEffect(() => {
    mintNFT();
  }, []);

  return (
    <div className="disGrid-MoonWalker">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}
            <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            Owner: {owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Moonwalker;