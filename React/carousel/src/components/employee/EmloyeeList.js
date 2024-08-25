import React, { useEffect, useState } from "react";
// import { EmpData } from '../../Data'
import pic from "../assests/Photograph1.jpg";
import pic2 from "../assests/pic2.jpg";
import "./emp.css";
import Form from "./Form";
const EmloyeeList = () => {
  const EmpData = [
    {
      id: "1",
      name: "sayan",
      img: `${pic}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "2",
      name: "Rahul",
      img: `${pic2}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "3",
      name: "Akash",
      img: `${pic}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "4",
      name: "Arghya",
      img: `${pic2}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "5",
      name: "soumojoy",
      img: `${pic}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "6",
      name: "soumyadeep",
      img: `${pic2}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "7",
      name: "sougata",
      img: `${pic}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "8",
      name: "souradeep",
      img: `${pic2}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "9",
      name: "subhayan",
      img: `${pic}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
    {
      id: "10",
      name: "Raj",
      img: `${pic2}`,
      Age: "24",
      position: "executive",
      DOB: "1/2/2001",
      email: "abc@gmail.com",
    },
  ];

  const [currEmp, setCurrEmp] = useState(EmpData[0]);
  const [open, setOpen] = useState(false);
  const { name, img, Age, position, DOB, email } = currEmp;

  return (
    <>
      <div className="box">
        <div>
          <ul>
            {EmpData?.map((ele) => {
              return <li onClick={() => setCurrEmp(ele)}>{ele.name}</li>;
            })}
          </ul>
        </div>
        <div>
          <img src={img} alt="" height={100} width={100} />
          <div>
            <h3>{name}</h3>
            <div>{email}</div>
            <div>{position}</div>
            <div>{Age}</div>
            <div>{DOB}</div>
          </div>
        </div>
      </div>
      <div className="form_button">
        <button onClick={() => setOpen(!open)}>Add Employee</button>
      </div>

      {open && <Form EmpData={EmpData} />}
    </>
  );
};

export default EmloyeeList;
