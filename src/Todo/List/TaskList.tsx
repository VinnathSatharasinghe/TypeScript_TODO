import { Checkbox, FontIcon, Stack } from "@fluentui/react";
import TaskListStyle from "./TaskList.style";

interface ITask {
    id: string;
    title: string;
    isfav: boolean  
}

 
const TaskList = () => {

    const tasks: ITask[] = [
    
    {
        id : "1",
        title : "Task 1",
        isfav: true,
    },
    {
        id : "2",
        title : "Task 2",
        isfav: false,
    },
]; 

 const onRenderCall = (task : ITask) => {
    return(
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{ width : "85%"}}>
         <Checkbox />
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
      {tasks.map(onRenderCall)}
    </div>
  );
};

export default TaskList;
