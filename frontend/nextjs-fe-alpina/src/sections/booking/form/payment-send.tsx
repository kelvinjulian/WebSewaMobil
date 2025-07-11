import { useState } from "react";
import Image from "next/image";
import BCA from "@/assets/images/logos/bca.svg";
import Mandiri from "@/assets/images/logos/mandiri.svg";
import ArrowCircleDown from "@/assets/images/icons/arrow-circle-down.svg";
import Verify from "@/assets/images/icons/verify.svg";

export const PaymentSent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const banks = [
    {
      id: 1,
      icon: BCA,
      accountName: "Alpina Indonesia",
      accountNumber: "8008129839",
    },
    {
      id: 2,
      icon: Mandiri,
      accountName: "Alpina Indonesia",
      accountNumber: "12379834983281",
    },
  ];

  return (
    <section id="Sent-Payment" className="px-4 mt-5 z-10">
      <div
        className={`group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] p-5" : "max-h-[64px] p-2"
        }`}
      >
        <label
          className="flex items-center justify-between"
          onClick={toggleAccordion}
        >
          <p className="font-bold">Send Payment to</p>
          <Image
            src={ArrowCircleDown}
            className={`w-6 h-6 transition-all duration-300 ${
              isOpen ? "-rotate-180" : ""
            }`}
            alt="icon"
            width={24}
            height={24}
          />
        </label>

        {/* Accordion content */}
        {isOpen && (
          <>
            {banks.map((bank) => (
              <div key={bank.id}>
                <div className="flex items-center gap-3">
                  <div className="w-[71px] h-[50px] flex shrink-0 overflow-hidden">
                    <Image
                      src={bank.icon}
                      className="w-full h-full object-contain"
                      alt={`${bank.accountName} Logo`}
                      width={71}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex items-center gap-1">
                      <p className="font-semibold">{bank.accountName}</p>
                      <Image
                        src={Verify}
                        className="w-[18px] h-[18px]"
                        alt="Verified Icon"
                        width={18}
                        height={18}
                      />
                    </div>
                    <p>{bank.accountNumber}</p>
                  </div>
                </div>
                {bank.id === 1 && <hr className="border-[#EFF2F7] mt-3" />}
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};
