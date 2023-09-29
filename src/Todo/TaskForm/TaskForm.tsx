import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import React from "react";

const TaskForm = () => {
  return (
    <Stack>
      <TextField label="Standard" />
      <TextField label="note" multiline rows={4} resizable={false} />
      <br />

      <Stack horizontal>
        <Stack style={{ width: "80%" }}>
          <MessageBar messageBarType={MessageBarType.success}>
            Task Added
          </MessageBar>
          <PrimaryButton text="ADD NOTE" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TaskForm;
