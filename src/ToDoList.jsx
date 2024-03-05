import { MDBBtn } from "mdb-react-ui-kit";
import { TaskList } from "./TaskList";
import { useContext } from "react";
import img from "./assets/img.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToDoContext } from "./ToDoContext/ToDoContext";

export const ToDoList = () => {
  const {
    activity,
    setActivity,
    update,
    handleAdd,
    handleUpdate1,
    handleKeyDown,
  } = useContext(ToDoContext);

  return (
    <>
    <div className="w-full flex justify-center font-serif text-[green] bg-[#d9d3c7]">
      <h1>
        To Do List
      </h1>
    </div>
    <div className="min-h-[100vh] bg-[#edecee] sm:flex">
      <div className="sm:w-1/2  sm:h-full h-full">
        <div className="sm:w-3/5 sm:mx-auto sm:mt-[10%] sm:h-2/3 rounded-[10px]">
          <img src={img} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="sm:w-1/2">
        <div className="sm:w-3/5 w-[90%] mx-auto mt-[14%] bg-[#e8e0ea] sm:min-h-[50vh] min-h-[1/2] rounded-[10px]">
          <div className="flex flex-col items-center ">
            <h3 className="mt-[10px] mb-[30px] font-sans">To Do List</h3>
            <input
              type="text"
              className="w-[80%] h-[35px] rounded-md p-2 bg-[#dff3fc] mb-[20px]"
              name="task"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              autoComplete="off"
              onKeyDown={handleKeyDown}
            />
            {update ? (
              <div className="w-[80%]">
                <MDBBtn className="w-full mb-[30px]" onClick={handleAdd}>
                  Add
                </MDBBtn>
              </div>
            ) : (
              <div className="w-[80%]">
                <MDBBtn className="w-full mb-[30px]" onClick={handleUpdate1}>
                  Update
                </MDBBtn>
              </div>
            )}
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition:Bounce
            />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
