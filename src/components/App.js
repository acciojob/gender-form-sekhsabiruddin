import React, { useState } from "react";
import "./../styles/App.css";

const Form = () => {
  const [gender, setGender] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [dressSize, setDressSize] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleShirtSizeChange = (event) => {
    setShirtSize(event.target.value);
  };

  const handleDressSizeChange = (event) => {
    setDressSize(event.target.value);
  };

  return (
    <div>
      <h2>Select your gender:</h2>
      <label htmlFor="Male">
        <input
          type="radio"
          id="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={handleGenderChange}
        />
        Male
      </label>
      <label htmlFor="Female">
        <input
          type="radio"
          id="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={handleGenderChange}
        />
        Female
      </label>
      {gender === "Male" && (
        <div>
          <h2>Select your shirt size:</h2>
          <select
            name="shirtSize"
            id="shirtSize"
            value={shirtSize}
            onChange={handleShirtSizeChange}
          >
            <option value="select">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      )}

      {gender === "Female" && (
        <div>
          <h2>Select your dress size:</h2>
          <select
            name="dressSize"
            id="dressSize"
            value={dressSize}
            onChange={handleDressSizeChange}
          >
            <option value="size" disabled>
              Select Size
            </option>
            <option value="two">2</option>
            <option value="four">4</option>
            <option value="six">6</option>
          </select>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Form />
    </div>
  );
};

export default App;

// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App
