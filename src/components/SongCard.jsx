import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CoverImage from "../assets/Cover_image.png";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  // const activeSong = "Test";
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(true));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(false));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50  group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isplaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />{" "}
        </div>
        <img alt="song_img" src={CoverImage} className="w-full h-56" />
      </div>
      <div className="mt-4 flex flex-col ">
        <p className="font-semibold text-lg text-white whitespace-nowrap overflow-hidden text-ellipsis ">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis  text-gray-300 mt-1">
          <Link
            to={song.artist_id ? `/artists/${song?.artist_id}` : "/top-artists"}
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
