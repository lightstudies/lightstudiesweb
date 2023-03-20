import { ResponsivePlayer } from "../components";

const VideoPageCommercial = () => {
  return (
    <div>
      <div className="text-3xl">commercial</div>
      <ResponsivePlayer url="https://player.vimeo.com/video/658219702" className="pt16x9" controls />
      <ResponsivePlayer url="https://player.vimeo.com/video/739857861" className="pt16x9" controls />
      <ResponsivePlayer url="https://player.vimeo.com/video/395066163" className="pt16x9" controls />
      <ResponsivePlayer url="https://player.vimeo.com/video/43399308" className="pt16x9" controls />
      <ResponsivePlayer url="https://player.vimeo.com/video/454528916" className="pt16x9" controls />
    </div>
  );
};

export default VideoPageCommercial;
