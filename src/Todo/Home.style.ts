import { mergeStyleSets } from "@fluentui/react";
import { IProcessedStyleSet, IStyle } from "@fluentui/react/lib/Styling";

interface IHomeStyle {
  todoContainer: IStyle;
  headerStyle: IStyle;
  pivotRoot: IStyle;
  pivotContainer: IStyle;
}

const HomeStyle: IProcessedStyleSet<IHomeStyle> = mergeStyleSets({
  todoContainer: {
    width: "50%",
    height: "80%",
    position: "absolute",
    top: "30%",
    left: "50%",
    backgroundColor: "lightblue",
    transform: "translate(-50%, -50%)",
    boxShadow:
      "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px",
  },
  headerStyle: {
    height: 40,
    background: "cadetblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pivotRoot: {
    display: "flex",
    justifyContent: "center",
  },
  pivotContainer: {
    margin: 20,
  },
});

export default HomeStyle;
