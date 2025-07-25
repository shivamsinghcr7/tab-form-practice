import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import Contact from "./Contact";

//css
import "../styling/tabform.css";
import { useReducer, useState } from "react";

const TabForm = () => {
  const [isActive, setIsActive] = useState(0);
  const [data, setData] = useState({
    name: "Shivam",
    age: "27",
    email: "shivam@gmail.com",
    interests: ["coding", "music", "chess"],
    theme: "light",
  });

  const tabs = [
    {
      name: "Profile",
      url: "/profile",
      component: Profile,
    },
    {
      name: "Interest",
      url: "/interest",
      component: Interests,
    },
    {
      name: "Contact",
      url: "/contact",
      component: Contact,
    },
    {
      name: "Settings",
      url: "/settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[isActive].component;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    alert("Submitted");
  };

  const handleNextClick = () => {
    setIsActive((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setIsActive((prev) => prev - 1);
  };

  const handleClearBtn = () => {
    setData((prevState) => ({
      ...prevState,
      name: "",
      age: "",
      email: "",
      interests: [],
      theme: "light",
    }));
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            className="heading-container-tabs"
            key={index}
            onClick={() => setIsActive(index)}
          >
            {tab.name}
          </div>
        ))}

        <button className="clear-btn" onClick={handleClearBtn}>
          Clear
        </button>
      </div>
      <div
        className="tab-body"
        style={
          data.theme === "light"
            ? { background: "#e5beff", color: "black" }
            : { background: "grey", color: "white" }
        }
      >
        <ActiveTabComponent data={data} setData={setData} />

        <div className="prev-next-btn">
          {isActive !== 0 && isActive <= tabs.length - 1 && (
            <button onClick={handlePrevClick}>Previous</button>
          )}

          {isActive >= 0 && isActive <= tabs.length - 2 && (
            <button onClick={handleNextClick}>Next</button>
          )}
        </div>
        <div className="submit-btn">
          {isActive === tabs.length - 1 && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabForm;
