import "./App.css";
import { Text } from "./components";
import React, { useRef } from "react";

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return (
    <em style={{ background: "yellow", color: "black", fontSize: "40px" }}>
      {children}
    </em>
  );
};

function App() {
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <div className="App">
      <Text ref={ref} color="violet" style={{ backgroundColor: "black" }}>
        hello
      </Text>
      <Text as={"h2"}>hello</Text>
      <Text>hello</Text>
      <Text>sdf</Text>
      <br />
      <Text as={Emphasis}>This is important. You are awesome!!!</Text>
    </div>
  );
}

export default App;
