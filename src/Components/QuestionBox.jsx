import { Card } from "antd";
import { useContext, useEffect } from "react";
import { QuestionContext } from "../Context/QuestionContext";

function QuestionBox() {
  const { qMessage, handleQuestion } = useContext(QuestionContext);

  useEffect(() => {
    handleQuestion();
  }, []);

  return (
    <Card
      title="Question:"
      bordered={false}
      style={{
        width: 200,
        backgroundColor: "#22d3ee",
      }}
    >
      <p>{qMessage}</p>
    </Card>
  );
}

export default QuestionBox;
