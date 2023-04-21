import imgURL from '../assets/about-joshua-spires-wide.jpg';
// import imgURL2 from '../assets/about-joshua-spires-wide-bottom.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex flex-1 flex-col flex-wrap">
      <div className="md:flex-column flex flex-col justify-center">
        <img src={imgURL} alt="joshua spires camera" className="flex-1 pb-4" />
        <div className="flex justify-center gap-4 py-2">
          <Link to="mailto:light.studies@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="h-10 w-10 dark:stroke-white dark:hover:bg-white dark:hover:stroke-black sm:h-16 sm:w-16"
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
              className="h-10 w-10 p-2 dark:fill-white dark:hover:bg-white dark:hover:fill-black dark:hover:stroke-black sm:h-16 sm:w-16"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
        </div>
        <div className="py-2 px-4 text-center font-default-sans text-lg sm:text-2xl xl:px-0">
          <p>Hi! My name is Josh Spires</p>
          <br />
          <p>Photographer + Cinematographer</p>
          <br />
          <p>Abstract Portraits + Underwater + Music + Real Estate + Fine Art</p>
          <br />
          <p>Shooting professionally since 2008</p>
          <br />
          <p>Located: Anywhere (currently my gear is in Houston, TX)</p>
          <br />

          <ul>
            <li>– Part.107 FAA certified drone pilot –</li>
            <li>– FII-1 certified freediver –</li>
            <li>– Certified Open Water SCUBA diver –</li>
            <li>– Internationally award winning DP –</li>
          </ul>
          <br />
          <ul>
            <li>– Filming on: RED –</li>
            <li>– Stills on: Sony Alpha –</li>
            <li>– Flying with: Mavic 3 –</li>
            <li>– Diving with: AQUATECH –</li>
          </ul>
          <br />
          <p>
            Seeking to capture something unexpected? See how the light looks from another angle?
            <br />
            Message me and together we will shoot some magic.
          </p>
        </div>
        {/* <img src={imgURL2} alt="joshua spires" className="flex-1" /> */}
      </div>
    </div>
  );
};

export default AboutPage;
