'use client'; // Add this line at the top

import { FC } from "react";

const staticNum: number = 5;

type gender = "male" | "female" | "LGBQ";
interface Props {
  initVal: number;
  gender: gender;
}

interface Person {
  Firstname: string;
  LastName: string;
  Age: number;
  Single: boolean;
}
const person: Person = {
  Firstname: "หล่อเท่",
  LastName: "แอมน่ารักที่สุดในห้อง",
  Age: 20,
  Single: false
};

const Basic: FC<Props> = ({ initVal, gender }) => {
  const verifyGender = (gender: gender) => {
    if (gender === "female") console.log(gender);
    else console.log("Not Female");
  };
  return (
    <>
      <p>Basic</p>
      <div>{staticNum}</div>
      <div>{person.Firstname}</div>
      <div>{person.LastName}</div>
      <div>{person.Age}</div>
      <div>{person.Single}</div>
      <div>{initVal}</div>
      <div>{gender}</div>
      <button>Add</button>
      <button onClick={() => verifyGender(gender)}>gender</button> 
    </>
  );
  Basic.defaultProps = {
    initVal: 0,
    gender: "female"
  };
};

export default Basic;
