import { createContext, useState } from "react";
import { getPlayerData } from "../data/Players";

export const QuestionContext = createContext();

export default function QuestionProvider({ children }) {
  const [id1, setId1] = useState(Math.floor(Math.random() * 28) + 1);
  const [id2, setId2] = useState(Math.floor(Math.random() * 28) + 1);
  while (id1 === id2) {
    setId2(Math.floor(Math.random() * 28) + 1);
  }

  const [points, setPoints] = useState(0);
  const handleRightAnswer = () => {
    setPoints(points + 20);
  };
  const handleWrongAnswer = () => {
    if (points <= 0) {
      setPoints(0);
      return;
    }
    setPoints(points - 5);
  };

  const questionArray = [
    "clubGoals",
    "age",
    "cups",
    "nationalGoals",
    "wcAttends",
    "height",
  ];
  let randIndex = Math.floor(Math.random() * questionArray.length);
  const [question, setQuestion] = useState(questionArray[randIndex]);

  const questionRulesArr = [
    getPlayerData(id1).playerClubGoals > getPlayerData(id2).playerClubGoals,
    getPlayerData(id1).playerAge < getPlayerData(id2).playerAge,
    getPlayerData(id1).playerCups > getPlayerData(id2).playerCups, //Cups need to be updated or get changed
    getPlayerData(id1).playerNationalGoals >
      getPlayerData(id2).playerNationalGoals,
    getPlayerData(id1).numOfWorldCupAttends >
      getPlayerData(id2).numOfWorldCupAttends,
    getPlayerData(id1).playerHeightCM > getPlayerData(id2).playerHeightCM,
  ];

  const [qMessage, setQMessage] = useState("...");
  // bug: can create same qMessages

  const [qRule, setQRule] = useState(questionRulesArr[randIndex]);

  const handleQuestion = () => {
    let newRandIndex = Math.floor(Math.random() * questionArray.length);
    while (newRandIndex === randIndex) {
      newRandIndex = Math.floor(Math.random() * questionArray.length);
    }
    randIndex = newRandIndex;
    const newQuestion = questionArray[randIndex];
    setQuestion(newQuestion);
    const newQuestionRule = questionRulesArr[randIndex];
    setQRule(newQuestionRule);

    if (newQuestion === "clubGoals") {
      setQMessage("Which one has Scored More 'Club' Goals ?");
    } else if (newQuestion === "age") {
      setQMessage("Which one is YOUNGER by age ?");
    } else if (newQuestion === "cups") {
      setQMessage("Which one has won MORE Cups in total (Alaki by now) ?");
    } else if (newQuestion === "nationalGoals") {
      setQMessage("Which one has Score More 'National' Goals ?");
    } else if (newQuestion === "wcAttends") {
      setQMessage("Appearence of Which player was more on the World Cups ?");
    } else if (newQuestion === "height") {
      setQMessage("Which player is taller by height ?");
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        question,
        qMessage,
        handleQuestion,
        id1,
        setId1,
        id2,
        setId2,
        qRule,
        points,
        handleRightAnswer,
        handleWrongAnswer,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
