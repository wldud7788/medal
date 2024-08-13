import { useState } from "react";
import Form from "./Form.jsx";
import MedalList from "./MedalList.jsx";

const MedalContainer = () => {
  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [medalData, setMedalData] = useState([]);

  const handleNationChange = (event) => {
    setNation(event.target.value);
  };
  const handleGoldChange = (event) => {
    setGold(Number(event.target.value));
  };
  const handleSilverChange = (event) => {
    setSilver(Number(event.target.value));
  };
  const handleBronszeChange = (event) => {
    setBronze(Number(event.target.value));
  };
  // input 초기화 함수
  const inputInit = () => {
    setNation("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };
  // 추가 이벤트 핸들러
  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 리로드 방지

    // 이미 등록된 국가인지 확인
    const existNation = medalData.find((medal) => medal.nation === nation);
    console.log(existNation);
    console.log("durl", nation);
    if (existNation) {
      alert("이미 등록된 국가입니다.");
      return;
    }
    const newMedal = {
      nation,
      gold,
      silver,
      bronze,
    };
    setMedalData([...medalData, newMedal]);
    inputInit();
  };

  // 삭제 이벤트 핸들러
  const handleDelete = (medalDelete) => {
    // medalDelete와 일치하지 않는 항목만 남기기
    setMedalData(medalData.filter((medal) => medal !== medalDelete));
  };

  // 업데이트 이벤트 핸들러
  const handleUpdate = () => {
    const trimmedNation = nation.trim(); // 국가명 앞뒤 공백 제거

    // 업데이트할 index를 찾기
    const medalIndex = medalData.findIndex(
      (medal) => medal.nation === trimmedNation
    );

    if (medalIndex !== -1) {
      const updatedMedal = {
        ...medalData[medalIndex],
        gold: gold,
        silver: silver,
        bronze: bronze,
      };
      const updatedMedalData = [...medalData];
      updatedMedalData[medalIndex] = updatedMedal;
      setMedalData(updatedMedalData);

      inputInit();
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };
  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <Form
        handleNationChange={handleNationChange}
        nation={nation}
        handleGoldChange={handleGoldChange}
        gold={gold}
        handleSilverChange={handleSilverChange}
        silver={silver}
        handleBronszeChange={handleBronszeChange}
        bronze={bronze}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
      />
      <div>
        <MedalList medalData={medalData} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default MedalContainer;
