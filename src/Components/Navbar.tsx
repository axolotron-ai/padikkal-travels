import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div>
      <Image src={"/logo.svg"} height={30} width={30} alt="logo" />
    </div>
  );
}

export default Navbar;
