import { Checkbox, FontIcon, Stack } from "@fluentui/react";
import TaskListStyle from "./TaskList.style";
import { useContext } from "react";
import { ITask } from "../Types";
import { TodoContext } from "./TodoProvider";

const TaskList = () => {
  const { activeTasks } = useContext(TodoContext);

  const onRenderCall = (tasks: ITask) => {
    return (
      <Stack horizontal key={tasks.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{ width: "85%" }}>
          <Checkbox className={TaskListStyle.iconStyle} />
          {tasks.title}
        </Stack>

        <Stack horizontal style={{ width: "15%" }}>
          <FontIcon iconName="info" className={TaskListStyle.iconStyle} />
          <FontIcon
            iconName={tasks.isFav ? "FavoriteStarFill" : "FavoriteStar"}
            className={TaskListStyle.iconStyle}
          />
          <FontIcon
            iconName="BarChartVerticalEdit"
            className={TaskListStyle.iconStyle}
          />
          <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
        </Stack>
      </Stack>
    );
  };

  return <div>{activeTasks.map(onRenderCall)}</div>;
};

export default TaskList;
