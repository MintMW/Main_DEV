import React, { useState } from "react";
import { useForm } from "react-hook-form"; // React hook form easiest way to to pull up data that has been uploaded or enter to a form
import { nftmw } from "../../../declarations/nftmw";
import MoonWalker from "./Moonwalkers";

function Summon() {
  const { register, handleSubmit } = useForm();
  const [nftPrincipal, setNFTPrincipal] = useState("");
  const [loaderHidden, setLoaderHidden] = useState(true);

  async function onSubmit(data) {
    setLoaderHidden(false);
    const name = data.name;
    const image = data.image[0];
    const imageArray = await image.arrayBuffer();
    const imageByteData = [...new Uint8Array(imageArray)];// 3 dot notation to insert empty array

    const newNFT = await nftmw.mint(imageByteData, name); //calling our method from Bk canister (nftmw) 
    console.log(newNFT.toText());//as its gonna come as a principal data type have to convert
    setNFTPrincipal(newNFT);
    setLoaderHidden(true);
  }

  if (nftPrincipal == "") {
    return (
      <div className="minter-container">
        <div hidden={loaderHidden} className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
        ⚡️ CREATE YOUR NFT ⚡️
        </h3>
        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          Upload your 🎆 IMAGE 🎇 for MINTING👇
        </h6>
        <form className="makeStyles-form-109" noValidate="" autoComplete="off">
          <div className="upload-container">
            <input
              {...register("image", { required: true })}
              className="upload"
              type="file"
              accept="image/x-png,image/jpeg,image/gif,image/svg+xml,image/webp"
            />
          </div>
          <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
            Please Enter Your Collection Name
          </h6>
          <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
            <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
              <input
                {...register("name", { required: true })}
                placeholder="e.g. Moonwalkers.."
                type="text"
                className="form-InputBase-input form-OutlinedInput-input"
              />
              <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
            </div>
          </div>
          <div className="form-ButtonBase-root form-Chip-root makeStyles-chipBlue-108 form-Chip-clickable">
            <span onClick={handleSubmit(onSubmit)} className="form-Chip-label">
              MINT NFT
            </span>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
        🌟 🌟  Congratulations 🌟  Your NFT is MINTED Successfully 💫  !!
        </h3>
        <div className="horizontal-center">
          <MoonWalker id={nftPrincipal.toText()} />
        </div>
      </div>
    );
  }
}

export default Summon;
