import "react-toastify/dist/ReactToastify.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { ToDoContext } from "./ToDoContext/ToDoContext";

export const TaskList = () => {
  const {
    task,
    topRightModal,
    setTopRightModal,
    checkedIds,
    toggleOpen,
    handleDelete,
    handleUpdate,
    handleChecked,
    onDeleteAll,
  } = useContext(ToDoContext);

  return (
    <div className="w-[85%]">
      <ul>
        {task.map((taskList) => (
          <li
            key={taskList.id}
            className="border-b-2 flex justify-center py-1 items-center w-full"
          >
            <div className="flex gap-3 w-[100%]">
              <span className="cursor-pointer">
                <input
                  type="checkbox"
                  name="cb"
                  checked={checkedIds.includes(taskList.id)}
                  onChange={() => handleChecked(taskList.id)}
                />
              </span>
              <span
                className={
                  checkedIds.includes(taskList.id)
                    ? "line-through opacity-[0.5]"
                    : "no-underline"
                }
              >
                {taskList.title}
              </span>
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer">
                <FaEdit size={25} onClick={() => handleUpdate(taskList.id)} />
              </span>
              <span className="cursor-pointer" onClick={toggleOpen}>
                <MdDelete size={25} />
              </span>

              <MDBModal
                animationDirection="right"
                open={topRightModal}
                tabIndex="-1"
                setOpen={setTopRightModal}
              >
                <MDBModalDialog position="top-right" side="right">
                  <MDBModalContent>
                    <MDBModalHeader className="bg-danger text-white h-[40px]">
                      <MDBModalTitle>Are you sure?</MDBModalTitle>
                      <MDBBtn
                        color="none"
                        className="btn-close btn-close-white"
                        onClick={toggleOpen}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <div className="row">
                        <div className="col-9">
                          <p>
                            Please Select{" "}
                            <span className="font-bold">{' "'}Ok{'"'}</span> for Delete {' "'}  
                            <span className="font-bold">
                              {taskList.title}{'"'}
                            </span>
                          </p>
                        </div>
                      </div>
                    </MDBModalBody>
                    <MDBModalFooter className="h-[60px] ">
                      <MDBBtn
                        color="danger"
                        onClick={() => {
                          handleDelete(taskList.id,taskList.title);
                          toggleOpen();
                        }}
                      >
                        Ok
                      </MDBBtn>
                      <MDBBtn outline color="info" onClick={toggleOpen}>
                        Close
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </div>
          </li>
        ))}
      </ul>
      {task.length == 0 ? <div>{null}</div> :<div className="flex justify-center mb-4">
        <MDBBtn color="danger" onClick={onDeleteAll}>
          Delete All
        </MDBBtn>
      </div>}
    </div>
  );
};
