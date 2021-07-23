import { useState } from "react";

import "./App.css";
import robot from "./Robot.png";

import Result from "./results";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  async function submitQuestion() {
    setLoading(true);
    let res = await axios.get(
      "https://1abc74226b04.ngrok.io/predict?question=" + question
    );
    let data = res.data;
    setData(data);
    setLoading(false);
    setOpen(true);
    setQuestion("");
  }

  return (
    <div className={"app"}>
      <div className={`content ${loading && "blur"}`}>
        <img src={robot} className="robot" />
        <FormControl
          className="search-bar"
          variant="outlined"
          required
          disabled={loading}
        >
          <InputLabel>Ask Me</InputLabel>
          <OutlinedInput
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            labelWidth={60}
            className="search-bar-placeholder"
          />
        </FormControl>
        <Button
          variant="contained"
          className="search-button"
          onClick={submitQuestion}
          type="submit"
          disabled={!question | loading}
        >
          Search
        </Button>
      </div>
      {loading && <CircularProgress className="snipper" />}
      <Result
        isOpen={open}
        question={data.question}
        answer={data.answer}
        link={data.link}
        setOpen={setOpen}
        setData={setData}
      />
    </div>
  );
}

export default App;
