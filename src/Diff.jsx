import React, { useState } from "react";

const Diff = () => {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [submit, setSubmit] = useState(false);
  let obj1 = {};
  let obj2 = {};
  let obj1Keys = [];
  let obj2Keys = [];
  let matchedKeys = [];
  let matchedValuesForKeys = [];
  let similarValues = [];
  const [samekeys, setSamekeys] = useState([]);
  const [samekeyvalue, setSamekeyvalue] = useState([]);
  const [samevalue, setSameValue] = useState([]);

  const inputHandler = (event) => {
    event.preventDefault();
    setSubmit(true);
    try {
      obj1 = JSON.parse(input1);
      obj2 = JSON.parse(input2);

      for (const [keys] of Object.entries(obj1)) {
        obj1Keys = [...obj1Keys, keys];
      }

      for (const [keys] of Object.entries(obj2)) {
        obj2Keys = [...obj2Keys, keys];
      }

      obj1Keys.filter((obj1Key) => {
        obj2Keys.filter((obj2Key) => {
          if (obj1Key === obj2Key) {
            matchedKeys = [...matchedKeys, obj1Key];
          }
        });
      });

      matchedKeys = [...new Set(matchedKeys)];
      setSamekeys(matchedKeys);
      // ********************

      matchedKeys.filter((key) => {
        if (obj1[key] === obj2[key]) {
          matchedValuesForKeys = [...matchedValuesForKeys, key];
        }
      });

      //********* */
      setSamekeyvalue(matchedValuesForKeys);
      matchedValuesForKeys.filter((key) => {
        similarValues = [...similarValues, obj1[key]];
      });

      setSameValue(similarValues);
    } catch (error) {
      console.error(error);
    }
  };

  //
  // };

  const input1Handler = (event) => {
    setinput1(event.target.value);
  };
  const input2Handler = (event) => {
    setinput2(event.target.value);
  };

  // ********************************

  return (
    <>
      <div className="m-4 ">
        <h1 className="font-bold text-3xl text-center text-green-700">
          Compare JSON Files
        </h1>

        <div className="grid md:grid-cols-2 md:justify-center items-center md:mx-14">
          <div className=" flex flex-col">
            <h2 className="font-bold text-2xl text-center pt-5">JSON FILE 1</h2>
            <div className="h-[50vh] m-2 bg-white border-2 border-gray-6-0 p-1">
              <textarea
                type="text"
                placeholder="Paste Your Content ...."
                className=" p-1 focus:outline-none w-full h-full"
                value={input1}
                onChange={input1Handler}
              />
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className="font-bold text-2xl text-center pt-5">JSON FILE 2</h2>
            <div className="h-[50vh] m-2 bg-white border-2 border-gray-6-0 p-1">
              <textarea
                type="text"
                placeholder="Paste Your Content ...."
                className=" p-1 focus:outline-none w-full h-full"
                value={input2}
                onChange={input2Handler}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 flex-col">
          <button
            className="font-bold bg-green-700 p-2 rounded-lg text-white "
            onClick={inputHandler}
          >
            COMPARE
          </button>
        </div>

        {submit && samekeys.length > 0 ? (
          <div className=" md:mx-16 flex flex-col">
            {" "}
            <h1 className="font-bold text-3xl pb-4 text-center md:text-left mt-4">
              Result
            </h1>
            <h2 className="text-xl md:text-2xl font-bold pb-4">
              Following are the same keys in both objects: &nbsp;
              <span className="font-normal text-xl">
                {samekeys.join(" , ")}
              </span>
            </h2>
            <h2 className="text-xl md:text-2xl font-bold pb-4">
              Following Keys contain same values in the two JSON Files: &nbsp;
              <span className="font-normal text-xl">
                {samekeyvalue.join(" , ")}
              </span>
            </h2>
            <h2 className="text-xl md:text-2xl font-bold py-4 px-1 bg-green-200">
              Similar Values are: &nbsp;
              <span className="font-normal text-xl">
                {samevalue.join(" , ")}
              </span>
            </h2>
          </div>
        ) : (
          <div className="flex justify-center">
            <h2 className="font-bold mx-16 text-4xl bg-green-300 p-3 mt-4">
              BOTH FILES ARE DIFFERENT
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Diff;
