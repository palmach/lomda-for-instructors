// Answers

import React, { useEffect, useRef } from "react";
import "./Answers.css";
import gsap from "gsap";

function Answers(props) {
  const colorRef = useRef();

  useEffect(() => {
    if (!props.isAnswerd) {
      gsap.to(colorRef.current, { backgroundColor: "#ffffff5c" });      // setCurrQuestion(0);
    }

  }, [props.isAnswerd]);

  const answerQuestion = () => {
    if (props.ansNum === Number(props.corectAns)) {
      props.setIsAnswerd(true);
      gsap.to(colorRef.current, { backgroundColor: "#3cce4a" });
    } else {
      gsap.to(colorRef.current, { backgroundColor: "#e83442" });
    }
  };

  return (
    <div
      className={`answers normal-text ${props.answerClass}`}
      onClick={answerQuestion}
      ref={colorRef}
    >
      {props.cont}
    </div>
  );
}

export default Answers;
