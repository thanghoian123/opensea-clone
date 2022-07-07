import { useRouter } from "next/router";
import React from "react";

function Collection() {
    const route = useRouter();
    console.log(route.query);
    
  return <div>collection</div>;
}

export default Collection;
