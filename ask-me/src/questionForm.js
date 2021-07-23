// import React from "react";
// import "./questionForm.css";
// import {
//   Button,
//     CircularProgress,
//   FormControl,
//   InputLabel,
//   OutlinedInput,
// } from "@material-ui/core";
// import robot from "./Robot.png";
// import { useState } from "react";
// import axios from "axios";
// function QuestionForm() {

//   return (
//     <div className={`content ${loading && "blur"}`}>
//       <img src={robot} className="robot" />
//       <FormControl
//         className="search-bar"
//         variant="outlined"
//         required
//         disabled={loading}
//       >
//         <InputLabel>Ask Me</InputLabel>
//         <OutlinedInput
//           onChange={(e) => setQuestion(e.target.value)}
//           labelWidth={60}
//           className="search-bar-placeholder"
//         />
//       </FormControl>
//       <Button
//         variant="contained"
//         className="search-button"
//         onClick={submitQuestion}
//         type="submit"
//         disabled={!question | loading}
//       >
//         Search
//       </Button>
//       {loading && <CircularProgress className="snipper" />}
//     </div>
//   );
// }

// export default QuestionForm;
