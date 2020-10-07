import React from "react";

const Coordi = () => {
  const dress1 = {
    top: ["나시티", "민소매", "반팔티"],
    pants: ["반바지", "치마"],
    accessories: ["미니선풍기", "부채", "양산", "선크림"],
  };

  const dress2 = {
    top: ["반팔티", "얇은셔츠", "얇은긴팔"],
    pants: ["반바지", "면바지"],
    accessories: ["선크림"],
  };

  const dress3 = {
    top: ["긴팔티", "후두티", "얇은긴팔"],
    pants: ["면바지", "슬랙스", "스키니", "청바지"],
    accessories: ["선크림"],
    outer: ["가디건", "남방"],
  };

  const dress4 = {
    top: ["긴팔티", "후드티", "맨투맨", "얇은니트"],
    pants: ["면바지", "슬랙스", "스키니", "청바지"],
    accessories: ["선크림"],
    outer: ["자켓", "남방", "간절기 야상", "가디건"],
  };

  const dress5 = {
    top: ["니트", "후드티", "맨투맨"],
    pants: ["청바지", "슬랙스", "면바지"],
    accessories: ["선크림"],
    outer: ["가디건", "셔츠", "남방"],
  };

  const dress6 = {
    top: ["긴팔", "니트", "후드티", "맨투맨"],
    pants: ["청바지", "슬랙스", "스키니", "면바지"],
    accessories: ["핸드크림"],
    outer: ["코트", "트렌치코트"],
  };
  const dress7 = {
    top: ["긴팔", "니트", "후드티", "맨투맨"],
    pants: ["청바지", "슬랙스", "스키니", "면바지"],
    accessories: ["핸드크림"],
    outer: ["코트", "가죽자켓", "얇은 패딩"],
  };
  const dress8 = {
    top: ["긴팔", "니트", "후드티", "맨투맨"],
    pants: ["청바지", "면바지"],
    accessories: ["핸드크림", "목도리", "장갑"],
    outer: ["야상", "롱패딩", "숏패딩"],
  };

  const index1 = Math.floor(Math.random() * 1);
  const index2 = Math.floor(Math.random() * 2);
  const index3 = Math.floor(Math.random() * 3);
  const index4 = Math.floor(Math.random() * 4);

  const weather = 28;

  const back = {
    width: "100%",
    // border: "3px solid #3f51b5",
    borderRadius: "10px",
    padding: "20px",
    lineHeight: "40px",
    fontSize: "16px",
    float: "left",
  };

  if (weather > 27) {
    return (
      <div style={back}>
        <h4>상의 : </h4>

        {dress1.top[index3]}

        <img
          src="../../clothesIcon/01상의 긴팔 후드.svg"
          alt="상의 긴팔 후드"
        />
        <h4>하의 : </h4>
        {dress1.pants[index2]}
        <h4>악세서리 : </h4>
        {dress1.accessories[index4]}
      </div>
    );
  }

  if (weather > 23) {
    return (
      <div>
        <h4>상의 : </h4>
        {dress2.top[index3]}
        <h4>하의 : </h4>
        {dress2.pants[index2]}
        <h4>악세서리 : </h4>
        {dress2.accessories[index1]}
      </div>
    );
  }

  if (weather > 20) {
    return (
      <div>
        <div style={back}>
          <h4>상의 : </h4>
          {dress3.top[index3]}
          <h4>하의 : </h4>
          {dress3.pants[index4]}
          <h4>악세서리 : </h4>
          {dress3.accessories[index1]}
          <h4>아우터 : </h4>
          {dress3.outer[index2]}
        </div>
      </div>
    );
  }

  if (weather > 17) {
    return (
      <div>
        <h4>상의 : </h4>
        {dress4.top[index4]}
        <h4>하의 : </h4>
        {dress4.pants[index4]}
        <h4>악세서리 : </h4>
        {dress4.accessories[index1]}
        <h4>아우터 : </h4>
        {dress4.outer[index4]}
      </div>
    );
  }

  if (weather > 12) {
    return (
      <div>
        <h4>상의 : </h4>
        {dress5.top[index3]}
        <h4>하의 : </h4>
        {dress5.pants[index3]}
        <h4>악세서리 : </h4>
        {dress5.accessories[index1]}
        <h4>아우터 : </h4>
        {dress5.outer[index3]}
      </div>
    );
  }

  if (weather > 10) {
    return (
      <div>
        <h4>상의 : </h4>
        {dress6.top[index4]}
        <h4>하의 : </h4>
        {dress6.pants[index4]}
        <h4>악세서리 : </h4>
        {dress5.accessories[index1]}
        <h4>아우터 : </h4>
        {dress5.outer[index2]}
      </div>
    );
  }

  if (weather > 5) {
    return (
      <div>
        <h4>상의 : </h4>
        {dress7.top[index4]}
        <h4>하의 : </h4>
        {dress7.pants[index4]}
        <h4>악세서리 : </h4>
        {dress7.accessories[index1]}
        <h4>아우터 : </h4>
        {dress7.outer[index3]}
      </div>
    );
  }

  if (weather < 6) {
    return (
      <div>
        <h4>상의 : </h4>
        {dress8.top[index4]}
        <h4>하의 : </h4>
        {dress8.pants[index2]}
        <h4>악세서리 : </h4>
        {dress8.accessories[index3]}
        <h4>아우터 : </h4>
        {dress8.outer[index3]}
      </div>
    );
  }

  return <div></div>;
};

export default Coordi;
