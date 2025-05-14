import React from "react";
import { Mail, Phone } from "lucide-react";
import Form from "./Form";
import Image from "next/image";

function Connect() {
  return (
    <div className="font-poppins mt-20 max-w-7xl mx-auto px-4" id="connect">
      <h1 className="text-4xl font-semibold text-center text-secondary mb-12">
        Let's Connect
      </h1>
      <div className="bg-[#FFF8F2] rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 md:px-40">
            <h2 className="text-3xl font-medium text-[#0A2538] mt-10">
              <span className="text-secondary">More Than Just a Ride:</span>{" "}
              Safe, Friendly, and Reliable
              <Image
                src={"/smiley.png"}
                alt="smiley"
                width={30}
                height={30}
                className="inline-block align-text-top"
                style={{ marginLeft: "2px" }}
              />
            </h2>
            <p className="text-base text-[#95A5A6]">
              Are you looking for a safe and enjoyable transport? Reach out to
              us.
            </p>
            <div className="flex gap-x-4 md:gap-x-8">
              <div>
                <h3 className="font-medium text-[#0A2538] mb-2">
                  Phone number
                </h3>
                <p className="flex items-center gap-2 text-[#0A2538]">
                  <Phone className="w-5 h-5" /> 08046333629
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#0A2538] mb-2">E-mail</h3>
                <p className="flex items-center gap-2 text-[#0A2538]">
                  <Mail className="w-5 h-5" /> padikkaltt@gmail.com
                </p>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Connect;
