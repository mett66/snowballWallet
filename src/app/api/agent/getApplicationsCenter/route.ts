import { NextResponse, type NextRequest } from "next/server";



import {
	getAllAgents,
} from '@lib/api/agent';



export async function POST(request: NextRequest) {

  const body = await request.json();

  const { walletAddress, center } = body;


  if (!walletAddress) {

    return NextResponse.error();
  }

  if (walletAddress === "0x7bfF3359841D26C8046364b93E7dA01886ae1c22" // wayne

      || walletAddress === "0x030549f3E1644008c920d0046caE758317Dab8CE" // ppump wayne

      || walletAddress === "0x79bA77332cE549cA99a2851b8D7e9c0229432417" // ppump orry

      

      || walletAddress === "0x5Cb2D01Cd138D9aB7a7435A85e8B12b0B2852A7a" // center

      || walletAddress === "0xFb580c68794A963632FF272ab5A7233ee6114fef" // 곽준규

      || walletAddress === "0x4d459172eeDA205Ed0DbA2b8897c9cA864069057" // 오원대표
    
    ) {

      const result = await getAllAgents({
        center: center,
      });
 
      return NextResponse.json({
    
        result,
        
      });


  } else {

    return NextResponse.error();

  }


  
}
