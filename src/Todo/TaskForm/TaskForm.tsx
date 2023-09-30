import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
} from "@fluentui/react";

import useInput from "./useInputs";
import { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { TodoContext } from "../List/TodoProvider";
import { ITask } from "../Types";

const TaskForm = () => {
  const { dispatch } = useContext(TodoContext);

  const [showMessage, setShowMessage] = useState<{
    type: MessageBarType;
    message: string;
  }>({ type: MessageBarType.warning, message: "" });

  const Title = useInput("");
  const Description = useInput("");

  useEffect(() => {
    if (showMessage.message) {
      setTimeout(() => {
        setShowMessage({ type: MessageBarType.success, message: "" });
      }, 1500);
    }
  }, [showMessage.message]);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const data: ITask = {
      id: "",
      title: Title.value,
      description: Description.value,
      isFav: true,
    };
    dispatch({ type: "add", data });
    setShowMessage({ type: MessageBarType.success, message: "Task Added" });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <br />
      <Box
        sx={{
          width: 220,
          marginLeft: 31,
          maxWidth: "100%",
          backgroundColor: "lightpink",
        }}
      >
        <TextField
          color="success"
          variant="outlined"
          label="Title"
          required
          {...Title}
        />
      </Box>
      <br />

      <br />

      <Box
        sx={{
          width: 800,
          maxWidth: "100%",
          marginTop: -4,
          backgroundColor: "lightpink",
        }}
      >
        <TextField
          color="success"
          fullWidth
          label="Description"
          multiline
          rows={4}
          {...Description}
        />
      </Box>

      <br />

      <Stack horizontal tokens={{ childrenGap: 20 }} style={{ marginTop: -10 }}>
        <Stack style={{ width: "80%" }}>
          {showMessage.message && (
            <MessageBar messageBarType={MessageBarType.success}>
              Task Added
            </MessageBar>
          )}
        </Stack>

        <Stack style={{ width: "20%" }}>
          <PrimaryButton type="submit" text="ADD NOTE" />
        </Stack>
      </Stack>
    </form>
  );
};

export default TaskForm;
