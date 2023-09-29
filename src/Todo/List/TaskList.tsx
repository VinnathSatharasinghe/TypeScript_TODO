import { Checkbox, FontIcon, Stack } from "@fluentui/react";
import TaskListStyle from "./TaskList.style";
import { useContext } from "react";
import { ITask } from "../Types";
import { TodoContext } from "./TodoProcider";



 
const TaskList = () => {

   const { activeTasks } = useContext(TodoContext);

    const onRenderCall = (task : ITask) => {
     return(
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{ width : "85%"}}>
         <Checkbox className={TaskListStyle.iconStyle} />
         {task.title}
        </Stack>
        
        <Stack horizontal style={{ width : "15%"}}>
          
          <FontIcon iconName="info" className={TaskListStyle.iconStyle} />
          <FontIcon 
             iconName={task.isfav ? "FavoriteStarFill" : "FavoriteStar"} 
              className={TaskListStyle.iconStyle} />
          <FontIcon iconName="BarChartVerticalEdit" className={TaskListStyle.iconStyle} />
          <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />

        </Stack >
        

        
      </Stack>
      

    );
 };

 
  return (
    <div>
      {activeTasks.map(onRenderCall)}
    </div>
  );
};

export default TaskList;
