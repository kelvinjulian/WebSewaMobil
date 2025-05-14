import Image from "next/image";
import BackBorderWhite from "@/assets/images/icons/back-border-white.svg";
import HuayraSide from "@/assets/images/thumbnails/huayra-side.png";
import Flash from "@/assets/images/icons/flash.svg";
import Star from "@/assets/images/icons/star.svg";
import ArrowCircleDown from "@/assets/images/icons/arrow-circle-down.svg";
import Timer from "@/assets/images/icons/timer.svg";
import Calendar from "@/assets/images/icons/calendar.svg";
import SecurityUserBlack from "@/assets/images/icons/security-user-black.svg";
import Sms from "@/assets/images/icons/sms.svg";
import Call from "@/assets/images/icons/call.svg";
import ArrowRight from "@/assets/images/icons/arrow-right.svg";
import Store1 from "@/assets/images/thumbnails/store-1.png";
import NoteFavoriteBlack from "@/assets/images/icons/note-favorite-black.svg";
import Receipt from "@/assets/images/icons/receipt.svg";
import CardTick from "@/assets/images/icons/card-tick.svg";
import Proof from "@/assets/images/thumbnails/proof.jpeg";
import Support from "@/assets/images/icons/24-support.svg";

export default function BookingDetailPage() {
  return (
    // Bagian latar putih dan biru
    <div
      id="main-content"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
    >
      <div className="absolute backdrop w-full h-[400px] bg-alpina-blue"></div>

      {/* Bagian Top Bar */}
      <div
        id="Top-Bar"
        className="flex items-center justify-between px-4 mt-[60px] z-10"
      >
        <a href="delivery.html">
          <Image
            src={BackBorderWhite}
            className="flex shrink-0 w-10"
            alt="icon"
          />
        </a>
        <div className="w-fit text-center text-white">
          <p className="text-sm leading-[21px] ">My Booking</p>
          <p className="font-bold text-xl leading-[30px]">ALPBWA2024</p>
        </div>
        <div className="dummy-btn w-10"></div>
      </div>
      {/* Tutup Top Bar */}

      {/* Bagian Header */}
      <div id="header" className="px-4 z-10 mt-[30px]">
        <div className="flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
          <div className="flex w-[130px] h-[100px] shrink-0 overflow-hidden">
            <Image
              src={HuayraSide}
              className="w-full h-full object-contain"
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Huayra White</h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[2px]">
                <Image src={Flash} className="w-5 h-5" alt="icon" />
                <p className="font-semibold text-sm leading-[21px]">450kmh</p>
              </div>
              <div className="flex items-center gap-[2px] justify-end">
                <p className="font-semibold text-sm leading-[21px]">4/5</p>
                <Image src={Star} className="w-5 h-5" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tutup Header */}

      {/* Bagian Booking Details */}
      <section id="Booking-Details" className="px-4 mt-5 z-10">
        <div className="group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white has-[:checked]:!h-[64px] overflow-hidden transition-all duration-300">
          <label className="flex items-center justify-between">
            <p className="font-bold">Booking Details</p>
            <Image
              src={ArrowCircleDown}
              className="w-6 h-6 group-has-[:checked]:-rotate-180 transition-all duration-300"
              alt="icon"
            />
            <input
              type="checkbox"
              name="dropdown"
              id="dropdown"
              className="hidden"
            />
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={Timer} className="w-6 h-6" alt="icon" />
              <p>Duration</p>
            </div>
            <p className="font-semibold">10 Days Ahead</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={Calendar} className="w-6 h-6" alt="icon" />
              <p>Rented At</p>
            </div>
            <p className="font-semibold">July 10, 2024</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={SecurityUserBlack} className="w-6 h-6" alt="icon" />
              <p>Full Name</p>
            </div>
            <p className="font-semibold">Angga Shayna</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={Sms} className="w-6 h-6" alt="icon" />
              <p>Email Address</p>
            </div>
            <p className="font-semibold">toko@angga.com</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={Call} className="w-6 h-6" alt="icon" />
              <p>Phone Number</p>
            </div>
            <p className="font-semibold">628123123123</p>
          </div>
        </div>
      </section>
      {/* Tutup Booking Details */}

      {/* Bagian Delivery Details */}
      <section id="Delivery-Details" className="px-4 mt-5 z-10">
        <div className="group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white has-[:checked]:!h-[64px] overflow-hidden transition-all duration-300">
          <label className="flex items-center justify-between">
            <p className="font-bold">Pickup Store At</p>
            <Image
              src={ArrowCircleDown}
              className="w-6 h-6 group-has-[:checked]:-rotate-180 transition-all duration-300"
              alt="icon"
            />
            <input
              type="checkbox"
              name="dropdown"
              id="dropdown"
              className="hidden"
            />
          </label>
          <div className="flex items-center gap-[14px]">
            <div className="w-[90px] h-[90px] rounded-[20px] flex shrink-0 overflow-hidden bg-[#1D68B4]">
              <Image
                src={Store1}
                className="w-full h-full object-cover"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="font-bold">Xtrade Centre</p>
              <p className="text-sm leading-[21px] line-clamp-2">
                Perumahan sinar bumi hayang nomor 19938
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tutup Delivery Details */}

      {/* Bagian Payment Details */}
      <section id="Payment-Details" className="px-4 mt-5 z-10">
        <div className="group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white has-[:checked]:!h-[64px] overflow-hidden transition-all duration-300">
          <label className="flex items-center justify-between">
            <p className="font-bold">Payment Details</p>
            <Image
              src={ArrowCircleDown}
              className="w-6 h-6 group-has-[:checked]:-rotate-180 transition-all duration-300"
              alt="icon"
            />
            <input
              type="checkbox"
              name="dropdown"
              id="dropdown"
              className="hidden"
            />
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={NoteFavoriteBlack} className="w-6 h-6" alt="icon" />
              <p>Booking TRX ID</p>
            </div>
            <p className="font-semibold">ALPBWA2024</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={Timer} className="w-6 h-6" alt="icon" />
              <p>Payment Method</p>
            </div>
            <p className="font-semibold">Bank Transfer</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={Receipt} className="w-6 h-6" alt="icon" />
              <p>Status Payment</p>
            </div>
            <p className="w-fit rounded-full py-1 px-2 bg-alpina-orange font-bold text-xs leading-[18px] text-white">
              PENDING
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={Receipt} className="w-6 h-6" alt="icon" />
              <p>Status Payment</p>
            </div>
            <p className="w-fit rounded-full py-1 px-2 bg-alpina-gren font-bold text-xs leading-[18px] text-white">
              SUCCESS
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[6px]">
              <Image src={CardTick} className="w-6 h-6" alt="icon" />
              <p>Grand Total</p>
            </div>
            <p className="font-bold text-[22px] leading-[33px] text-alpina-blue">
              Rp 24.500.000
            </p>
          </div>
        </div>
      </section>
      {/* Tutup Payment Details */}

      {/* Bagian Payment proof */}
      <section id="Payment-proof" className="px-4 mt-5 z-10">
        <div className="group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white has-[:checked]:!h-[64px] overflow-hidden transition-all duration-300">
          <label className="flex items-center justify-between">
            <p className="font-bold">Proof of Payment</p>
            <Image
              src={ArrowCircleDown}
              className="w-6 h-6 group-has-[:checked]:-rotate-180 transition-all duration-300"
              alt="icon"
            />
            <input
              type="checkbox"
              name="dropdown"
              id="dropdown"
              className="hidden"
            />
          </label>
          <div className="w-full aspect-[321/200] rounded-[20px] bg-[#1D68B4] overflow-hidden">
            <Image src={Proof} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </section>
      {/* Tutup Payment proof */}

      {/* Bagian Call Customer Service */}
      <div className="px-4 mt-5 mb-[30px]">
        <a
          href="index.html"
          className="flex items-center justify-between w-full rounded-full p-[14px_24px] bg-alpina-blue"
        >
          <span className="font-bold text-white">Call Customer Service</span>
          <Image src={Support} className="w-6 h-6" alt="icon" />
        </a>
      </div>
      {/* Tutup Call Customer Service */}
    </div>
  );
}
