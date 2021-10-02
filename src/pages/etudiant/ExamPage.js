import React from 'react'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { getAllQuestionsApi } from '../../redux/actions/questions.actions'
import { ANSWER_QUESTION } from '../../redux/actionTypes'
import './styles.css'

const LoadingDots = () => {

    return (<svg id="dots" width="132px" height="58px" viewBox="0 0 132 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
        <title>dots</title>
        <defs />
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" >
            <g id="dots" fill="#A3A3A3">
                <circle id="dot1" cx={25} cy={30} r={10} />
                <circle id="dot2" cx={65} cy={30} r={10} />
                <circle id="dot3" cx={105} cy={30} r={10} />
            </g>
        </g>
    </svg>
    )
}
const ExamPage = () => {
    const [loading, setloading] = useState(true);
    const [finished, setFinished] = useState(false);

    const [resp, setResp] = useState("");

    const { course } = useParams();
    const dispatch = useDispatch();
    const { list, editQuestions } = useSelector((state) => state.questions);
    useEffect(() => {

        dispatch(getAllQuestionsApi(course));
        setTimeout(() => {
            setloading(false);
        }, 5000);


    }, []);
    const calculateScore = () => {
        let totalScore = 0;
        editQuestions.forEach(ans => {
            if (ans.rightAnswer.trim().toUpperCase() == ans.userResp.trim().toUpperCase()) {
                totalScore = totalScore + ans.score
            }
        });
        return totalScore;
    }
    const displayOptionColor = (opt, answer) => {
        if (finished) {
            if (opt.toUpperCase().trim() == answer.toUpperCase().trim()) {
                return "#3ebd8e"
            } else {
                return "#ed6051"
            }
        } else {
            return "black"
        }
    }
    const displayRightAnswer = (elm) => {
        if (finished) {
            if (elm.rightAnswer.trim().toUpperCase() == elm.userResp.trim().toUpperCase()) {
                return "bg-green-300"
            } else {
                return "bg-red-300"
            }
        } else {
            return "bg-blue-300"
        }
    }
    return (
        <div>
            <div>

                <div className="mt-20 mb-16 max-h-full overflow-y-auto">
                    {loading ? <div className="clearfix">
                        <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg"> <LoadingDots /></div>
                    </div> : <div className="clearfix">
                        <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">Bonjour et bienvenu dans votre cours .Veuillez repondre au questions ci-dessous </div>
                    </div>}
                    {
                        !loading && editQuestions.map((elm) => <Fragment>
                            <div className="clearfix">
                                <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix" style={{ marginTop: "5em" }}>{elm.title}
                                    <div className="flex flex-row w-full justify-evenly items-center">
                                        {elm.options.map((resp) => <span style={{ fontWeight: 'bold', fontSize: 16, color: displayOptionColor(resp, elm.rightAnswer) }}> {resp}</span>)}
                                    </div>
                                </div>
                            </div>
                            {elm.userResp ? <div className="clearfix mt-2">
                                <div className={`${displayRightAnswer(elm)} float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix`}>{elm.userResp}</div>
                            </div> : <div></div>}
                        </Fragment>)
                    }
                    {/* <div className="clearfix">
                        <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">It will be used for a full tutorial about building a chat app with vue, tailwind and firebase.</div>
                    </div>
                    <div className="clearfix">
                        <div className="bg-blue-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">check my twitter to see when it will be released.</div>
                    </div> */}
                </div>
            </div>
            <div className="relative w-full  flex justify-between bg-blue-100" style={{ bottom: 0, marginTop: "44%" }}>
                <textarea className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none" rows={1} placeholder="Message..." style={{ outline: 'none' }} defaultValue={""} value={resp} onChange={(event) => {
                    setResp(event.target.value);
                }} />
                <button className="m-2" style={{ outline: 'none' }} onClick={() => {
                    let newList = editQuestions;
                    newList[newList.length - 1]['userResp'] = resp;
                    setResp('');
                    let nextQuestion = list[newList.length];
                    if (nextQuestion) {
                        let finalList = [...newList, nextQuestion];
                        console.log("Final List", finalList);
                        dispatch({
                            type: ANSWER_QUESTION,
                            payload: finalList
                        })
                    } else {

                        dispatch({
                            type: ANSWER_QUESTION,
                            payload: newList
                        });
                        Swal.fire({
                            'title': 'Finis',
                            'text': 'Vous Avez finis !',

                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    'title': 'Votre Score',
                                    'text': calculateScore(),
                                    'confirmButtonText': 'Afficher les reponses !'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        setFinished(true);
                                    }
                                })
                            }
                        })
                    }



                }}>
                    <svg className="svg-inline--fa text-blue-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default ExamPage
