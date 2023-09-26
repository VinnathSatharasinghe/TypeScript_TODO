import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";


interface ITaskListStyle{
    taskItem : IStyle;
    iconStyle: IStyle;

}

const TaskListStyle: IProcessedStyleSet<ITaskListStyle> = mergeStyleSets({
    taskItem: {
        maxHeight: 50,
        minHeight: 50,
        padding: 5,
        width: "90%",
        backgroundColor:"lavender",
        selectors: {
            "&:hover": { background: "rgb(446, 44, 241)" },
        },
        margin: 45,
        marginLeft: 12,
        display: "flex",
        aligenItem: "center",
        boxShadow:
         "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px",

    },
    iconStyle: {

        fontSize: 20,
        margin: '0 3px',
        selectors: {
            "&:hover": { cursor: "pointer" },
        },
    },

    

});

export default TaskListStyle;