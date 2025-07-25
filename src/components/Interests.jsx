const Interests = ({ data, setData }) => {
  const { interests } = data;

  const handleInterests = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  // console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleInterests}
          />
          Coding
        </label>

        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleInterests}
          />
          Music
        </label>

        <label>
          <input
            type="checkbox"
            name="singing"
            checked={interests.includes("singing")}
            onChange={handleInterests}
          />
          Singing
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="football"
            checked={interests.includes("football")}
            onChange={handleInterests}
          />
          Football
        </label>

        <label>
          <input
            type="checkbox"
            name="chess"
            checked={interests.includes("chess")}
            onChange={handleInterests}
          />
          Chess
        </label>

        <label>
          <input
            type="checkbox"
            name="puzzles"
            checked={interests.includes("puzzles")}
            onChange={handleInterests}
          />
          Puzzles
        </label>
      </div>
    </div>
  );
};

export default Interests;
