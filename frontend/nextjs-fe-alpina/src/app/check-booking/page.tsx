"use client";
import Image from "next/image";
import NoteFavoriteBlue from "@/assets/images/icons/note-favorite-blue.svg";
import NoteFavoriteBlack from "@/assets/images/icons/note-favorite-black.svg";
import Call from "@/assets/images/icons/call.svg";

export default function CheckBookingPage() {
  return (
    <div
      id="main-content"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
    >
      <form
        action="booking-details.html"
        className="flex flex-col items-center h-fit w-[340px] gap-5 m-auto"
      >
        <Image src={NoteFavoriteBlue} className="w-20 h-20" alt="icon" />
        <h1 className="font-bold text-2xl leading-9">Check My Booking</h1>
        <label className="group flex items-center w-full h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
          <Image
            src={NoteFavoriteBlack}
            className="w-6 h-6 flex shrink-0"
            alt="icon"
          />
          <div className="w-full flex flex-col-reverse">
            <input
              type="text"
              name="fullName"
              className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
              placeholder="Booking ID"
            />
            <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
              Booking ID
            </p>
          </div>
        </label>
        <label className="group flex items-center w-full h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
          <Image src={Call} className="w-6 h-6 flex shrink-0" alt="icon" />
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
        <button
          type="submit"
          className="w-full rounded-full p-[14px_24px] bg-alpina-blue text-center font-bold text-white"
        >
          Check My Booking
        </button>
      </form>
      {/* <nav id="Bottom-Nav" className="relative flex h-[93px] mt-10 z-20">
        <div className="fixed bottom-0 w-full flex items-center justify-evenly max-w-[640px] py-5 bg-alpina-black">
          <a href="index.html" className="link">
            <div className="group flex flex-col gap-2 items-center justify-center">
              <div className="w-6 h-6 flex shrink-0">
                <svg
                  width="24"
                  height="24"
                  className="group-hover:stroke-alpina-orange group-hover:fill-alpina-orange transition-all duration-300 stroke-white fill-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 16.25H15C14.59 16.25 14.25 15.91 14.25 15.5C14.25 15.09 14.59 14.75 15 14.75H21C21.41 14.75 21.75 15.09 21.75 15.5C21.75 15.91 21.41 16.25 21 16.25Z" />
                  <path d="M21 20.25H15C14.59 20.25 14.25 19.91 14.25 19.5C14.25 19.09 14.59 18.75 15 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z" />
                  <path
                    opacity="0.4"
                    d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                  />
                  <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" />
                  <path
                    opacity="0.4"
                    d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                  />
                </svg>
              </div>
              <span className="font-semibold text-sm leading-[21px] group-hover:text-alpina-orange transition-all duration-300 text-white">
                Browse
              </span>
            </div>
          </a>
          <a href="check-booking.html" className="link">
            <div className="group flex flex-col gap-2 items-center justify-center">
              <div className="w-6 h-6 flex shrink-0">
                <svg
                  width="25"
                  height="24"
                  className="group-hover:stroke-alpina-orange group-hover:fill-alpina-orange transition-all duration-300 stroke-alpina-orange fill-alpina-orange"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.33333 5.75C6.92333 5.75 6.58333 5.41 6.58333 5V2C6.58333 1.59 6.92333 1.25 7.33333 1.25C7.74333 1.25 8.08333 1.59 8.08333 2V5C8.08333 5.41 7.74333 5.75 7.33333 5.75Z" />
                  <path d="M15.3333 5.75C14.9233 5.75 14.5833 5.41 14.5833 5V2C14.5833 1.59 14.9233 1.25 15.3333 1.25C15.7433 1.25 16.0833 1.59 16.0833 2V5C16.0833 5.41 15.7433 5.75 15.3333 5.75Z" />
                  <path
                    opacity="0.4"
                    d="M20.3333 8.5V17C20.3333 20 18.8333 22 15.3333 22H7.33333C3.83333 22 2.33333 20 2.33333 17V8.5C2.33333 5.5 3.83333 3.5 7.33333 3.5H15.3333C18.8333 3.5 20.3333 5.5 20.3333 8.5Z"
                  />
                  <path d="M13.3333 11.75H7.33333C6.92333 11.75 6.58333 11.41 6.58333 11C6.58333 10.59 6.92333 10.25 7.33333 10.25H13.3333C13.7433 10.25 14.0833 10.59 14.0833 11C14.0833 11.41 13.7433 11.75 13.3333 11.75Z" />
                  <path d="M10.3333 16.75H7.33333C6.92333 16.75 6.58333 16.41 6.58333 16C6.58333 15.59 6.92333 15.25 7.33333 15.25H10.3333C10.7433 15.25 11.0833 15.59 11.0833 16C11.0833 16.41 10.7433 16.75 10.3333 16.75Z" />
                  <path d="M21.3333 13.63C20.4433 12.92 19.3133 12.5 18.0833 12.5C16.8533 12.5 15.7033 12.93 14.8033 13.66C13.5933 14.61 12.8333 16.1 12.8333 17.75C12.8333 18.73 13.1133 19.67 13.5933 20.45C13.9633 21.06 14.4433 21.59 15.0133 22C15.8733 22.63 16.9333 23 18.0833 23C19.4133 23 20.6133 22.51 21.5333 21.69C21.9433 21.35 22.2933 20.93 22.5733 20.45C23.0533 19.67 23.3333 18.73 23.3333 17.75C23.3333 16.08 22.5533 14.59 21.3333 13.63ZM18.0833 20.25C18.0833 18.87 16.9633 17.75 15.5833 17.75C16.9633 17.75 18.0833 16.63 18.0833 15.25C18.0833 16.63 19.2033 17.75 20.5833 17.75C19.2033 17.75 18.0833 18.87 18.0833 20.25Z" />
                </svg>
              </div>
              <span className="font-semibold text-sm leading-[21px] group-hover:text-alpina-orange transition-all duration-300 text-alpina-orange">
                Booking
              </span>
            </div>
          </a>
          <a href="#" className="link">
            <div className="group flex flex-col gap-2 items-center justify-center">
              <div className="w-6 h-6 flex shrink-0">
                <svg
                  width="25"
                  height="24"
                  className="group-hover:stroke-alpina-orange group-hover:fill-alpina-orange transition-all duration-300 stroke-white fill-white"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M4.15665 14.6599L2.63666 13.14C2.01666 12.52 2.01666 11.5 2.63666 10.88L4.15665 9.35996C4.41665 9.09996 4.62665 8.58995 4.62665 8.22995V6.07999C4.62665 5.19999 5.34666 4.47995 6.22666 4.47995H8.37665C8.73665 4.47995 9.24666 4.26998 9.50666 4.00998L11.0266 2.48996C11.6466 1.86996 12.6667 1.86996 13.2867 2.48996L14.8067 4.00998C15.0667 4.26998 15.5766 4.47995 15.9366 4.47995H18.0867C18.9667 4.47995 19.6866 5.19999 19.6866 6.07999V8.22995C19.6866 8.58995 19.8967 9.09996 20.1567 9.35996L21.6767 10.88C22.2967 11.5 22.2967 12.52 21.6767 13.14L20.1567 14.6599C19.8967 14.9199 19.6866 15.43 19.6866 15.79V17.94C19.6866 18.82 18.9667 19.54 18.0867 19.54H15.9366C15.5766 19.54 15.0667 19.75 14.8067 20.01L13.2867 21.53C12.6667 22.15 11.6466 22.15 11.0266 21.53L9.50666 20.01C9.24666 19.75 8.73665 19.54 8.37665 19.54H6.22666C5.34666 19.54 4.62665 18.82 4.62665 17.94V15.79C4.62665 15.42 4.41665 14.9099 4.15665 14.6599Z"
                  />
                  <path d="M15.1667 16C14.6067 16 14.1566 15.55 14.1566 15C14.1566 14.45 14.6066 14 15.1566 14C15.7066 14 16.1566 14.45 16.1566 15C16.1566 15.55 15.7167 16 15.1667 16Z" />
                  <path d="M9.17667 10C8.61667 10 8.16666 9.55 8.16666 9C8.16666 8.45 8.61666 8 9.16666 8C9.71666 8 10.1667 8.45 10.1667 9C10.1667 9.55 9.72667 10 9.17667 10Z" />
                  <path d="M9.16666 15.75C8.97666 15.75 8.78666 15.68 8.63666 15.53C8.34666 15.24 8.34666 14.7599 8.63666 14.4699L14.6367 8.46994C14.9267 8.17994 15.4067 8.17994 15.6967 8.46994C15.9867 8.75994 15.9867 9.24 15.6967 9.53L9.69666 15.53C9.54666 15.68 9.35666 15.75 9.16666 15.75Z" />
                </svg>
              </div>
              <span className="font-semibold text-sm leading-[21px] group-hover:text-alpina-orange transition-all duration-300 text-white">
                Promo
              </span>
            </div>
          </a>
          <a href="#" className="link">
            <div className="group flex flex-col gap-2 items-center justify-center">
              <div className="w-6 h-6 flex shrink-0">
                <svg
                  width="24"
                  height="24"
                  className="group-hover:stroke-alpina-orange group-hover:fill-alpina-orange transition-all duration-300 stroke-white fill-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M10.49 2.23L5.5 4.10001C4.35 4.53001 3.41 5.89 3.41 7.12V14.55C3.41 15.73 4.19001 17.28 5.14001 17.99L9.44 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53001 18.52 4.10001L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z"
                    fill="white"
                  />
                  <path
                    d="M11.9 11.3C11.92 11.3 11.94 11.3 11.96 11.3H11.98H12C13.15 11.26 14.05 10.33 14.06 9.17003C14.06 7.99003 13.1 7.03003 11.92 7.03003C10.74 7.03003 9.78 7.99003 9.78 9.17003C9.8 10.32 10.7 11.26 11.9 11.3Z"
                    fill="white"
                  />
                  <path
                    d="M14.19 13.4101C12.98 12.6101 11.02 12.6101 9.79999 13.4101C9.23999 13.7901 8.91 14.3301 8.91 14.8901C8.91 15.4601 9.22999 15.9801 9.79999 16.3601C10.41 16.7601 11.2 16.9701 11.99 16.9701C12.78 16.9701 13.58 16.7701 14.18 16.3601C14.74 15.9801 15.07 15.4401 15.07 14.8801C15.08 14.3101 14.76 13.7901 14.19 13.4101Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="font-semibold text-sm leading-[21px] group-hover:text-alpina-orange transition-all duration-300 text-white">
                Helps
              </span>
            </div>
          </a>
        </div>
      </nav> */}
    </div>
  );
}
