import "./detailedPage.css";
import React, { useEffect, useState } from "react";
import { Form, ProgressBar, Alert } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
const DetailedPage = () => {
	const [Response1, setResponse1] = useState<(boolean | string)[]> ([false, false, false, false, ""])
	const [Response2, setResponse2] = useState<(boolean | string)[]> ([false, false, false, false, ""])
	const [Response3, setResponse3] = useState<(boolean | string)[]> ([false, false, false, false, ""])
	const [Response4, setResponse4] = useState<(boolean | string)[]> ([false, false, false, false, ""])
	const [Response5, setResponse5] = useState<(boolean | string)[]> ([false, false, false, false, ""])
	const [Response6, setResponse6] = useState<(boolean | string)[]> ([false, false, false, false, ""])
	const [Response7, setResponse7] = useState<(boolean | string)[]> ([false, false, false, false, ""])
	console.log(Response1)
	const [otherSelected, setOtherSelected] = useState<boolean[]>([false, false, false, false, false,false, false]); //correlates to the the "other" text inputs
	function handleRadio(option:string, questionNum:number, index:number, otherIndex:number) { 
		const newOtherStatus = [...otherSelected];
		const responseState = questionNum === 1 ? Response1 :
        questionNum === 2 ? Response2 :
		questionNum === 3 ? Response3 :
        questionNum === 4 ? Response4 :
        questionNum === 5 ? Response5 :
        questionNum === 6 ? Response6 :
        questionNum === 7 ? Response7 : [];
    	const newResponse = [...responseState];
		if (option === "Other:") {
			newOtherStatus[otherIndex] = true;
			setOtherSelected(newOtherStatus);	
			// Reset all options for this question to false
			newResponse.fill(false, 0, 4);
			} 
		else {
			newOtherStatus[otherIndex] = false;
			setOtherSelected(newOtherStatus);
			// Reset all options for this question to false
			newResponse.fill(false,0,4);
			// Set the selected option to true
			newResponse[index] = true;
		}
		switch(questionNum){
			case 1:
				setResponse1(newResponse);
				break;
			case 2:
				setResponse2(newResponse);
				break;
			case 3:
				setResponse3(newResponse);
				break;		
			case 4:
				setResponse4(newResponse);
				break;
			case 5:
				setResponse5(newResponse);
				break;
			case 6:
				setResponse6(newResponse);
				break;
			case 7:
			setResponse7(newResponse);
				break;
		}
	}
	function handleOtherSelect(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, questionNum: number, index:number){ //updates the text input box
		const responseState = questionNum === 1 ? Response1 :
            questionNum === 2 ? Response2 :
            questionNum === 3 ? Response3 :
            questionNum === 4 ? Response4 :
            questionNum === 5? Response5 :
            questionNum === 6 ? Response6 :
            questionNum === 7 ? Response7 : [];
    const newResponse = [...responseState];
		newResponse[index] = event.target.value;
		switch (questionNum) {
			case 1:
				setResponse1(newResponse);
				break;
			case 2:
				setResponse2(newResponse);
				break;	
			case 3:
				setResponse3(newResponse);
				break;
			case 4:
				setResponse4(newResponse);
				break;
			case 5:
				setResponse5(newResponse);
				break;
			case 6:
				setResponse6(newResponse);
				break;
			case 7:
				setResponse7(newResponse);
				break;
			default:
				break;
		}
	}

	function updateProgress(Response1: (boolean| string)[], Response2: (boolean| string)[], Response3: (boolean| string)[], Response4: (boolean| string)[], Response5: (boolean| string)[],
		Response6: (boolean| string)[], Response7: (boolean| string)[]): number {
		const responses = [Response1, Response2, Response3, Response4, Response5, Response6, Response7]
		let completed: number = 0;
		responses.forEach(response => {
			if(response.some((option:boolean | string) => {
				if(typeof option === "boolean" && option === true){
					return true;
				}
				if(typeof option === "string" && option.trim().length > 0){
					return true;
				}
				return false
			}))
			completed +=1;
		})
		return completed;
	}
	let answered = updateProgress(Response1, Response2, Response3, Response4, Response5, Response6, Response7);

    const [allow, setAllow] = useState<boolean>(false);
	const [alert, setAlert] = useState<boolean>(false);
   
	useEffect(() => {
       setAllow(answered === 7);
	   setAlert(answered === 7)
    }, [answered]);
	return (<>
		<style>{`
        .question-box {
		display:flex;
		gap:100px	
        }
		h3 {
		margin-left: 25px
		}
		.answer-box{
			margin-left: -100px	
			}
        `}</style>
		<div className="info-portion">
			<h1>
				Detailed Page Stuff
			</h1>
			<>
				Welcome! For this quiz, you will answer the statements by 
				choosing one of the corresponding multiple choice options
				 below! You will be able to click the "Answer" which will 
				allow you to see the results of you future career.
			</>
		</div>
		<div style={{textAlign:"center"}}>
		<Button size="lg" disabled={!allow}>Answer</Button>
		<ProgressBar animated variant="success" now={answered} max={7} style={{marginLeft:"100px", marginRight:"100px", marginTop:"25px"}}></ProgressBar>
		<Alert show={alert} variant="success" onClose={() => setAlert(false)} dismissible>
				<p>You've completed all the questions, you can now click the answer button to get your results!</p>
			</Alert>
		</div>
		<h3>Question 1</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q1-Option1"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 1, 0, 0)}/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option2"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 1,1, 0)}/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option3"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder",1, 2, 0)}/>
			<Form.Check
				inline
				type="radio"
				id="q1-Option4"
				label="holder"
				name="question1"
				onChange={() => handleRadio("holder", 1, 3, 0)}/>
			<Form.Check
					inline
					type="radio"
					id="q1-Option5"
					label="Other:"
					name="question1"
					onChange={() => handleRadio("Other:",1,  4, 0)}/>
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(Response1[4])}
					onChange={(event) => handleOtherSelect(event,1, 4)}
					disabled={!otherSelected[0]}		/>
				</div>
			</div>
			<h3>Question 2</h3>
			<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q2-Option1"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder",2,  0, 1)}/>
			<Form.Check
				inline
				type="radio"
				id="q2-Option2"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder",2,  1, 1)} />
			<Form.Check
				inline
				type="radio"
				id="q2-Option3"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder",2,  2, 1)} />
			<Form.Check
				inline
				type="radio"
				id="q2-Option4"
				label="holder"
				name="question2"
				onChange={() => handleRadio("holder",2,  3, 1)} />
			<Form.Check
					inline
					type="radio"
					id="q2-Option5"
					label="Other:"
					name="question2"
					onChange={() => handleRadio("Other:",2, 4, 1)}/>	
				<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(Response2[4])}
					onChange={(event) => handleOtherSelect(event,2, 4)}
					disabled={!otherSelected[1]}	/>
				</div>
			</div>
		<h3>Question 3</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q3-Option1"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder", 3, 0, 2)} />
			<Form.Check
				inline
				type="radio"
				id="q3-Option2"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder", 3, 1, 2)} />
			<Form.Check
				inline
				type="radio"
				id="q3-Option3"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder",3, 2, 2)} />
			<Form.Check
				inline
				type="radio"
				id="q3-Option4"
				label="holder"
				name="question3"
				onChange={() => handleRadio("holder",3,3, 2)} />
			<Form.Check
					inline
					type="radio"
					id="q3-Option5"
					label="Other:"
					name="question3"
					onChange={() => handleRadio("Other:",3, 4 , 2)} />		
				<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(Response3[4])}
					onChange={(event) => handleOtherSelect(event,3, 4)}
					disabled={!otherSelected[2]}		
						/>
				</div>
			</div>
		<h3>Question 4</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q4-Option1"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 4, 0, 3)} />
			<Form.Check
				inline
				type="radio"
				id="q4-Option2"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 4, 1, 3)}/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option3"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 4, 2, 3)}/>
			<Form.Check
				inline
				type="radio"
				id="q4-Option4"
				label="holder"
				name="question4"
				onChange={() => handleRadio("holder", 4, 3, 3)} />
			<Form.Check
					inline
					type="radio"
					id="q4-Option5"
					label="Other:"
					name="question4"
					onChange={() => handleRadio("Other:", 4, 4, 3)} />
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(Response4[4])}
					onChange={(event) => handleOtherSelect(event,4, 4)}
					disabled={!otherSelected[3]}		/>
				</div>
			</div>
		<h3>Question 5</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q5-Option1"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 5, 0, 4)} />
			<Form.Check
				inline
				type="radio"
				id="q5-Option2"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 5, 1, 4)}	 />
			<Form.Check
				inline
				type="radio"
				id="q5-Option3"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 5, 2, 4)} />
			<Form.Check
				inline
				type="radio"
				id="q5-Option4"
				label="holder"
				name="question5"
				onChange={() => handleRadio("holder", 5, 3, 4)} />
			<Form.Check
					inline
					type="radio"
					id="q5-Option5"
					label="Other:"
					name="question5"
					onChange={() => handleRadio("Other:", 5, 4, 4)} />
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(Response5[4])}
					onChange={(event) => handleOtherSelect(event,5, 4)}
					disabled={!otherSelected[4]}		
						/>
				</div>
			</div>
		<h3>Question 6</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q6-Option1"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 6, 0, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option2"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 6, 1, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option3"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 6, 2, 5)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q6-Option4"
				label="holder"
				name="question6"
				onChange={() => handleRadio("holder", 6, 3, 5)}			/>
			<Form.Check
					inline
					type="radio"
					id="q6-Option5"
					label="Other:"
					name="question6"
					onChange={() => handleRadio("Other:", 6, 4, 5)}			/>
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(Response6[4])}
					onChange={(event) => handleOtherSelect(event,6, 4)}
					disabled={!otherSelected[5]}		/>
				</div>
			</div>
		<h3>Question 7</h3>
		<div className="question-box">
			<Form.Check
				inline
				type="radio"
				id="q7-Option1"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 7, 0, 6)}
			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option2"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 7, 1, 6)}			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option3"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 7, 2, 6)}			/>
			<Form.Check
				inline
				type="radio"
				id="q7-Option4"
				label="holder"
				name="question7"
				onChange={() => handleRadio("holder", 7, 3, 6)}			/>
			<Form.Check
					inline
					type="radio"
					id="q7-Option5"
					label="Other:"
					name="question7"
					onChange={() => handleRadio("Other:", 7, 4, 6)}			/>
			<div className="answer-box"><Form.Control
					type="text"
					placeholder="Enter your answer"
					value={String(Response7[4])}
					onChange={(event) => handleOtherSelect(event,7, 4)}
					disabled={!otherSelected[6]}		/>
				</div>
			</div>
	</>
	);
};
export default DetailedPage;