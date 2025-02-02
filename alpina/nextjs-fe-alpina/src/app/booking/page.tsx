"use client";
import Image from "next/image";
import BackBorderWhite from "@/assets/images/icons/back-border-white.svg";
import HuayraSide from "@/assets/images/thumbnails/huayra-side.png";
import Flash from "@/assets/images/icons/flash.svg";
import Star from "@/assets/images/icons/star.svg";
import Timer from "@/assets/images/icons/timer.svg";
import Calendar from "@/assets/images/icons/calendar.svg";
import SecurityUserBlack from "@/assets/images/icons/security-user-black.svg";
import Sms from "@/assets/images/icons/sms.svg";
import Call from "@/assets/images/icons/call.svg";
import ArrowRight from "@/assets/images/icons/arrow-right.svg";
import { useState } from "react";
import ArrowCircleDown from "@/assets/images/icons/arrow-circle-down.svg";
import TickCircle from "@/assets/images/icons/tick-circle.svg";
import ShieldTick from "@/assets/images/icons/shield-tick.svg";
import Building4 from "@/assets/images/icons/building-4.svg";
import Car from "@/assets/images/icons/car.svg";
import Store1 from "@/assets/images/thumbnails/store-1.png";
import DollarSquare from "@/assets/images/icons/dollar-square.svg";
import SecurityCard from "@/assets/images/icons/security-card.svg";
import Courthouse from "@/assets/images/icons/courthouse.svg";
import TicketDiscount from "@/assets/images/icons/ticket-discount.svg";
import CardTick from "@/assets/images/icons/card-tick.svg";
import BCA from "@/assets/images/logos/bca.svg";
import Verify from "@/assets/images/icons/verify.svg";
import Mandiri from "@/assets/images/logos/mandiri.svg";
import ReceiptText from "@/assets/images/icons/receipt-text.svg";
import Card from "@/assets/images/icons/card.svg";
import Logo from "@/assets/images/logos/logo.svg";
import NoteFavoriteBlack from "@/assets/images/icons/note-favorite-black.svg";

export default function BookingPage() {
  const [step, setStep] = useState<number>(4);

  const renderStep = () => {
    if (step === 1) {
      return (
        // Latar biru dan putih
        <div
          id="main-content"
          className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
        >
          <div className="absolute backdrop w-full h-[200px] bg-alpina-blue"></div>

          {/* Bagian Top Bar */}
          <div
            id="Top-Bar"
            className="flex items-center justify-between px-4 mt-[60px] z-10"
          >
            <a href="details.html">
              <Image
                src={BackBorderWhite}
                className="flex shrink-0 w-10"
                alt="icon"
              />
            </a>
            <div className="w-fit text-center text-white">
              <p className="text-sm leading-[21px] ">Ready to</p>
              <p className="font-bold text-xl leading-[30px]">Booking Car</p>
            </div>
            <div className="dummy-btn w-10"></div>
          </div>
          {/* Bagian Tutup Top Bar */}

          {/* Bagian header */}
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
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                    Rp 22.000.000
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">
                      450kmh
                    </p>
                  </div>
                  <div className="flex items-center gap-[2px] justify-end">
                    <p className="font-semibold text-sm leading-[21px]">4/5</p>
                    <Image src={Star} className="w-5 h-5" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tutup Bagian header */}

          {/* Bagian form */}
          <form
            action="delivery.html"
            className="flex flex-col gap-5 px-4 mt-5"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-bold">Start Your Adventure</h2>
              <div className="flex flex-col gap-4">
                <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={Timer}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full">
                    <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                      Duration
                    </p>
                    <p className="font-semibold">10 Days Ahead</p>
                  </div>
                </label>
                <label className="relative group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={Calendar}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="peer appearance-none outline-none bg-transparent font-semibold invalid:absolute invalid:-z-10 [&::-webkit-calendar-picker-indicator]:!opacity-0"
                      required
                    />
                    <p className="text-alpina-light-grey peer-valid:text-xs peer-valid:leading-[18px]">
                      Choose booking date
                    </p>
                  </div>
                </label>
                <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={SecurityUserBlack}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <input
                      type="text"
                      name="fullName"
                      className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                      placeholder="Full Name"
                    />
                    <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                      Full Name
                    </p>
                  </div>
                </label>
                <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={Sms}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <input
                      type="email"
                      name="email"
                      className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                      placeholder="Email Address"
                    />
                    <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                      Email Address
                    </p>
                  </div>
                </label>
                <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={Call}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <input
                      type="tel"
                      name="phone"
                      className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                      placeholder="Phone Number"
                    />
                    <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                      Phone Number
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-between w-full rounded-full p-[14px_24px] bg-alpina-blue"
            >
              <span className="font-bold text-white">Continue Booking</span>
              <Image src={ArrowRight} className="w-6 h-6" alt="icon" />
            </button>
          </form>
          {/* Tutup Bagian form */}
        </div>
      );
    } else if (step === 2) {
      return (
        // Latar biru dan putih
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
            <a href="booking.html">
              <Image
                src={BackBorderWhite}
                className="flex shrink-0 w-10"
                alt="icon"
              />
            </a>
            <div className="w-fit text-center text-white">
              <p className="text-sm leading-[21px] ">Almost Done</p>
              <p className="font-bold text-xl leading-[30px]">
                Delivery Option
              </p>
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
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                    Rp 22.000.000
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">
                      450kmh
                    </p>
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
                  <Image
                    src={SecurityUserBlack}
                    className="w-6 h-6"
                    alt="icon"
                  />
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

          {/* Bagian Delivery Options */}
          <form action="payment.html" className="flex flex-col gap-4 mt-5 z-10">
            <div className="flex flex-col py-5 px-4 gap-4 bg-[#F9FAFB]">
              <p className="font-bold">Delivery Option</p>
              <div className="tab-link-btns flex items-center gap-4">
                <label
                  className="tablink relative w-full rounded-full p-[10px_14px] font-semibold bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue"
                  id="defaultOpen"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex shrink-0">
                      <Image src={Building4} alt="icon" />
                    </div>
                    <p>Pickup Store</p>
                  </div>
                  <input
                    type="radio"
                    name="delivery-type"
                    id="Pickup"
                    className="absolute -z-10 top-1/2 left-1/2 opacity-0"
                  />
                </label>
                <label className="tablink relative w-full rounded-full p-[10px_14px] font-semibold bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex shrink-0">
                      <Image src={Car} alt="icon" />
                    </div>
                    <p>Home Delivery</p>
                  </div>
                  <input
                    type="radio"
                    name="delivery-type"
                    id="Delivery"
                    className="absolute -z-10 top-1/2 left-1/2 opacity-0"
                  />
                </label>
              </div>
              <div className="tabs-contents">
                <div
                  id="pickup-tab"
                  className="tabcontent flex flex-col gap-4 "
                >
                  <label className="relative group w-full rounded-[20px] p-[10px_14px] bg-white transition-all duration-300 hover:ring-1 hover:ring-alpina-blue has-[:checked]:ring-1 has-[:checked]:ring-alpina-blue">
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
                        <p className="text-sm leading-[21px]">
                          Perumahan sinar bumi hayang nomor 19938
                        </p>
                      </div>
                      <div className="w-6 h-6 flex shrink-0">
                        <Image
                          src={TickCircle}
                          className="w-6 h-6 hidden group-has-[:checked]:flex"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="store"
                      id=""
                      className="absolute -z-10 top-1/2 left-1/2 opacity-0"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 px-4 mb-[30px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={ShieldTick}
                  className="w-8 h-8 flex shrink-0"
                  alt="icon"
                />
                <p className="font-semibold leading-[26px]">
                  Kami melindungi privasi anda dengan baik bantuan Angga Pro.
                </p>
              </div>
              <button
                type="submit"
                className="flex items-center justify-between w-full rounded-full p-[14px_24px] bg-alpina-blue"
              >
                <span className="font-bold text-white">Continue Booking</span>
                <Image src={ArrowRight} className="w-6 h-6" alt="icon" />
              </button>
            </div>
          </form>
          {/* Tutup Delivery Options */}
        </div>
      );
    } else if (step === 3) {
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
            <Image
              src={BackBorderWhite}
              className="flex shrink-0 w-10"
              alt="icon"
            />
            <div className="w-fit text-center text-white">
              <p className="text-sm leading-[21px] ">Almost Done</p>
              <p className="font-bold text-xl leading-[30px]">Payment</p>
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
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                    Rp 22.000.000
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">
                      450kmh
                    </p>
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
                  <Image
                    src={SecurityUserBlack}
                    className="w-6 h-6"
                    alt="icon"
                  />
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

          {/* Bagian Delivery Details  */}
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
                  <p className="font-bold line-clamp-1">Xtrade Centre</p>
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
                  <Image src={DollarSquare} className="w-6 h-6" alt="icon" />
                  <p>Price</p>
                </div>
                <p className="font-semibold">Rp 22.000.000</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Image src={SecurityCard} className="w-6 h-6" alt="icon" />
                  <p>Insurance</p>
                </div>
                <p className="font-semibold">Rp 500.000</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Image src={Courthouse} className="w-6 h-6" alt="icon" />
                  <p>Tax 11%</p>
                </div>
                <p className="font-semibold">Rp 4.000.000</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Image src={TicketDiscount} className="w-6 h-6" alt="icon" />
                  <p>Discount </p>
                </div>
                <p className="font-semibold">Rp 0</p>
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

          {/* Bagian Send Payment */}
          <section id="Sent-Payment" className="px-4 mt-5 z-10">
            <div className="group accordion flex flex-col rounded-[20px] border border-[#EFF2F7] p-5 gap-[18px] bg-white has-[:checked]:!h-[64px] overflow-hidden transition-all duration-300">
              <label className="flex items-center justify-between">
                <p className="font-bold">Send Payment to</p>
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
              <div className="flex items-center gap-3">
                <div className="w-[71px] h-[50px] flex shrink-0 overflow-hidden">
                  <Image
                    src={BCA}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold">Alpina Indonesia</p>
                    <Image
                      src={Verify}
                      className="w-[18px] h-[18px]"
                      alt="icon"
                    />
                  </div>
                  <p>8008129839</p>
                </div>
              </div>
              <hr className="border-[#EFF2F7]" />
              <div className="flex items-center gap-3">
                <div className="w-[71px] h-[50px] flex shrink-0 overflow-hidden">
                  <Image
                    src={Mandiri}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <div className="flex items-center gap-1">
                    <p className="font-semibold">Alpina Indonesia</p>
                    <Image
                      src={Verify}
                      className="w-[18px] h-[18px]"
                      alt="icon"
                    />
                  </div>
                  <p>12379834983281</p>
                </div>
              </div>
            </div>
          </section>
          {/* Tutup Send Payment */}

          {/* Bagian Proof of Payment  */}
          <form action="booking-finished.html" className="flex flex-col gap-5">
            <div id="Proof-Payment" className="px-4 mt-5 z-10">
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
                <label className="relative flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <div className="w-6 h-6 flex shrink-0">
                    <Image src={ReceiptText} alt="icon" />
                  </div>
                  <div className="appearance-none outline-none w-full flex flex-col-reverse">
                    <p id="Upload-btn" className="font-semibold hidden"></p>
                    <input
                      type="file"
                      name="proof"
                      id="Proof"
                      className="peer absolute -z-10 opacity-0 w-[10px]"
                      required
                    />
                    <p className="text-alpina-light-grey peer-valid:text-xs peer-valid:leading-[18px]">
                      Add an attachment
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] px-4 mb-[30px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  src={ShieldTick}
                  className="w-8 h-8 flex shrink-0"
                  alt="icon"
                />
                <p className="font-semibold leading-[26px]">
                  Kami melindungi privasi anda dengan baik bantuan Angga Pro.
                </p>
              </div>
              <button
                type="submit"
                className="flex items-center justify-between w-full rounded-full p-[14px_24px] bg-alpina-blue"
              >
                <span className="font-bold text-white">Confirm My Payment</span>
                <Image src={Card} className="w-6 h-6" alt="icon" />
              </button>
            </div>
          </form>
          {/* Tutup Proof of Payment */}
        </div>
      );
    } else {
      return (
        <div
          id="main-content"
          className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
        >
          <div className="flex flex-col items-center h-fit pt-[60px] pb-[30px] m-auto">
            <Image src={Logo} alt="logo" />
            <h1 className="text-center mt-[30px] font-bold text-2xl leading-9">
              Booking is Finished,
              <br />
              Congratulations!
            </h1>
            <div className="w-full aspect-[393/300] overflow-hidden mt-[30px] pl-4">
              <Image
                src={HuayraSide}
                className="w-full h-full object-cover object-left"
                alt="thumbnail"
              />
            </div>
            <div className="flex flex-col w-[340px] gap-5 mt-[30px]">
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-sm leading-[22px]">
                  Gunakan booking id transaction berikut untuk periksa status
                  pemesanan mobilmu
                </p>
                <div className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
                  <Image
                    src={NoteFavoriteBlack}
                    className="w-6 h-6 flex shrink-0"
                    alt="icon"
                  />
                  <div className="w-full flex flex-col-reverse">
                    <p className="font-semibold">ALPWBWA2024</p>
                    <p className="text-xs leading-[18px] text-alpina-light-grey">
                      Booking ID
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="index.html"
                  className="w-full rounded-full p-[14px_24px] bg-alpina-blue text-center font-bold text-white"
                >
                  Explore Again
                </a>
                <a
                  href="booking-details.html"
                  className="w-full rounded-full p-[14px_24px] bg-alpina-black text-center font-bold text-white"
                >
                  Check My Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return renderStep();
}
