import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Finance.css";

function Finance() {
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
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
      <section className="financeComponen">
        <div className="threeDots">
          <div className="finance">
            <h3
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              Finance App
            </h3>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faEllipsisV}
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                fontStyle: "normal",
              }} className='icon'
            />
          </div>
        </div>

        <div className="branding">
          <h3
            style={{
              color: "gray",
              fontSize: "15px",
              fontWeight: "bold",
              fontStyle: "normal",
            }}
          >
            Branding and mobile App developement
          </h3>

          <div className="brandIma">
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
        </div>

        <div>
          <div className="progresss">
            <h2>Progress</h2> <p> {value}%</p>
          </div>
          <input
            className="rangee"
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

export default Finance