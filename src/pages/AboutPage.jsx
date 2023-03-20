import imgURL from '../assets/about-joshua-spires-wide.jpg';

const AboutPage = () => {
  return (
    <div className="flex flex-1 flex-col flex-wrap">
      <div className="md:flex-column flex flex-col justify-center">
        <img src={imgURL} alt="joshua spires" className="flex-1" />
        <div className="w-full flex-1 text-9xl">hi</div>
        <div className="text-3xl">my name is josh.</div>
        {/* <img src={imgURL} alt="joshua spires" className="flex-1" /> */}
        {/* <img src={imgURL} alt="joshua spires" className="flex-1" /> */}
      </div>
    </div>
  );
};

export default AboutPage;
