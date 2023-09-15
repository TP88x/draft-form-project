import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ Data }) => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [descrition, setDescrition] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [time, setTime] = useState(0);
  const [weight, setWeight] = useState(0);

  const saveData = (event) => {
    event.preventDefault();
    const newData = {
      id: uuidv4(),
      type: type,
      name: name,
      descrition: descrition,
      startdate: startdate,
      enddate: enddate,
      time: parseInt(time),
      weight: parseFloat(weight),
    };
    setType();
    setName("");
    setDescrition("");
    setTime(0);
    setStartdate("");
    setEnddate("");
    setWeight(0);
    Data(newData);
    console.log(newData);
  };
  return (
    <>
      <div className="bg-gray-500 min-h-screen flex items-center text-lg">
        <form onSubmit={saveData} className="p-10 mx-auto rounded">
          <div className="shadow">
            <div className="flex items-center bg-gray-400 rounded-t-lg border-gray-500 border-b">
              <label
                htmlFor="activity-type"
                className="w-36 text-right mr-8 p-4 text-blank-200"
              >
                Activity type
              </label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Run"
                name="type"
                onChange={(e) => setType(e.target.value)}
                required
              />
              <label className="text-blank m-1">Run</label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Yoga"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="text-blank m-1">Yoga</label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Aerobics"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="text-blank m-1">Aerobics</label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Muaythai"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="text-blank m-1">Kita Muaythai</label>
              <input
                type="radio"
                className="h-4 w-4"
                value="Training"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="text-blank m-1 mr-3">Weight training</label>
            </div>

            <div className="flex items-center bg-gray-400 border-gray-500 border-b">
              <label
                htmlFor="name"
                className="w-36 text-right mr-8 p-4 text-blank-200"
              >
                Activity Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="ชื่อกิจกรรม"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-black bg-gray outline-none text-white overflow-ellipsis overflow-hidden"
                required
              />
            </div>

            <div className="flex items-center bg-gray-400 border-gray-500 border-b">
              <label
                htmlFor="descrition"
                className="w-36 text-right mr-8 p-4 text-blank-200"
              >
                Descrition
              </label>
              <textarea
                value={descrition}
                onChange={(e) => setDescrition(e.target.value)}
                id="descrition"
                name="descrition"
                rows="2"
                cols="10"
                wrap="hard"
                placeholder="รายละเอียดกิจกรรม"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-black  outline-none text-white overflow-ellipsis overflow-hidden"
              />
            </div>

            <div className="flex items-center bg-gray-400 border-gray-500 border-b">
              <label
                htmlFor="date"
                className="w-36 text-right mr-8 p-4 text-blank-200"
              >
                Targer Date
              </label>
              <span className="mr-2">Start Date</span>
              <input
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                type="date"
                name="date"
                id="date"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-black  outline-none text-white overflow-ellipsis overflow-hidden"
                required
              />
              <span className="mr-2">End Date</span>
              <input
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                type="date"
                name="date"
                id="date"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-black  outline-none text-white overflow-ellipsis overflow-hidden"
                required
              />
            </div>

            <div className="flex items-center bg-gray-400 border-gray-500 border-b">
              <label
                htmlFor="duration"
                className="w-36 text-right mr-8 p-4 text-blank-200"
              >
                Duration(min)
              </label>
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="number"
                name="duration"
                id="duration"
                placeholder="Time (minute)"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-black  outline-none text-white overflow-ellipsis overflow-hidden"
                required
              />
            </div>

            <div className="flex items-center bg-gray-400 rounded-b-lg border-gray-500 mb-10">
              <label
                htmlFor="weight"
                className="w-36 text-right p-4 mr-8 text-blank-200"
              >
                Weight(kg)
              </label>
              <input
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                type="number"
                name="weight"
                id="weight"
                placeholder="Current weight"
                className="flex-1 p-4 pl-0 bg-transparent placeholder-black outline-none text-white overflow-ellipsis overflow-hidden"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black block w-full rounded py-4 text-white font-bold shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
