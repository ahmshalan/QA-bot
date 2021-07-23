import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

function results({ isOpen, setOpen, question, answer, link, setData }) {
  const handleClose = () => {
    setOpen(false);
    setData({});
  };

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      aria-labelledby="customized-dialog-title"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {question}
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>{answer}</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => openLink(link)} color="primary">
          Read more
        </Button>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default results;
