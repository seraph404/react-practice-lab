import { useState, useEffect } from "react";

function ToggleTheme() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  function toggleMode() {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div>
      <h1>Welcome to this webpage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec cursus
        massa. Aliquam id turpis sit amet tellus sodales vulputate in in eros.
        Ut porta pretium nunc, pharetra cursus turpis rhoncus eget. Nam quis
        mattis dolor. Praesent neque mi, venenatis eu gravida nec, bibendum
        vitae urna. Donec faucibus nisl tristique erat varius, id pellentesque
        augue scelerisque. Fusce ornare, neque eu tempor cursus, arcu magna
        commodo quam, sed euismod odio lacus vel leo.{" "}
      </p>
      <p>
        Etiam neque nunc, egestas nec mollis vitae, laoreet sed arcu. Mauris
        fermentum consequat urna a tempus. Nam euismod mi ante, at iaculis
        sapien viverra at. Quisque cursus ultrices leo eget accumsan. Sed nisl
        est, consectetur vel iaculis sed, eleifend quis ante. Quisque luctus
        neque sit amet ante lobortis sagittis. Sed commodo sollicitudin mi, eu
        egestas nulla commodo vitae. Curabitur euismod molestie pretium. Nam
        venenatis bibendum eros, a fringilla urna laoreet ac. Morbi posuere in
        ipsum non sodales. Nunc et rhoncus ante, quis facilisis diam.{" "}
      </p>
      {mode === "dark" ? (
        <button onClick={toggleMode}>Light Mode</button>
      ) : (
        <button onClick={toggleMode}>Dark Mode</button>
      )}
    </div>
  );
}

export default ToggleTheme;
