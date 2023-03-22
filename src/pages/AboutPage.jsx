import imgURL from '../assets/about-joshua-spires-wide.jpg';
import imgURL2 from '../assets/about-joshua-spires-wide-bottom.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex flex-1 flex-col flex-wrap">
      <div className="md:flex-column flex flex-col justify-center">
        <img src={imgURL} alt="joshua spires camera" className="flex-1" />
        <div className="xl:px-0 py-2 px-4 font-default-sans text-lg sm:text-3xl">
          <p>Hi! My name is Josh (Spires)</p>
          <br />
          <p>Photographer + Cinematographer</p>
          <br />
          <p>Shooting professionally since 2008</p>
          <br />
          <p>Focused on: Underwater + Music + Real Estate + Fine Art</p>
          <br />

          <ul className="list-inside list-disc">
            <li>Part.107 FAA certified drone pilot</li>
            <li>FII-1 certified freediver</li>
            <li>Certified Open Water SCUBA diver</li>
            <li>Internationally award winning DP</li>
          </ul>
          <br />
          <ul className="list-inside list-disc">
            <li>Filming on: RED</li>
            <li>Stills on: Sony Alpha</li>
            <li>Flying with: Mavic 3</li>
            <li>Diving with: AQUATECH</li>
            <li>location: anywhere (currently my gear is in Houston, TX)</li>
          </ul>
          <br />
          <p>
            Want to capture something unexpected? Find out what the light looks like from another angle? Email me and
            let’s shoot some magic.
          </p>
        </div>
        <div className="flex justify-end">
          <Link to="mailto:light.studies@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="h-20 w-20 dark:stroke-white dark:hover:bg-white dark:hover:stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </Link>

          <Link to="https://www.instagram.com/flip_in_the_water/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="h-20 w-20 p-2 dark:fill-white dark:hover:bg-white dark:hover:fill-black dark:hover:stroke-black"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          {/* <Link to="/">
          <svg
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20"
          >
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)" />
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)" />
          <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)" />
          <path
          d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
          fill="white"
          />
          <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
          fill="white"
          />
          <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
          fill="white"
          />
          <defs>
              <radialGradient
                id="paint0_radial_87_7153"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                >
                <stop stopColor="#B13589" />
                <stop offset="0.79309" stopColor="#C62F94" />
                <stop offset="1" stopColor="#8A3AC8" />
                </radialGradient>
                <radialGradient
                id="paint1_radial_87_7153"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
              >
              <stop stopColor="#E0E8B7" />
              <stop offset="0.444662" stopColor="#FB8A2E" />
              <stop offset="0.71474" stopColor="#E2425C" />
              <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
              </radialGradient>
              <radialGradient
              id="paint2_radial_87_7153"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
              >
              <stop offset="0.156701" stopColor="#406ADC" />
              <stop offset="0.467799" stopColor="#6A45BE" />
              <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
              </radialGradient>
              </defs>
          </svg>
        </Link> */}
        </div>
        <img src={imgURL2} alt="joshua spires" className="flex-1" />
      </div>
    </div>
  );
};

export default AboutPage;
