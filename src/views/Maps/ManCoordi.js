/* eslint-disable no-sparse-arrays */
/* eslint-disable react/jsx-key */
import React from "react";
import "./Cody.css";

import vest from "../../clothesIcon/02상의 정장 베스트조끼.svg";
import suitset from "../../clothesIcon/02상의 정장세트.svg";

import hoodlong from "../../clothesIcon/01상의 긴팔 후드.svg";
import "./Cody.css";
import shirtlong from "../../clothesIcon/01상의-긴팔 셔츠.svg";
import top from "../../clothesIcon/01상의-나시탑.svg";
import sleeveless from "../../clothesIcon/01상의-나시티.svg";
import Tshirtbutton from "../../clothesIcon/01상의-단추티셔츠.svg";
import shirtshort from "../../clothesIcon/01상의-반팔셔츠.svg";
import Tshirtstipe from "../../clothesIcon/01상의-줄무늬티셔츠.svg";
import Tshirt1 from "../../clothesIcon/01상의-티셔츠.svg";
import Tshirt2 from "../../clothesIcon/01상의-티셔츠2.svg";
import PolarTshirt1 from "../../clothesIcon/01상의-폴라티.svg";
import PolarTshirt2 from "../../clothesIcon/01상의-폴라티2.svg";
import blouseshort from "../../clothesIcon/01상의-흰색 블라우스.svg";
import trenchCoat from "../../clothesIcon/02 상의 아우터 트랜치코트.svg";
import cardigan from "../../clothesIcon/02상의 가디건.svg";
import leatherJacket from "../../clothesIcon/02상의 가죽자켓.svg";
import outer from "../../clothesIcon/02상의 긴팔 아우터.svg";
import hoodzipup from "../../clothesIcon/02상의 긴팔 후드집업.svg";
import Tlong from "../../clothesIcon/02상의 긴팔티.svg";
import paddinglong from "../../clothesIcon/02상의 롱패딩.svg";
import suit from "../../clothesIcon/02상의 정장마이.svg";
import suit2 from "../../clothesIcon/02상의 정장마이2.svg";
import coat from "../../clothesIcon/02상의 코트.svg";
import paddingvest from "../../clothesIcon/02상의 패딩조끼.svg";
import skirtlong from "../../clothesIcon/04하의 롱치마.svg";
import skirtlong2 from "../../clothesIcon/04하의 롱치마2.svg";
import pant from "../../clothesIcon/04하의 면바지.svg";
import pant2 from "../../clothesIcon/04하의 면바지2.svg";
import pantshort from "../../clothesIcon/04하의 반바지.svg";
import baggyPants from "../../clothesIcon/04하의 배기팬츠.svg";
import blueJeans from "../../clothesIcon/04하의 연청스키니진.svg";
import blueJeans2 from "../../clothesIcon/04하의 진청스키니진.svg";
import pantshort2 from "../../clothesIcon/04하의 짧은 트레이닝복.svg";
import blueJeansWide from "../../clothesIcon/04하의 청바지.svg";
import uggBoots from "../../clothesIcon/05소품신발 07소품겨울 어그부츠.svg";
import shoes from "../../clothesIcon/05소품신발 구두.svg";
import shoes2 from "../../clothesIcon/05소품신발 단화1.svg";
import shoes3 from "../../clothesIcon/05소품신발 단화2.svg";
import suedeBoots from "../../clothesIcon/05소품신발 스웨이드 부츠.svg";
import workShoes from "../../clothesIcon/05소품신발 스포츠 운동화.svg";
import slipper from "../../clothesIcon/05소품신발 슬리퍼.svg";
import sportShoes from "../../clothesIcon/05소품신발 운동화.svg";
import casualLoafers from "../../clothesIcon/05소품신발 캐주얼로퍼.svg";
import canvasHigh from "../../clothesIcon/05소품신발 캔버스하이.svg";
import fashonShoes from "../../clothesIcon/05소품신발 패션구두.svg";
import hikingBoots from "../../clothesIcon/05소품신발 하이킹부츠.svg";
import strawhat from "../../clothesIcon/05소품일반 06소품고온도 짚모자.svg";
import cap from "../../clothesIcon/05소품일반 06소품고온도 캡모자.svg";
import bag from "../../clothesIcon/05소품일반 가방1.svg";
import bag2 from "../../clothesIcon/05소품일반 가방2.svg";
import bag3 from "../../clothesIcon/05소품일반 가방3.svg";
import tumbler from "../../clothesIcon/06소품고온도 물통.svg";
import fan from "../../clothesIcon/06소품고온도 부채.svg";
import sunglasses from "../../clothesIcon/06소품고온도 썬글라스.svg";
import sunCap from "../../clothesIcon/06소품고온도 썬캡.svg";
import sunCream1 from "../../clothesIcon/06소품고온도 썬크림1.svg";
import sunCream2 from "../../clothesIcon/06소품고온도 썬크림2.svg";
import earPlug from "../../clothesIcon/07소품저온도 귀마개1.svg";
import earPlug2 from "../../clothesIcon/07소품저온도 귀마개2.svg";
import scarf from "../../clothesIcon/07소품저온도 목도리.svg";
import winterHat from "../../clothesIcon/07소품저온도 방한용모자.svg";
import handwarmer from "../../clothesIcon/07소품저온도 손난로.svg";
import sleepingSocks from "../../clothesIcon/07소품저온도 수면양말.svg";
import FurHat from "../../clothesIcon/07소품저온도 털모자.svg";
import rainCoat from "../../clothesIcon/08소품날씨(비) 우비.svg";
import umbrella from "../../clothesIcon/08소품날씨(비) 우산.svg";
import handcream from "../../clothesIcon/05소품일반 핸드크림.svg";

// <img src={rainCoat} alt="우비" />,
// <img src={umbrella} alt="우산" />,
// <img src={rainboots} alt="레인부츠" />,

const Coordi = ({ data }) => {
  const dress1 = {
    top: [
      // "나시티",
      // "민소매",
      // "반팔티",
      <img src={top} alt="나시탑" title="나시탑" />,
      <img src={sleeveless} alt="나시티" title="나시티" />,
      <img src={Tshirt1} alt="티셔츠" title="티셔츠" />,
      <img src={Tshirt2} alt="티셔츠" title="티셔츠" />,
      <img src={blouseshort} alt="블라우스" title="블라우스" />,
    ],
    pants: [
      // "반바지",
      // "치마",
      <img src={pantshort2} alt="짧은 트레이닝복" title="짧은 트레이닝복" />,
      // <img src={pant} alt="면바지" />,
      <img src={pantshort} alt="짧은 바지" title="짧은 바지" />,
    ],
    acc: [
      // "미니선풍기",
      // "부채",
      // "양산",
      // "선크림",
      <img src={tumbler} alt="텀블러" title="텀블러" />,
      <img src={fan} alt="부채" title="부채" />,
      <img src={sunglasses} alt="썬글라스" title="썬글라스" />,
      <img
        src={sunCream2}
        alt="썬크림 PA +++ 이상"
        title="썬크림 PA +++ 이상"
      />,
    ],

    // 모자
    cap: [
      <img src={strawhat} alt="짚모자" title="짚모자" />,
      <img src={cap} alt="캡모자" title="캡모자" />,
      <img src={sunCap} alt="썬캡" title="썬캡" />,
    ],

    // 신발
    shose: [
      <img src={shoes} alt="구두" title="구두" />,
      <img src={shoes2} alt="단화" title="단화" />,
      <img src={shoes3} alt="단화" title="단화" />,
      <img src={slipper} alt="슬리퍼" title="슬리퍼" />,
      <img src={sportShoes} alt="운동화" title="운동화" />,

      <img src={casualLoafers} alt="캐주얼로퍼" title="캐주얼로퍼" />,
      <img src={canvasHigh} alt="캔버스 하이" title="캔버스 하이" />,
    ],

    // 가방
    bag: [
      <img src={bag} alt="가방" />,
      <img src={bag2} alt="가방" />,
      <img src={bag3} alt="가방" />,
    ],
  };

  const dress2 = {
    top: [
      // "반팔티",
      // "얇은셔츠",
      // "얇은긴팔",
      <img src={Tshirtbutton} alt="단추티셔츠" title="단추티셔츠" />,
      <img src={shirtshort} alt="반팔셔츠" title="반팔셔츠" />,
      <img src={Tshirtstipe} alt="줄무늬티셔츠" title="줄무늬티셔츠" />,
      <img src={Tshirt1} alt="티셔츠" title="티셔츠" />,
      <img src={Tshirt2} alt="티셔츠" title="티셔츠" />,
      <img src={PolarTshirt1} alt="폴라티셔츠" title="폴라티셔츠" />,
      <img src={PolarTshirt2} alt="폴라티셔츠" title="폴라티셔츠" />,
      <img src={blouseshort} alt="블라우스" title="블라우스" />,
      <img src={Tlong} alt="긴티" title="긴티" />,
    ],
    pants: [
      // "반바지",
      // "면바지",
      <img src={pantshort2} alt="짧은 트레이닝복" />,
      <img src={pantshort} alt="짧은 바지" />,
      <img src={pant} alt="면바지" />,
      <img src={pant2} alt="면바지2" />,
    ],
    acc: [
      // "선크림",
      <img src={sunCream1} alt="썬크림1" />,
      <img src={sunCream2} alt="썬크림2" />,
      <img src={cap} alt="캡모자" />,
    ],

    // 신발
    shose: [
      <img src={shoes} alt="구두" title="구두" />,
      <img src={shoes2} alt="단화" title="단화" />,
      <img src={shoes3} alt="단화" title="단화" />,
      <img src={sportShoes} alt="운동화" title="운동화" />,
      <img src={casualLoafers} alt="캐주얼로퍼" title="캐주얼로퍼" />,
      <img src={canvasHigh} alt="캔버스 하이" title="캔버스 하이" />,
      <img src={fashonShoes} alt="패션구두" title="패션구두" />,
    ],

    // 가방
    bag: [
      <img src={bag} alt="가방" />,
      <img src={bag2} alt="가방" />,
      <img src={bag3} alt="가방" />,
    ],
  };

  const dress3 = {
    top: [
      //"긴팔티", "후드티", "얇은긴팔"
      <img src={Tlong} alt="긴티" />,
      <img src={shirtlong} alt="상의 긴팔 셔츠" />,
      <img src={hoodlong} alt="상의 긴팔 후드" title="상의 긴팔 후드" />,
    ],

    pants: [
      // "면바지",
      // "슬랙스",
      // "스키니",
      // "청바지",
      <img src={blueJeans} alt="연청스키니진" />,
      <img src={blueJeans2} alt="진청스키니진" />,
      <img src={blueJeansWide} alt="청바지" />,
      <img src={pant} alt="면바지" />,
      <img src={pant2} alt="면바지2" />,
      <img src={baggyPants} alt="배기팬츠" />,
    ],

    outer: [
      // "가디건",
      // "남방",
      <img src={cardigan} alt="가디건" />,
      <img src={outer} alt="아우터" />,
      ,
    ],
    acc: [
      // "선크림",
      <img src={sunCream1} alt="썬크림1" />,
      <img src={sunCream2} alt="썬크림2" />,
    ],

    // 신발
    shose: [
      <img src={shoes} alt="구두" title="구두" />,
      <img src={shoes2} alt="단화" title="단화" />,
      <img src={shoes3} alt="단화" title="단화" />,
      <img src={workShoes} alt="스포츠 운동화" title="스포츠 운동화" />,
      <img src={sportShoes} alt="운동화" title="운동화" />,
      <img src={casualLoafers} alt="캐주얼로퍼" title="캐주얼로퍼" />,
      <img src={suedeBoots} alt="스웨이드 구두" title="스웨이드 구두" />,
      <img src={fashonShoes} alt="패션구두" title="패션구두" />,
    ],
  };

  const dress4 = {
    top: [
      // "긴팔티",
      // "후드티",
      // "맨투맨",
      // "얇은니트",
      <img src={Tlong} alt="긴티" />,
      <img src={hoodlong} alt="상의 긴팔 후드" />,
      <img src={shirtlong} alt="상의 긴팔 셔츠" />,
    ],
    pants: [
      // "면바지",
      // "슬랙스",
      // "스키니",
      // "청바지",
      <img src={pant} alt="면바지" />,
      <img src={pant2} alt="면바지2" />,
      <img src={baggyPants} alt="배기팬츠" />,
      <img src={blueJeans} alt="연청스키니진" />,
      <img src={blueJeans2} alt="진청스키니진" />,
      <img src={blueJeansWide} alt="청바지" />,
    ],
    outer: [
      // "자켓",
      // "남방",
      // "간절기 야상",
      // "가디건",
      <img src={cardigan} alt="가디건" />,
      <img src={outer} alt="아우터" />,
      <img src={hoodzipup} alt="후드집업" />,
      <img src={suit} alt="정장마이" />,
      <img src={suit2} alt="정장마이2" />,
    ],

    acc: ["선크림"],
  };

  const dress5 = {
    top: [
      // "니트", "후드티", "맨투맨",
      <img src={Tlong} alt="긴티" />,
      <img src={hoodlong} alt="상의 긴팔 후드" />,
      <img src={shirtlong} alt="상의 긴팔 셔츠" />,
      <img src={Tlong} alt="긴티" />,
    ],
    pants: [
      // "청바지",
      // "슬랙스",
      // "면바지",
      <img src={blueJeans} alt="연청스키니진" />,
      <img src={blueJeans2} alt="진청스키니진" />,
      <img src={blueJeansWide} alt="청바지" />,
      <img src={pant} alt="면바지" />,
      <img src={pant2} alt="면바지2" />,
      <img src={baggyPants} alt="배기팬츠" />,
    ],
    outer: [
      // "가디건",
      // "셔츠",
      // "남방",
      <img src={cardigan} alt="가디건" />,
      <img src={outer} alt="아우터" />,
      <img src={hoodzipup} alt="후드집업" />,
    ],
    acc: [
      // "선크림"
      <img src={sunCream1} alt="썬크림1" />,
      <img src={handcream} alt="핸드크림" />,
    ],

    shose: [
      <img src={shoes} alt="구두" title="구두" />,
      <img src={shoes2} alt="단화" title="단화" />,
      <img src={shoes3} alt="단화" title="단화" />,
      <img src={workShoes} alt="스포츠 운동화" title="스포츠 운동화" />,
      <img src={sportShoes} alt="운동화" title="운동화" />,
      <img src={casualLoafers} alt="캐주얼로퍼" title="캐주얼로퍼" />,
      <img src={suedeBoots} alt="스웨이드 구두" title="스웨이드 구두" />,
      <img src={fashonShoes} alt="패션구두" title="패션구두" />,
    ],

    bag: [
      <img src={bag} alt="가방" />,
      <img src={bag2} alt="가방" />,
      <img src={bag3} alt="가방" />,
    ],
  };

  const dress6 = {
    top: [
      //"긴팔", "니트", "후드티", "맨투맨"
      <img src={Tlong} alt="긴티" />,
      <img src={hoodlong} alt="상의 긴팔 후드" />,
      <img src={shirtlong} alt="상의 긴팔 셔츠" />,
    ],
    pants: [
      // "청바지",
      // "슬랙스",
      // "스키니",
      // "면바지",
      <img src={blueJeans} alt="연청스키니진" />,
      <img src={blueJeans2} alt="진청스키니진" />,
      <img src={blueJeansWide} alt="청바지" />,
      <img src={pant} alt="면바지" />,
      <img src={pant2} alt="면바지2" />,
      <img src={baggyPants} alt="배기팬츠" />,
    ],
    outer: [
      // "코트", "트렌치코트",
      <img src={coat} alt="코트" />,
      <img src={trenchCoat} alt="트렌치코트" />,
    ],
    acc: ["핸드크림"],

    shose: [
      <img src={shoes} alt="구두" title="구두" />,
      <img src={shoes2} alt="단화" title="단화" />,
      <img src={shoes3} alt="단화" title="단화" />,
      <img src={workShoes} alt="스포츠 운동화" title="스포츠 운동화" />,
      <img src={sportShoes} alt="운동화" title="운동화" />,
      <img src={casualLoafers} alt="캐주얼로퍼" title="캐주얼로퍼" />,
      <img src={suedeBoots} alt="스웨이드 구두" title="스웨이드 구두" />,
      <img src={fashonShoes} alt="패션구두" title="패션구두" />,
    ],
  };
  const dress7 = {
    top: [
      //"긴팔", "니트", "후드티", "맨투맨"
      <img src={Tlong} alt="긴티" />,
      <img src={hoodlong} alt="상의 긴팔 후드" />,
      <img src={shirtlong} alt="상의 긴팔 셔츠" />,
    ],
    pants: [
      // "청바지",
      // "슬랙스",
      // "스키니",
      // "면바지",
      <img src={blueJeans} alt="연청스키니진" />,
      <img src={blueJeans2} alt="진청스키니진" />,
      <img src={blueJeansWide} alt="청바지" />,
      <img src={pant} alt="면바지" />,
      <img src={pant2} alt="면바지2" />,
      <img src={baggyPants} alt="배기팬츠" />,
    ],
    outer: [
      // "코트",
      // "가죽자켓",
      // "얇은 패딩",
      <img src={leatherJacket} alt="가죽자켓" />,
      <img src={coat} alt="코트" />,
      <img src={paddingvest} alt="패딩조끼" />,
    ],
    acc: ["핸드크림"],

    shose: [
      <img src={shoes} alt="구두" title="구두" />,
      <img src={shoes2} alt="단화" title="단화" />,
      <img src={shoes3} alt="단화" title="단화" />,
      <img src={workShoes} alt="스포츠 운동화" title="스포츠 운동화" />,
      <img src={sportShoes} alt="운동화" title="운동화" />,
      <img src={casualLoafers} alt="캐주얼로퍼" title="캐주얼로퍼" />,
      <img src={suedeBoots} alt="스웨이드 구두" title="스웨이드 구두" />,
      <img src={fashonShoes} alt="패션구두" title="패션구두" />,
    ],
  };
  const dress8 = {
    top: [
      //  "긴팔", "니트", "후드티", "맨투맨"
      <img src={Tlong} alt="긴티" />,
      <img src={hoodlong} alt="상의 긴팔 후드" />,
      <img src={shirtlong} alt="상의 긴팔 셔츠" />,
    ],
    pants: [
      // "청바지",
      // "면바지",
      <img src={blueJeans} alt="연청스키니진" />,
      <img src={blueJeans2} alt="진청스키니진" />,
      <img src={blueJeansWide} alt="청바지" />,
      <img src={pant} alt="면바지" />,
      <img src={pant2} alt="면바지2" />,
      <img src={baggyPants} alt="배기팬츠" />,
    ],
    outer: [
      // "야상",
      // "롱패딩",
      // "숏패딩",

      <img src={paddinglong} alt="롱패딩" />,
    ],
    acc: [
      // "핸드크림",
      // "목도리",
      // "장갑",
      <img src={suit2} alt="정장마이2" />,
      <img src={earPlug} alt="귀마개" />,
      <img src={earPlug2} alt="귀마개2" />,
      <img src={scarf} alt="목도리" />,
      <img src={winterHat} alt="방한용모자" />,
      <img src={handwarmer} alt="손난로" />,
      <img src={sleepingSocks} alt="수면양말" />,
      <img src={FurHat} alt="털모자" />,
    ],

    shose: [
      <img src={shoes} alt="구두" title="구두" />,
      <img src={shoes2} alt="단화" title="단화" />,
      <img src={shoes3} alt="단화" title="단화" />,
      <img src={workShoes} alt="스포츠 운동화" title="스포츠 운동화" />,
      <img src={uggBoots} alt="어그부츠" title="어그부츠" />,
      <img src={casualLoafers} alt="캐주얼로퍼" title="캐주얼로퍼" />,
      <img src={suedeBoots} alt="스웨이드 구두" title="스웨이드 구두" />,
      <img src={fashonShoes} alt="패션구두" title="패션구두" />,
    ],
  };

  const index1 = Math.floor(Math.random() * 0);
  const index2 = Math.floor(Math.random() * 1);
  const index3 = Math.floor(Math.random() * 2);
  const index4 = Math.floor(Math.random() * 3);
  const index5 = Math.floor(Math.random() * 4);
  const index6 = Math.floor(Math.random() * 5);
  const index7 = Math.floor(Math.random() * 6);
  const index8 = Math.floor(Math.random() * 7);
  const index9 = Math.floor(Math.random() * 8);
  // const index10 = Math.floor(Math.random() * 9);

  const weather = data.temp;
  // console.log(data.temp);

  const back = {
    width: "90%",
    borderRadius: "10px",
    padding: " 5%",
    lineHeight: "40px",
    fontSize: "16px",
  };

  const frame = {
    // border: "3px solid #eee",
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "30%",
    height: "50%",
    marginRight: "5px",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
  };

  const frame2 = {
    // border: "3px solid #eee",
    borderRadius: "10px",
    backgroundColor: "#fff",
    // width: "155px",
    width: "30%",
    marginTop: "25px",
    height: "50%",
    marginRight: "0px",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
  };

  const h4style = {
    fontSize: "1.5em",
  };

  const nowCody = {
    backgroundColor: "#772FDD", //"#9E38B4",
    // backgroundColor: "linearGradient(60deg, #ab47bc, #8e24aa)",
    color: "#fff",
    fontWeight: "500",
    fontSize: "18px",
    padding: "8px 5px",
    borderRadius: "0 10px 0px 10px",
    width: "98%",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    textAlign: "center",
  };

  const tip = {
    fontWeight: "500",
    color: "#555",
    // boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
  };

  const tip2 = {
    marginLeft: "5px",
    fontSize: "14px",
  };

  const tip3 = {
    // backgroundColor: "#9E38B4",
    backgroundColor: "#772FDD",
    color: "#fff",
    fontSize: "15px",
    padding: "3px 6px",
    borderRadius: "4px",
    marginLeft: "10px",
  };

  const titlefont = {
    color: "#888",
    fontSize: "0.9em",
    fontWeight: "300",
    textAlign: "center",
    paddingTop: "20px",
  };

  const titlefont2 = {
    color: "#888",
    fontSize: "0.9em",
    fontWeight: "300",
    textAlign: "center",
  };

  const blank = {
    marginTop: "26px",
    // width: "100%",
    borderRadius: "10px",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    backgroundColor: "#fff",
    padding: "5px 15px",
  };

  const blank2 = {
    // width: "100%",
    height: "70px",
    // backgroundColor: "#eee",
  };

  const tip01 = {
    tip001: [
      <span style={tip2}>수분 보충을 충분히 진행해주세요</span>,
      <span style={tip2}>건조한 날씨로 피부보습을 충분히 진행하세요</span>,
      <span style={tip2}>수분 보충을 충분히 진행해주세요</span>,
    ],
    tip002: [
      <span style={tip2}>일교차가 큰 날씨로 겉옷을 준비하세요</span>,
      <span style={tip2}>햇볕이 강해 썬크림을 꼭 발라주세요</span>,
      <span style={tip2}>챙이 넓은 모자를 챙기면 좋습니다</span>,
    ],
  };

  if (weather > 27) {
    return (
      <>
        <div style={back}>
          <h4 style={nowCody}>NOW CODY</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexFlow: "row wrap",
            }}
          >
            <div style={frame}>
              <h4 style={titlefont}>상의</h4>
              {dress1.top[index5]}
            </div>

            <div style={frame}>
              <h4 style={titlefont}>하의</h4>
              {dress1.pants[index2]}
            </div>

            <div style={frame}>
              <h4 style={titlefont}>악세서리</h4>
              {dress1.acc[index4]}
            </div>

            <div style={frame2}>
              <h4 style={titlefont}>모자</h4>
              {dress1.cap[index3]}
            </div>

            <div style={frame2}>
              <h4 style={titlefont}>신발</h4>
              {dress1.shose[index7]}
            </div>

            <div style={frame2}>
              <h4 style={titlefont}>가방</h4>
              {dress1.bag[index3]}
            </div>
          </div>

          <div style={blank}>
            <div style={tip}>
              <span style={tip3}>tip</span>
              <span style={tip2}>수분 보충을 충분히 진행해주세요</span>
            </div>
            <div style={tip}>
              <span style={tip3}>tip</span>
              <span style={tip2}>외출 시 썬크림을 발라주세요</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (weather > 23) {
    return (
      <div style={back}>
        <h4 style={nowCody}>NOW CODY</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row wrap",
          }}
        >
          <div style={frame}>
            <h4 style={titlefont}>상의 : </h4>
            {dress2.top[index9]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>하의 : </h4>
            {dress2.pants[index4]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>아우터 : </h4>
            {dress2.acc[index3]}
          </div>
          <div style={frame2}>
            <h4 style={titlefont}>악세서리 : </h4>
            {dress2.acc[index3]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>신발 : </h4>
            {dress2.shose[index7]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>가방 : </h4>
            {dress2.bag[index3]}
          </div>
        </div>
        <div style={blank}>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>수분 보충을 충분히 진행해주세요</span>
          </div>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>외출 시 썬크림을 발라주세요</span>
          </div>
        </div>
      </div>
    );
  }

  if (weather > 20) {
    return (
      <div style={back}>
        <h4 style={nowCody}>NOW CODY</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row wrap",
          }}
        >
          <div style={frame}>
            <h4 style={titlefont}>상의 : </h4>
            {dress3.top[index3]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>하의 : </h4>
            {dress3.pants[index6]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>아우터 : </h4>
            {dress3.outer[index2]}
          </div>
          <div style={frame2}>
            <h4 style={titlefont}>악세서리 : </h4>
            {dress3.acc[index2]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>신발 : </h4>
            {dress3.shose[index8]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>가방 : </h4>
            {dress3.shose[index8]}
          </div>
        </div>
        <div style={blank}>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>수분 보충을 충분히 진행해주세요</span>
          </div>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>외출 시 썬크림을 발라주세요</span>
          </div>
        </div>
      </div>
    );
  }

  if (weather > 17) {
    return (
      <div style={back}>
        <h4 style={nowCody}>NOW CODY</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row wrap",
          }}
        >
          <div style={frame}>
            <h4 style={titlefont}>상의 : </h4>
            {dress4.top[index3]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>하의 : </h4>
            {dress4.pants[index6]}
          </div>

          <div style={frame}>
            <h4 style={titlefont}>아우터 : </h4>
            {dress4.outer[index5]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>악세서리 : </h4>
            {dress4.acc[index1]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>신발 : </h4>
            {dress4.acc[index1]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>가방 : </h4>
            {dress4.acc[index1]}
          </div>
        </div>
        <div style={blank}>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>수분 보충을 충분히 진행해주세요</span>
          </div>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>외출 시 썬크림을 발라주세요</span>
          </div>
        </div>
      </div>
    );
  }

  if (weather > 12) {
    return (
      <div style={back}>
        <h4 style={nowCody}>NOW CODY</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row wrap",
          }}
        >
          <div style={frame}>
            <h4 style={titlefont}>상의 </h4>
            {dress5.top[index4]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>하의 </h4>
            {dress5.pants[index6]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>아우터 </h4>
            {dress5.outer[index3]}
          </div>
          <div style={frame2}>
            <h4 style={titlefont}>악세서리 </h4>
            {dress5.acc[index2]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>신발 </h4>
            {dress5.shose[index8]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>가방 </h4>
            {dress5.bag[index3]}
          </div>
        </div>

        <div style={blank}>
          <div style={tip}>
            <span style={tip3}>tip</span>
            {tip01.tip001[index4]}
          </div>
          <div style={tip}>
            <span style={tip3}>tip</span>
            {tip01.tip002[index4]}
          </div>
        </div>

        {/* <div style={blank2}></div> */}
      </div>
    );
  }

  if (weather > 10) {
    return (
      <div style={back}>
        <h4 style={nowCody}>NOW CODY</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row wrap",
          }}
        >
          <div style={frame}>
            <h4 style={titlefont}>상의 : </h4>
            {dress6.top[index3]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>하의 : </h4>
            {dress6.pants[index6]}
          </div>

          <div style={frame}>
            <h4 style={titlefont}>아우터 : </h4>
            {dress6.outer[index2]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>악세서리 </h4>
            {dress6.acc[index1]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>신발 </h4>
            {dress6.shose[index8]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>가방 </h4>
            {dress6.shose[index8]}
          </div>
        </div>
        <div style={blank}>
          <div style={tip}>
            <span style={tip3}>tip</span>
            {tip01.tip001[index4]}
          </div>
          <div style={tip}>
            <span style={tip3}>tip</span>
            {tip01.tip002[index4]}
          </div>
        </div>
      </div>
    );
  }

  if (weather > 5) {
    return (
      <div style={back}>
        <h4 style={nowCody}>NOW CODY</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row wrap",
          }}
        >
          <div style={frame}>
            <h4 style={titlefont}>상의 : </h4>
            {dress7.top[index3]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>하의 : </h4>
            {dress7.pants[index6]}
          </div>

          <div style={frame}>
            <h4 style={titlefont}>아우터 : </h4>
            {dress7.outer[index3]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>악세서리 : </h4>
            {dress7.acc[index1]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>신발 : </h4>
            {dress7.shose[index8]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>가방 : </h4>
            {dress7.shose[index8]}
          </div>
        </div>
        <div style={blank}>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>수분 보충을 충분히 진행해주세요</span>
          </div>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>외출 시 썬크림을 발라주세요</span>
          </div>
        </div>
      </div>
    );
  }

  if (weather < 6) {
    return (
      <div style={back}>
        <h4 style={nowCody}>NOW CODY</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexFlow: "row wrap",
          }}
        >
          <div style={frame}>
            <h4 style={titlefont}>상의 : </h4>
            {dress8.top[index3]}
          </div>
          <div style={frame}>
            <h4 style={titlefont}>하의 : </h4>
            {dress8.pants[index6]}
          </div>

          <div style={frame}>
            <h4 style={titlefont}>아우터 : </h4>
            {dress8.outer[index1]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>악세서리 : </h4>
            {dress8.acc[index8]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>신발 : </h4>
            {dress8.shose[index8]}
          </div>

          <div style={frame2}>
            <h4 style={titlefont}>가방 : </h4>
            {dress8.shose[index8]}
          </div>
        </div>
        <div style={blank}>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>수분 보충을 충분히 진행해주세요</span>
          </div>
          <div style={tip}>
            <span style={tip3}>tip</span>
            <span style={tip2}>외출 시 썬크림을 발라주세요</span>
          </div>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Coordi;
