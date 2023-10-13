import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { getPlayerData } from "../data/Players";
import { useContext } from "react";
import QuestionBox from "../Components/QuestionBox";
import { QuestionContext } from "../Context/QuestionContext";

export default function AppMain() {
  const {
    handleQuestion,
    id1,
    setId1,
    id2,
    setId2,
    qRule,
    points,
    handleRightAnswer,
    handleWrongAnswer,
  } = useContext(QuestionContext);

  const handleBtn1 = () => {
    if (qRule) {
      console.log("You Won Left Score is Higher");
      let nextID = Math.floor(Math.random() * 28) + 1; //Change the 28 to a variable later
      console.log(nextID);
      while (nextID === id2 || nextID === id1) {
        nextID = Math.floor(Math.random() * 28) + 1;
        console.log(nextID);
      }
      handleRightAnswer();
      console.log("Points =", points);
      setId2(nextID);
      handleQuestion();
    } else {
      handleWrongAnswer();
      console.log("Points =", points);
      console.log("You Lost!!");
    }
  };

  const handleBtn2 = () => {
    if (!qRule) {
      console.log("You Won Right Score is Higher");
      let nextID = Math.floor(Math.random() * 28) + 1;
      console.log(nextID);
      while (nextID === id1 || nextID === id2) {
        nextID = Math.floor(Math.random() * 28) + 1;
        console.log(nextID);
      }
      handleRightAnswer();
      console.log("Points =", points);
      setId1(nextID);
      handleQuestion();
    } else {
      handleWrongAnswer();
      console.log("Points =", points);
      console.log("You Lost!!");
    }
  };

  return (
    <div className="relative container-fluid">
      <div className="absolute top-[2%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#22d3ee] rounded-b-lg z-10 p-3">
        Points: {points}
      </div>
      <div
        className="flex lg:flex-row flex-col h-screen lg:divide-x-8 lg:divide-y-0 divide-y-8 divide-solid divide-[#22d3ee]"
        onClick={handleBtn1}
      >
        <div
          style={{
            backgroundImage: `url(${getPlayerData(id1).playerImage})`,
          }}
          className=" flex flex-col lg:w-1/2 h-1/2 bg-white/30 bg-cover bg-center lg:h-screen w-screen justify-center relative items-center"
        >
          <div className="backdrop-blur-sm bg-transparent self-center p-2 relative lg:top-20 rounded-lg hover:bg-black">
            <h2 className="font-bold sm:text-5xl text-3xl  hover:text-white">
              {getPlayerData(id1).playerName}
            </h2>
          </div>
          <div className="grid grid-cols-3 lg:relative lg:top-40 sm:left-0 sm:bottom-0 absolute items-center bottom-20 backdrop-blur-sm lg:w-3/5 sm:w-2/5 w-1/2 rounded-lg bg-white/50">
            <img
              src={getPlayerData(id1).playerCountryImage}
              alt={getPlayerData(id1).playerCountry}
              className="justify-self-end lg:h-[90px] lg:w-[130px] h-[50px] w-[70px]"
            />
            <h3 className="justify-self-center lg:text-5xl text-3xl text-yellow-400 font-sans ">
              {getPlayerData(id1).playerPosition}
            </h3>
            <img
              src={getPlayerData(id1).playerClubImage}
              alt={getPlayerData(id1).playerClub}
              className="justify-self-start lg:h-[100px] lg:w-[100px] h-[50px] w-[50px]"
            />
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${getPlayerData(id2).playerImage})`,
            backgroundSize: "cover",
          }}
          className=" flex flex-col bg-white/30 lg:w-1/2 h-1/2 bg-cover bg-center lg:h-screen w-screen justify-center relative items-center"
          onClick={handleBtn2}
        >
          <div className="backdrop-blur-sm bg-transparent self-center p-2 relative lg:top-20 rounded-lg hover:bg-black">
            <h2 className="font-bold sm:text-5xl text-3xl hover:text-white">
              {getPlayerData(id2).playerName}
            </h2>
          </div>
          <div className="grid grid-cols-3 lg:relative lg:top-40 absolute sm:top-0 sm:left-0 self-center top-20 items-center backdrop-blur-sm  lg:w-3/5 sm:w-2/5 w-1/2 rounded-lg bg-white/50">
            <img
              src={getPlayerData(id2).playerCountryImage}
              alt={getPlayerData(id2).playerCountry}
              className="justify-self-end lg:h-[90px] lg:w-[130px] h-[50px] w-[70px]"
            />
            <h3 className="justify-self-center lg:text-5xl text-3xl text-yellow-400 font-sans ">
              {getPlayerData(id2).playerPosition}
            </h3>
            <img
              src={getPlayerData(id2).playerClubImage}
              alt={getPlayerData(id2).playerClub}
              className="justify-self-start lg:h-[100px] lg:w-[100px] h-[50px] w-[50px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] text-center -translate-x-1/2 -translate-y-1/2">
        <QuestionBox />
      </div>
      <div className="absolute lg:top-[75%] lg:left-[50%] top-[50%] left-[75%] -translate-x-1/2 -translate-y-1/2 lg:block hidden">
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-6 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={handleBtn1}
        >
          Left WINS!
          <DoubleLeftOutlined style={{ display: "block" }} />
        </button>
      </div>
      <div className="absolute lg:top-[85%] lg:left-[50%] top-[50%] left-[85%] -translate-x-1/2 -translate-y-1/2 lg:block hidden">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleBtn2}
        >
          Right WINS!
          <DoubleRightOutlined style={{ display: "block" }} />
        </button>
      </div>
    </div>
  );
}
