import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [activity, setActivity] = useState("");
  const [task, setTask] = useState([]);
  const [update, setUpdate] = useState(true);
  const [edit, setEdit] = useState(null);
  const [topRightModal, setTopRightModal] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);
  const toggleOpen = () => setTopRightModal(!topRightModal);

  const handleDelete = (id,title) => {
    setTask(task.filter((item) => id !== item.id));
    toast.error(`"${title}" Deleted Successfully!`);
    console.log(title);
  };

  const handleUpdate = (id) => {
    const findItem = task.find((elem) => id === elem.id);
    setActivity(findItem.title);
    setUpdate(false);
    setEdit(id);
  };

  const handleChecked = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const onDeleteAll = () => {
    if (task.length === 0) {
      toast.info("No Task Exists!");
    } else {
      setTask([]);
      toast.error("All Tasks Deleted!");
    }
  };

  const handleAdd = () => {
    const allActivity = { id: uuidv4(), title: activity };
    if (activity.trim().length >= 2) {
      setTask([...task, allActivity]);
      setActivity("");
      toast.success(`"${activity}" Added Successfully!`);
    } else {
      toast.error("Task should have a minimum of two characters!");
    }
  };
  
  const handleUpdate1 = () => {
    if (!update) {
      setTask(
        task.map((newElem) => {
          if (newElem.id === edit) {
            return { ...newElem, title: activity };
          }
          return newElem;
        })
      );
      toast.info(`"${activity}" Updated Successfully!`);
      setActivity("");
    } else {
      const allActivity = { id: uuidv4(), title: activity };
      if (activity.trim().length >= 2) {
        setTask([...task, allActivity]);
        setActivity("");
        toast.success(`"${activity}" Added Successfully!`);
      } else {
        toast.error("Task should have a minimum of two characters!");
      }
    }
    setUpdate(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (update) {
        handleAdd();
      } else {
        handleUpdate();
      }
    }
  };

  const allValue = {
    activity,
    setActivity,
    task,
    setTask,
    update,
    setUpdate,
    edit,
    setEdit,
    topRightModal,
    setTopRightModal,
    checkedIds,
    setCheckedIds,
    toggleOpen,
    handleDelete,
    handleUpdate,
    handleChecked,
    onDeleteAll,
    handleAdd,
    handleUpdate1,
    handleKeyDown,
  };
  return (
    <ToDoContext.Provider value={allValue}>{children}</ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
