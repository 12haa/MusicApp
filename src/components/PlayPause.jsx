import { BsCheckLg } from "react-icons/bs";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => (
  <div>
    {!isPlaying && activeSong?.title == song.title ? (
      <FaPlayCircle size={35} className="text-gray-300" onClick={handlePause} />
    ) : (
      <FaPauseCircle size={35} className="text-gray-300" onClick={handlePlay} />
    )}
  </div>
);

export default PlayPause;
