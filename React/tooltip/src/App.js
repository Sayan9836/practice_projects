import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToolTip from "./components/tooltip/ToolTip";

function App() {
  const [homeHover, setHomeHover] = useState(false);
  const [serviceHover, setServiceHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li
              onMouseOver={() => setHomeHover(true)}
              onMouseOut={() => setHomeHover(false)}
            >
              <span>Home</span>

              {homeHover && <ToolTip hover={"Home"} />}
            </li>

            <li
              onMouseOver={() => setServiceHover(true)}
              onMouseOut={() => setServiceHover(false)}
            >
              <span>services</span>
              {serviceHover && <ToolTip hover={"services"} />}
            </li>

            <li
              onMouseOver={() => setContactHover(true)}
              onMouseOut={() => setContactHover(false)}
            >
              <span>contact</span>
              {contactHover && <ToolTip hover={"contact"} />}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
