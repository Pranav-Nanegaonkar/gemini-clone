import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { useContext } from "react";

const Main = () => {
  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    prevPrompts,
    setPrevPrompts,
  } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    await onSent();
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span> Hello, Dev</span>
              </p>
              <p>
                <span>How can I help you today?</span>
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to visit in India</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {
                loading ? (
                  <div className="lodder">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )
                /* if we give {resultdata} it will give all the tags present in the text */
              }
            </div>
          </div>
        )}

        <div className="main-bottom">
          <form onSubmit={submitHandler}>
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />

                {input ? (
                  // onClick={() => onSent()}
                  <button className="btn_34">
                    <img src={assets.send_icon} alt="" />
                  </button>
                ) : null}
              </div>
            </div>
          </form>
          <p className="bottom-info">
            Gemini may display inaccurate info. including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
