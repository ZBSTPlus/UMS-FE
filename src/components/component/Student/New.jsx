import React from "react";

export default function New(props) {
  const handler = (e) => {
    let temp = props.ans === e.target.value ? 1 : 0;

    props.changeHandler(temp, props.index);
  };
  return (
    <div>
      <div className="border-b border-gray-200 pb-6" id={props.id}>
        <h2 className="text-2xl font-bold">Question {props.index + 1}</h2>
        <p className="mt-4 text--600black font-semibold" name={props.index}>
          {props.question}
        </p>
        <div className="mt-8 flex flex-col" onChange={handler}>
          <div className="bg-[#ECF0F1] p-3 rounded-md">
            <input type="radio" name={props.index} value="1" />
            &nbsp;
            <label>{props.option1}</label>
          </div>
          <br />
          <div className="bg-[#ECF0F1] p-3 rounded-md">
            <input type="radio" name={props.index} value="2" />
            &nbsp;
            <label>{props.option2}</label>
          </div>

          <br />
          <div className="bg-[#ECF0F1] p-3 rounded-md">
            <input type="radio" name={props.index} value="3" />
            &nbsp;
            <label>{props.option3}</label>
          </div>

          <br />
          <div className="bg-[#ECF0F1] p-3 rounded-md">
            <input type="radio" name={props.index} value="4" />
            &nbsp;
            <label>{props.option4}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
