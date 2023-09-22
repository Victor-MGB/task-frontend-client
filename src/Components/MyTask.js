import React,{useState,useEffect} from 'react'
import "../Styles/MyTask.css"

function MyTask() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        const newValue = prevValue + 1;

        return newValue > 100 ? 0 : newValue;
      });
    }, 1000); 
    return () => clearInterval(interval); 
  }, []);
  return (
    <>
      <section className="teamContainer1">
        <h1>MY TASK</h1>

        <div className="performance">
          <div className="perfText">
            <div className="recently">Recently</div>
            <div
              style={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              Today
            </div>
            <div
              style={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              Upcoming
            </div>
            <div
              style={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              Later
            </div>
          </div>
        </div>

        <div className="fourTeam">
          <h1>Lorem ipsum dolor sit amet</h1>

          <div className="coonection">
            <div>
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000"
                alt=""
              />
            </div>
          </div>

          <div className="range">
            
          </div>
        </div>

        <div>
          <div className="progress">
            <h2>Progress</h2> <p> {value}%</p>
          </div>
          <input
            className="range"
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
          />
        </div>
      </section>
    </>
  );
}

export default MyTask