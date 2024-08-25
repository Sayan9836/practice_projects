import React, { useEffect, useState } from "react";
import PasGen from "./aplications/passwordGenerator/pasGenTwo/PasGen";
// import Sheet from "./aplications/google-sheet/Sheet";
// import TodoList from "./aplications/Todolist2/TodoList";
// import Memo from "./components/small_practice/Memo";
// import "./App.css";
// import Infinite3 from "./components/infinite/Infinite3";
// import ProgressBar from "./components/progressBar/ProgressBar";
// import useAuth from "./hooks/useAuth";
// import CountOne from "./pages/CountOne";
// import CountTwo from "./pages/CountTwo";
const App = () => {
  // const { isAuthorize } = useAuth();
  const [state, setState] = useState();

  useEffect(() => {
    console.log("app");
  }, []);
  return (
    <div className="app">
      {/* <Fetching/> */}
      {/* <Index /> */}
      {/* <Index2 /> */}
      {/* <Infinite2 /> */}
      {/* <Infinite /> */}
      {/* <DropDown /> */}
      {/* <DropDown2 /> */}
      {/* <Nested folderData={folderData} /> */}
      {/* <Sidebar/> */}
      {/* <Clock /> */}
      {/* <EmployeeList/> */}
      {/* <ToastContainer />*/}
      {/* <PasGen /> */}
      {/* <ProgressBar /> */}
      {/* <TodoList/> */}
      {/* <Calculator/> */}
      {/* <SortFilter/> */}
      {/* <Infinite2 /> */}
      {/* <Infinite4 /> */}
      {/* <DataFetching /> */}
      {/* <Index3 /> */}
      {/* <Form /> */}
      {/* <LandingOne /> */}
      {/* <Sheet /> */}
      {/* <TodoList /> */}
      {/* <Memo /> */}
      {/* <Infinite3 /> */}
      {/* <CountOne />
      <CountTwo /> */}
      {/* <PasGen /> */}
      <PasGen />
    </div>
  );
};

export default App;
