import React from "react";
import { Link } from "react-router-dom";
import "./all.css";

const Contact = () => {
  return (
    <div className=" bg-sec relative w-[15%] ">
      <div className="flex justify-center text-center">
      <p className="text-pry py-5 justify-center align-middle font-serif font-bold hover:text-sec1 flex items-center text-3xl">
        Vivian Amaranjo
      </p>
      </div>
      <div className="flex flex-col p-5 gap-5 justify-center  items-center  aspect-square w-88 ">
   
        <Link
          to="https://github.com/Munyia"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 text-white text-2xl rounded-full bg-black social-link2"
        >
          <svg
            viewBox="0 0 496 512"
            height="1em"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C426.2 457.8 496 362.8 496 252 496 113.3 385.5 8 244.8 8z"></path>
          </svg>
        </Link>
        <Link
          to="https://www.linkedin.com/in/vivian-ndidi-amaranjo-9a98a32a3" 
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 text-white text-2xl rounded-full bg-blue-700 social-link3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11.5 20h-3v-10h3v10zm-1.5-11.2c-.95 0-1.7-.75-1.7-1.7 0-.95.75-1.7 1.7-1.7s1.7.75 1.7 1.7c0 .95-.75 1.7-1.7 1.7zm14 11.2h-3v-5.5c0-1.3-.9-2.5-2.5-2.5s-2.5 1.2-2.5 2.5v5.5h-3v-10h3v1.7c.8-1.3 2.1-1.7 3.2-1.7 2.6 0 3.8 2.1 3.8 4.3v5.7z"></path>
          </svg>
        </Link>
        <Link
          to="tel:+2348174365032"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 text-white text-2xl rounded-full bg-green-500 social-link5"
        >
          <svg
            viewBox="0 0 16 16"
            className="bi bi-whatsapp"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              fill="white"
            ></path>
          </svg>
        </Link>
        <Link
      to= "mailto:ndidiranjo@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-12 h-12 text-white text-2xl rounded-full bg-red-500 hover:bg-red-600 social-link5"
    >
      <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white transform transition-transform duration-300 hover:scale-110"
      >
        <path d="M12 12.713L0 6.228V5.5C0 3.57 1.57 2 3.5 2h17C22.43 2 24 3.57 24 5.5v.728l-12 6.485zM0 8.406v10.907C0 21.075 1.925 23 4.281 23h15.438C22.075 23 24 21.075 24 19.313V8.406l-12 6.464-12-6.464z"/>
      </svg>
    </Link>
    <Link
          to="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-12 h-12 text-white text-2xl rounded-full bg-pink-600 social-link1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              fill="white"
            ></path>
          </svg>
        </Link>
        <Link
  to="https://twitter.com/elonmusk"
  target="_blank"
  rel="noopener noreferrer"
  className="relative flex items-center justify-center w-12 h-12 text-white text-2xl rounded-full bg-black social-link4 hover:bg-black"
>
  <svg
    viewBox="0 0 24 24"
    height="24"
    width="24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 1 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 1 0 1.414-1.414L13.414 12z"/>
  </svg>
</Link>
      </div>
    </div>
  );
};

export default Contact;
