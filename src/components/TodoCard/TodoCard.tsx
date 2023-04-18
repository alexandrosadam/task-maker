import { ToDo } from "@api/todos";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { toDoCardContainer } from "./styles";

const TodoCard = ({ id, title }: ToDo) => {
  return (
    <Card sx={{ minWidth: 275 }} css={toDoCardContainer}>
      <CardContent>
        <Typography variant="h5" component="div">
          {id}: {title}
        </Typography>
        <Typography variant="body2">Description</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Complete</Button>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
