import React, { createContext, useState } from 'react'
import HomeStyle from './Home.style'
import TodoString from "./String.json"
import { Label, Pivot, PivotItem, Stack } from '@fluentui/react'
import { PivotKeysEnum, ITask } from './Types'
import TaskList from './List/TaskList'

import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

export const TodoContext = createContext<{ activeTasks: ITask[]}>({ 
  activeTasks: [],
});

const Home = () => {
   const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);


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
    {
      id : "3",
      title : "Task 3",
      isfav: true ,
    },
  ]; 

  return ( 
    <Stack className={HomeStyle.todoContainer}>

      <TodoContext.Provider value={{ activeTasks : tasks }}>
      <header className={HomeStyle.headerStyle}>
            <h2>{TodoString.header}</h2>
        </header>

        {/* <Pivot selectedKey={String(1)} styles={{ root : {display: "flex", justifyContent: "Center" } }}> */}

        <Stack className={HomeStyle.pivotContainer}>
         <Pivot 
             selectedKey={String(selectedKey)} 
             styles={{ root : HomeStyle.pivotRoot}}
             onLinkClick={(item?: PivotItem) => {
                setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);

        }}
        >
        <PivotItem headerText={TodoString.pivots.tasktab} itemKey={PivotKeysEnum.Tasks}>
          <TaskList/>
        </PivotItem>
        <PivotItem headerText={TodoString.pivots.taskFormTab} itemKey={PivotKeysEnum.TasksForm}>
          <Label>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText={TodoString.pivots.completedTaskTab} itemKey={PivotKeysEnum.CompletedTasks}>
          <Label>Pivot #3</Label>
        </PivotItem>
      </Pivot>
     </Stack>

      </TodoContext.Provider>
        
   
    </Stack>

  )
}

export default Home
