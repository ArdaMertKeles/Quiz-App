import React, { useEffect, useState } from "react";
import './style.css'
import QuestionContainer from "./components/QuestionContainer";
import TimeBar from "./components/TimeBar";
import AnswerContainer from "./components/AnswerContainer";
import RestartMenu from "./components/RestartMenu";
import Chapters from "./components/Chapters";
import Congrats from "./components/Congrats";
import Jokers from "./components/Jokers";
import CrowdAnswer from "./components/CrowdAnswer";
import axios from "axios";
// Sounds
import useSound from 'use-sound'
import claps from './sounds/claps2.mp3'
import lose from './sounds/lose.mp3'
import timeEnd from './sounds/timeend.mp3'

function App() {

  // Oyun başlamadan kurallar listesi yapabilirsin direkt başlamaktan ziyade (Opsiyonel)



  const [data, setData] = useState()
  let [date, setDate] = useState(30)
  let [mark, setMark] = useState(0)
  const [lock, setLock] = useState(false)
  const [next, setNext] = useState(false)
  let [easyIndex, setEasyIndex] = useState(0)
  let [mediumIndex, setMediumIndex] = useState(0)
  let [interIndex, setInterIndex] = useState(0)
  let [expertIndex, setExpertIndex] = useState(0)
  let [chapter,setChapter] = useState('Easy')
  // Sound Effects
  const [correctSound] = useSound(claps)
  const [loseSound] = useSound(lose)
  const [timeEndSound] = useSound(timeEnd)
  
  // Data fetching
  const axiosData = async () => {
    if(interIndex === 3 && expertIndex <= 1){
      const response = await axios.get('http://localhost:3002/expertlevel')
      var randomIndex = Math.floor(Math.random() * response.data.length)
      setData(response.data[randomIndex])
    }
    if(mediumIndex === 5 && interIndex <= 3 && expertIndex === 0){
      const response = await axios.get('http://localhost:3002/interlevel')
      var randomIndex = Math.floor(Math.random() * response.data.length)
      setData(response.data[randomIndex])
    }
    if(easyIndex === 7 && mediumIndex <=5 && interIndex === 0){
      const response = await axios.get('http://localhost:3002/mediumlevel')
      var randomIndex = Math.floor(Math.random() * response.data.length)
      setData(response.data[randomIndex])
    }
    if (easyIndex <= 7 && mediumIndex === 0) {
      const response = await axios.get('http://localhost:3002/easylevel')
      var randomIndex = Math.floor(Math.random() * response.data.length)
      setData(response.data[randomIndex])
      
    }

  };
  useEffect(() => {
    axiosData()
  }, [setData])


  // Chapters


  function index() {
    if (interIndex === 3 && expertIndex < 2) {
      setExpertIndex(++expertIndex)
      setChapter('Expert')
    } else if (expertIndex === 1) {
      setExpertIndex(1)
    }
    if (mediumIndex === 5 && interIndex < 3) {
      setInterIndex(++interIndex)
      setChapter('Intermediate')
    } else if (interIndex === 3) {
      setInterIndex(3)
    }
    if (easyIndex === 7 && mediumIndex < 5) {
      setMediumIndex(++mediumIndex)
      setChapter('Medium')
    } else if (mediumIndex === 5) {
      setMediumIndex(5)
    }
    if (easyIndex < 7) {
      setEasyIndex(++easyIndex)
    } else {
      setEasyIndex(7)
    }
  }


  // 50:50 Joker
  const [halfDisabled,setHalfDisabled] = useState(false)
    const halfJoker = () =>{
      let answer = data.ans
        let ans1 = document.getElementById('ans1')
        let ans2 = document.getElementById('ans2')
        let ans3 = document.getElementById('ans3')
        let ans4 = document.getElementById('ans4')
        if(answer === 1){
            console.log(1)
            ans2.style.opacity ='0'
            ans4.style.opacity ='0'
            ans2.style.cursor = 'default'
            ans4.style.cursor = 'default'
          }else if(answer === 2){
            ans1.style.opacity ='0'
            ans4.style.opacity ='0'
            ans1.style.cursor ='default'
            ans4.style.cursor ='default'
            console.log(2)
          }else if(answer === 3){
            ans1.style.opacity ='0'
            ans2.style.opacity ='0'
            ans1.style.cursor ='default'
            ans2.style.cursor = 'default'
            console.log(3)
          }else if(answer === 4){
            ans3.style.opacity ='0'
            ans1.style.opacity ='0'
            ans1.style.cursor ='default'
            ans3.style.cursor ='default'
            console.log(4)
          }
          setHalfDisabled(true)
    }
    function resetHalf(){
      let ans1 = document.getElementById('ans1')
      let ans2 = document.getElementById('ans2')
      let ans3 = document.getElementById('ans3')
      let ans4 = document.getElementById('ans4')
      ans1.style.opacity ='1'
      ans2.style.opacity ='1'
      ans3.style.opacity ='1'
      ans4.style.opacity ='1'
      ans1.style.cursor ='pointer'
      ans2.style.cursor ='pointer'
      ans3.style.cursor ='pointer'
      ans4.style.cursor ='pointer'
    }

  // Crowd Joker
  const [crowdDisabled, setCrowdDisabled] = useState(false)
  const [aAnswer,setAAnswer] = useState()
  const [bAnswer,setBAnswer] = useState()
  const [cAnswer,setCAnswer] = useState()
  const [dAnswer,setDAnswer] = useState()
  function resetCrowd(){
    let crowdAnswer = document.getElementById('crowdAnswer')
    crowdAnswer.style.transform = 'translateX(-400px)'
  }
    const crowdJoker = () =>{
      let answer = data.ans
      let crowdAnswer = document.getElementById('crowdAnswer')
      let aCol = document.getElementById('aColumn')
      let bCol = document.getElementById('bColumn')
      let cCol = document.getElementById('cColumn')
      let dCol = document.getElementById('dColumn')
      crowdAnswer.style.transform = 'translateX(0)'
      if(answer === 1){
        aCol.style.height = '55%'
        bCol.style.height = '21%'
        cCol.style.height = '14%'
        dCol.style.height = '10%'
        setAAnswer('55%')
        setBAnswer('21%')
        setCAnswer('14%')
        setDAnswer('10%')
      }else if(answer === 2){
        aCol.style.height = '6%'
        bCol.style.height = '64%'
        cCol.style.height = '17%'
        dCol.style.height = '13%'
        setAAnswer('6%')
        setBAnswer('64%')
        setCAnswer('17%')
        setDAnswer('13%')
      }else if(answer === 3){
        aCol.style.height = '1%'
        bCol.style.height = '19%'
        cCol.style.height = '58%'
        dCol.style.height = '22%'
        setAAnswer('1%')
        setBAnswer('19%')
        setCAnswer('58%')
        setDAnswer('22%')
      }else if(answer === 4){
        aCol.style.height = '3%'
        bCol.style.height = '27%'
        cCol.style.height = '11%'
        dCol.style.height = '59%'
        setAAnswer('3%')
        setBAnswer('27%')
        setCAnswer('11%')
        setDAnswer('59%')
      }
      setCrowdDisabled(true)
    }

    // Pass Joker
    const [passDisabled,setPassDisabled] = useState(false)
    const passJoker = () =>{
      axiosData();
      setNext(true)
      setPassDisabled(true)
    }

    // TimeJoker

    const [hourDisabled, setHourDisabled] = useState(false)
    const timeJoker = () =>{
      setDate(30)
      setMark(0)
      setHourDisabled(true)
    }

  // Correct Answer
  const correctAnswer = () => {
    axiosData();
    index();
    setNext(true)
    resetHalf()
    resetCrowd()
    setDate(30)
    setMark(0)
  }

  // Restart
  const restartMenu = () => {
    let restart = document.getElementById('restart')
    restart.style.transform = 'translateX(0)'
  }
  const reset = () => {
    window.location.reload();
  }

  const congrats = () =>{
      let restart = document.getElementById('congrat')
    restart.style.transform = 'translateX(0)'
  }
  if(expertIndex === 2){
    congrats()
  }


  // TimeBar
  function timer() {
    if (next) {
      setMark(0);
      setDate(30);
      setNext(false)
    }
    if (date > 0 && !next && !lock) {
      setDate(--date)
      setMark(++mark)
    }
    if (date === 0) {
      restartMenu();
      setLock(true)
    }
  }
  useEffect(() => {
    let intervalId = setInterval(timer, 1000)
    let absolute = document.getElementById('absolute')
    let percentage = mark * 3.2 + '%'
    absolute.style.width = (percentage)
    return (() => {
      clearInterval(intervalId)
    })
  }, [next, date, setDate, setMark])
  if(date === 0){
    timeEndSound()
  }




  return (
    <div className='wrapper'>
      {data && <Jokers halfClick={halfJoker} halfDisabled={halfDisabled} crowdClick={crowdJoker} crowdDisabled={crowdDisabled}
       passClick={passJoker} passDisabled={passDisabled} hourClick={timeJoker} hourDisabled={hourDisabled} />}
      {data && <CrowdAnswer aAnswer={aAnswer} bAnswer={bAnswer} cAnswer={cAnswer} dAnswer={dAnswer} />}
      <RestartMenu reset={reset} />
      <Congrats reset={reset} />
      <Chapters chapter={chapter} easyIndex={easyIndex} mediumIndex={mediumIndex} interIndex={interIndex} expertIndex={expertIndex} />
      {data && <QuestionContainer question={data.question} />}
      <TimeBar date={date} />
      {data && <AnswerContainer loseSound={loseSound} correctSound={correctSound} lock={lock} setLock={setLock}
       restartMenu={restartMenu} correctAnswer={correctAnswer} answer={data.ans}
        answer1={data.answer1} answer2={data.answer2} answer3={data.answer3} answer4={data.answer4} />}
    </div>
  );
}

export default App;
