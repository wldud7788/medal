import { useState } from "react";
import Form from "./Form.jsx";
import MedalList from "./MedalList.jsx";

const MedalContainer = () => {
  const [medalData, setMedalData] = useState([]);

  const [formValues, setFormValues] = useState({
    nation: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  const handleChange = (event) => {
    console.log(event.target.id);
    setFormValues({ ...formValues, [event.target.id]: event.target.value });
  };
  // input 초기화 함수
  const inputInit = () => {
    setFormValues({
      nation: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };
  // 추가 이벤트 핸들러
  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 리로드 방지

    // 이미 등록된 국가인지 확인
    const existNation = medalData.find(
      (medal) => medal.nation === formValues.nation
    );
    console.log(existNation);
    console.log("durl", formValues.nation);
    if (existNation) {
      alert("이미 등록된 국가입니다.");
      return;
    }
    setMedalData([...medalData, formValues]);
    inputInit();
  };

  // 삭제 이벤트 핸들러
  const handleDelete = (medalDelete) => {
    // medalDelete와 일치하지 않는 항목만 남기기
    setMedalData(medalData.filter((medal) => medal !== medalDelete));
  };

  // 업데이트 이벤트 핸들러
  const handleUpdate = () => {
    const trimmedNation = formValues.nation.trim(); // 국가명 앞뒤 공백 제거

    // 업데이트할 index를 찾기
    const medalIndex = medalData.findIndex(
      (medal) => medal.nation === trimmedNation
    );

    if (medalIndex !== -1) {
      const updatedMedal = {
        ...medalData[medalIndex],
        gold: formValues.gold,
        silver: formValues.silver,
        bronze: formValues.bronze,
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
        handleChange={handleChange}
        formValues={formValues}
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
