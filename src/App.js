import React,{useState} from 'react';
import './App.css';
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Popup from './components/Popup';
export default function App() {

  const questions = [
    {
      questionText: 'A pair of integers whose difference is -5',
      answerOptions: [
        { answerText: '5 and -5', isCorrect: false },
        { answerText: '5 and 0', isCorrect: false },
        { answerText: '0 and -5', isCorrect: true },
        { answerText: '5 and 5', isCorrect: false },
      ],
    },
    {
      questionText: 'A pair of integers whose sum is 0',
      answerOptions: [
        { answerText: '0 and 1', isCorrect: false },
        { answerText: '0 and 5', isCorrect: false },
        { answerText: '5 and -5', isCorrect: true },
        { answerText: '5 and 5', isCorrect: false },
      ],
    },
    {
      questionText: 'In a quiz, team A scored – 50, 20, 0 and team B scored 10, 0, – 40 in three successive rounds. Which team scored more? Can we say that we can add integers in any order?',
      answerOptions: [
        { answerText: 'Team A scored more. Yes, we can add integers in any order', isCorrect: false },
        { answerText: 'Team B scored more. Yes, we can add integers in any order', isCorrect: true },
        { answerText: 'Team A scored more. No, we cannot add integers in any order', isCorrect: false },
        { answerText: 'Team B scored more. No, we cannot add integers in any order', isCorrect: false },
      ],
    },
    {
      questionText: '(-5) + (-8) = (-8) + (?)',
      answerOptions: [
        { answerText: '5', isCorrect: false },
        { answerText: '8', isCorrect: false },
        { answerText: '-5', isCorrect: true },
        { answerText: 'None of these', isCorrect: false },
      ],
    },
    {
      questionText: '(– 4) + [15 + (–3)] = [– 4 + 15] + ...',
      answerOptions: [
        { answerText: '– 3', isCorrect: true },
        { answerText: '– 4', isCorrect: false },
        { answerText: '– 7', isCorrect: false },
        { answerText: 'None of these', isCorrect: false },
      ],
    },
    {
      questionText: 'Starting from (–1) × 5, tell which of them are showing some pattern to show (–1) × (–1) = 1',
      answerOptions: [
        { answerText: '(–1) × 5 = –5, (–1) × (–5) = 5, (–1) × (–1) = 1', isCorrect: true },
        { answerText: '(–1) × 5 = –5, (–1) × (–5) = 5, (–1) × (–1) = –1', isCorrect: false },
        { answerText: '(–1) × 5 = 5, (–1) × (–5) = –5, (–1) × (–1) = 1', isCorrect: false },
        { answerText: '(–1) × 5 = 5, (–1) × (–5) = –5, (–1) × (–1) = –1', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is true?',
      answerOptions: [
        { answerText: '18 × [7 + (–3)] = [18 × 7] + [18 × (–3)]', isCorrect: true },
        { answerText: '18 × [7 + (–3)] = [18 × (-7)] + [18 × (–3)]', isCorrect: false },
        { answerText: '18 × [7 + (–3)] = [18 × 7] - [18 × (–3)]', isCorrect: false },
        { answerText: '18 × [7 + (–3)] = [18 × 7] - [18 × (3)]', isCorrect: false },
      ],
    },
    {
      questionText: 'Determine the integer whose product with (–1) is 0 and -40 ',
      answerOptions: [
        { answerText: '0 and 40', isCorrect: true },
        { answerText: '0 and -40', isCorrect: false },
        { answerText: '40 and -40', isCorrect: false },
        { answerText: 'None of these', isCorrect: false },
      ],
    },
    {
      questionText: 'Find each of the following products: (–12) × (–11) × (10) and (–3) × (–6) × (–2) × (–1) and (–15) × 0 × (–18)',
      answerOptions: [
        { answerText: '1320, 36, -1', isCorrect: false },
        { answerText: '1320, -36, 0', isCorrect: false },
        { answerText: '1320, 36, 0', isCorrect: true },
        { answerText: 'None of these', isCorrect: false },
      ],
    },
    {
      questionText: 'In a class test (+ 4) marks are given for every correct answer and (–1) marksare given for every incorrect answer and no marks for not attempting any question. (i) Radhika scored 30 marks. If she has got 12 correct answers, how many questions has she attempted incorrectly? (ii) Mohini scores –2 marks in this test, though she has got 3 correct answers. How many questions has she attempted incorrectly?',
      answerOptions: [
        { answerText: '(i) 12 (ii) 9', isCorrect: false },
        { answerText: '(i) 9 (ii) 14', isCorrect: false },
        { answerText: '(i) 12 (ii) 14', isCorrect: true },
        { answerText: '(i) 9 (ii) 9', isCorrect: false },
      ],
    },
    {
      questionText: 'An elevator descends into a mine shaft at the rate of 5 m/min. If the descent starts from 5 m below the ground level, how long will it take to reach – 350 m.',
      answerOptions: [
        { answerText: '70 min', isCorrect: false },
        { answerText: '69 min', isCorrect: true },
        { answerText: '68 min', isCorrect: false },
        { answerText: '67 min', isCorrect: false },
      ],
    },
    {
      questionText: 'A submarine was situated at a depth of 800 m below sea level. If it ascends at the rate of 10 m per minute, how long will it take to reach the sea level?',
      answerOptions: [
        { answerText: '82 min', isCorrect: false },
        { answerText: '81 min', isCorrect: false },
        { answerText: '79 min', isCorrect: false },
        { answerText: '80 min', isCorrect: true },
      ],
    },
    {
      questionText: 'Evaluate each of the following: (–30) ÷ 10 and [(– 6) + (-5))] ÷ [(–2) + 1]',
      answerOptions: [
        { answerText: '-3, -11', isCorrect: false },
        { answerText: '-3, 11', isCorrect: true },
        { answerText: '3, -11', isCorrect: false },
        { answerText: '3, 11', isCorrect: false },
      ],
    },
    {
      questionText: 'In a class of 40 students 1/5 of the total number of studetns like to study English, 2/5 of the total number like to study Mathematics and the remaining students like to study Science. (i) How many students like to study English? (ii) How many students like to study Mathematics? (iii) What fraction of the total number of students like to study Science?',
      answerOptions: [
        { answerText: '(i) 8 (ii) 16 (iii) 1/5', isCorrect: false },
        { answerText: '(i) 8 (ii) 16 (iii) 2/5', isCorrect: true },
        { answerText: '(i) 8 (ii) 16 (iii) 3/5', isCorrect: false },
        { answerText: '(i) 8 (ii) 16 (iii) 4/5', isCorrect: false },
      ],
    },
    {
      questionText: 'Multiply and express as a mixed fraction: (i) 3 1/2 × 2 1/3 (ii) 2 2/3 × 1 1/2 (iii) 3 1/4 × 2 1/2',
      answerOptions: [
        { answerText: '(i) 8 1/6 (ii) 4 1/6 (iii) 8 1/8', isCorrect: false },
        { answerText: '(i) 8 1/6 (ii) 4  (iii) 8 1/4', isCorrect: false },
        { answerText: '(i) 8 1/6 (ii) 4  (iii) 8 1/8', isCorrect: true },
        { answerText: '(i) 8 1/6 (ii) 4 1/6 (iii) 8 1/3', isCorrect: false },
      ],
    },
    {
      questionText: 'Divide and express as a mixed fraction: (i) 5 1/2 ÷ 2 1/3 (ii) 4 1/2 ÷ 2 1/3 (iii) 3 1/2 ÷ 2 1/3',
      answerOptions: [
        { answerText: '(i) 2 1/6 (ii) 2 1/6 (iii) 2 1/6', isCorrect: false },
        { answerText: '(i) 2 1/6 (ii) 2 1/6 (iii) 2 1/3', isCorrect: false },
        { answerText: '(i) 2 1/6 (ii) 2 1/6 (iii) 2 1/2', isCorrect: true },
        { answerText: '(i) 2 1/6 (ii) 2 1/6 (iii) 2 1/4', isCorrect: false },
      ],
    },
    {
      questionText:'The side of an equilateral triangle is 3.5 cm. Find its perimeter',
      answerOptions: [
        { answerText: '10.5 cm', isCorrect: true },
        { answerText: '11.5 cm', isCorrect: false },
        { answerText: '12.5 cm', isCorrect: false },
        { answerText: '13.5 cm', isCorrect: false },
      ],
    },
    {
      questionText: 'Find the reciprocal of each of the following fractions.(i) 3/4 (ii) 2/3 (iii) 5/2 (iv) 7/5 (v) 3/1 (vi) 0/5',
      answerOptions: [
        { answerText: '(i) 4/3 (ii) 3/2 (iii) 2/5 (iv) 5/7 (v) 1/3 (vi) 5/0', isCorrect: false },
        { answerText: '(i) 4/3 (ii) 3/2 (iii) 2/5 (iv) 5/7 (v) 1/3 (vi) 0/5', isCorrect: false },
        { answerText: '(i) 4/3 (ii) 3/2 (iii) 2/5 (iv) 5/7 (v) 1/3 (vi) 5/0', isCorrect: true },
        { answerText: '(i) 4/3 (ii) 3/2 (iii) 2/5 (iv) 5/7 (v) 1/3 (vi) 0/5', isCorrect: false },
      ],
    },
    {
      questionText: ' Classify the reciprocals as proper fractions, improper fractions and whole numbers (i) 4/3 (ii) 3/2 (iii) 2/5 (iv) 5/7 (v) 1 ',
      answerOptions: [
        { answerText: '(i) proper (ii) proper (iii) proper (iv) improper (v) whole number', isCorrect: false },
        { answerText: '(i) proper (ii) proper (iii) improper (iv) proper (v) proper', isCorrect: false },
        { answerText: '(i) proper (ii) proper (iii) improper (iv) improper (v) whole number', isCorrect: true },
        { answerText: '(i) proper (ii) proper (iii) improper (iv) improper (v) proper', isCorrect: false },
      ],
    },
    {
      questionText: 'Vidya and Pratap went for a picnic. Their mother gave them a water bottle that contained 5 litres of water. Vidya consumed 10/25 of the water. Pratap consumed the remaining water. (i) How much water did Vidya drink? (ii) What fraction of the total quantity of water did Pratap drink?',
      answerOptions: [
        { answerText: '(i) 2 litres (ii) 15/25', isCorrect: false },
        { answerText: '(i) 2 litres (ii) 10/25', isCorrect: false },
        { answerText: '(i) 3 litres (ii) 10/25', isCorrect: true },
        { answerText: '(i) 3 litres (ii) 15/25', isCorrect: false },
      ],
    },
    {
      questionText: 'Multiply and reduce to lowest form and convert into a mixed fraction: (i) 7x3/5 (ii) 3x2/3 ',
      answerOptions: [
        { answerText: '(i) 4 1/5 (ii) 2 1/3', isCorrect: false },
        { answerText: '(i) 4 1/5 (ii) 2', isCorrect: false },
        { answerText: '(i) 4 2/5 (ii) 2', isCorrect: true },
        { answerText: '(i) 4 1/5 (ii) 2 1/4', isCorrect: false },
      ],
    },
    {
      questionText: 'A car runs 16 km using 1 litre of petrol. How much distance will it cover using 3 2/4 litres of petrol',
      answerOptions: [
        { answerText: '48 km', isCorrect: true },
        { answerText: '49 km', isCorrect: false },
        { answerText: '50 km', isCorrect: false },
        { answerText: '51 km', isCorrect: false },
      ],
    },
    {
      questionText: 'Saili plants 3 saplings, in a row, in her garden. The distance between two adjacentsaplings is 7/8 m. Find the distance between the first and the last sapling.',
      answerOptions: [
        { answerText: '2 1/8 m', isCorrect: false },
        { answerText: '2 2/8 m', isCorrect: false },
        { answerText: '2 3/8 m', isCorrect: true },
        { answerText: '2 4/8 m', isCorrect: false },
      ],
    },
    {
      questionText: 'Find the average of 4.2, 3.8 and 7.6',
      answerOptions: [
        { answerText: '5.2', isCorrect: true },
        { answerText: '5.3', isCorrect: false },
        { answerText: '5.4', isCorrect: false },
        { answerText: '5.5', isCorrect: false },
      ],
    },
    {
      questionText: 'Each side of a regular polygon is 2.5 cm in length. The perimeter of the polygon is 12.5cm. How many sides does the polygon have?',
      answerOptions: [
        { answerText: '5', isCorrect: true },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: false },
        { answerText: '8', isCorrect: false },
      ],
    },
  ];

  // const [buttonPopup, setButtonPopup] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // const handlePopup = (isCorrect) => {
  //   if (isCorrect) {
  //   setButtonPopup(true);
  // }

const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    // alert("Correct Answer");
    toast("Correct Answer", { type: "success" });
    setScore(score + 1);

    // setButtonPopup(true);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						  <div>  
                {/* <button onClick={() => {handlePopup(answerOption.isCorrect)}}></button> */}
                {/* <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                  <h3>Congratulation , Your answer is correct ! </h3>
                </Popup> */}
                <button onClick={() => {handleAnswerOptionClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
                <ToastContainer />
              </div>
            ))}
					</div>
				</>
			)}
		</div>
	);
}



  





