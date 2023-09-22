import React,{useState,useEffect} from "react";
import AddTask from "./AddTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Project.css";

function Project() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Create an audio reference
  const audioRef = React.createRef();

  useEffect(() => {
    // Load the audio file when the component mounts
    audioRef.current.src = "";
  }, []);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);

    // Play the audio when pausing
    if (!isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <section>
      <>
        <div className="project-container">
          <div className="project-text">
            <h3>Project Time Tracker</h3>
            <p>You can start tracking</p>
          </div>

          <div className="my-component-font">
            <FontAwesomeIcon
              icon={isPlaying ? faPause : faPlay}
              className={isPlaying ? "paused" : "playing"}
              onClick={handleTogglePlay}
            />
          </div>
        </div>

        <audio ref={audioRef} />
      </>

      <AddTask/>
    </section>
  );
}

export default Project;
