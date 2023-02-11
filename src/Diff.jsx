import React, { useState } from "react";

import data from "./assets/data/json1.json";
import data2 from "./assets/data/json2.json";

const Diff = () => {
  const [result, setResult] = useState(false);
  const compare = () => {
    setResult(typeof data === "object" && typeof data2 === "object");
  };
  return (
    <>
      <div className="m-4 ">
        <h1 className="font-bold text-3xl text-center text-green-600">
          Difference Checker
        </h1>

        <div className="grid grid-cols-2 justify-center items-center mx-14">
          <div className=" flex flex-col">
            <h2 className="font-bold text-2xl text-center">JSON FILE 1</h2>
            <div className="h-[50vh] m-2 bg-white border-2 border-gray-6-0 p-1">
              {data &&
                data.map((record) => {
                  return (
                    <div key={record.id}>
                      <strong className="font-bold">{record.title}</strong>{" "}
                      <br />
                      <p>{record.content}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className="font-bold text-2xl text-center">JSON FILE 2</h2>
            <div className="h-[50vh] m-2 bg-white border-2 border-gray-6-0 p-1">
              {data2 &&
                data2.map((record2) => {
                  return (
                    <div key={record2.id}>
                      <strong className="font-bold">{record2.title}</strong>{" "}
                      <br />
                      <p>{record2.content}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 flex-col">
          <button
            className="font-bold bg-green-700 p-2 rounded-lg text-white "
            onClick={compare}
          >
            COMPARE
          </button>

          {result && (
            <h2 className="font-bold mt-2 text-xl">
              Both JSON FILES ARE OBJECT
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Diff;
