const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleTheme = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleTheme}
          />
          Light
        </label>

        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleTheme}
          />
          Dark
        </label>
      </div>
    </div>
  );
};

export default Settings;
