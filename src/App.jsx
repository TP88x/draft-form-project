import { useState } from "react";
import { Form } from "./Form";
import { Activity } from "./Activity";

function App() {
  const test = [
    {
      id: 1,
      type: "Run",
      name: "อยากผอม",
      descrition: "ออกกำลังกายกันเถอะ",
      startdate: "2023-09-01",
      enddate: "2023-09-03",
      time: 60,
      weight: 60,
    },
  ];
  const [activity, setActivity] = useState(test);
  const Data = (newData) => {
    setActivity((prevItem) => {
      return [newData, ...prevItem];
    });
  };
  console.log(activity)
  return (
    <>
      <Form Data={Data} />
      {activity.map((item) => (
        <Activity
          key={item.id}
          type={item.type}
          name={item.name}
          descrition={item.descrition}
          startDate={item.startdate}
          endDate={item.enddate}
          time={item.time}
          weight={item.weight}
        />
      ))}
    </>
  );
}

export default App;
