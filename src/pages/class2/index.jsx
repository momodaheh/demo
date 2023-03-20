import React from "react";
import MyFirstComponent from "../../components/my_first_components/indes";
import MyTwoComponent from "../../components/my_two_components";
function class2() {
  return (
    <div>
      <MyFirstComponent propsName={"propsName"} />
      <MyTwoComponent propsName={"propsName 1"} />
    </div>
  );
}
export default class2;