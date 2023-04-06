import React from "react";

export const TextField = ({
  style = {},
  props = {},
}: {
  style: any;
  props: any;
}) => {
  return (
    <h1 style={style} {...props} className="w-full h-full">
      {props?.value || "Text "}
    </h1>
  );
};

export const TextInput = ({
  style = {},
  props = {},
}: {
  style: any;
  props: any;
}) => {
  return <input style={style} {...props} className="w-full h-full"></input>;
};

export default TextField;
