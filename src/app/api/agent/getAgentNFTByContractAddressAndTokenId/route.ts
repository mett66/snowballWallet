import { NextResponse, type NextRequest } from "next/server";

import { Network, Alchemy } from 'alchemy-sdk';




const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(settings);



export async function POST(request: NextRequest) {

  const body = await request.json();

  const {
    erc721ContractAddress,
    tokenId
  } = body;


  if (!erc721ContractAddress) {

    return NextResponse.error();
  }

  console.log("erc721ContractAddress: ", erc721ContractAddress);
  console.log("tokenId: ", tokenId);



  /*
  const response = await alchemy.nft.getNftsForOwner(
    walletAddress, {
    omitMetadata: false, // // Flag to omit metadata
    contractAddresses: [erc721ContractAddress],
  });
  */
  /*
  const response = await alchemy.nft.getNftsForContract(
    erc721ContractAddress, {
    omitMetadata: false, // // Flag to omit metadata
  });
  */
  const response = await alchemy.nft.getNftMetadata(
    erc721ContractAddress,
    tokenId
  );



  if (!response) {
    return NextResponse.json({
      result: [],
    });
    
  }

 
  return NextResponse.json({

    result: response,
    
  });
  
}
