import React, { useState } from 'react'
import './styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "react-ts-typewriter";

function App() {

  const [data, setData] = useState("")
  const [value, setValue] = useState("")

  return (
    <div className="App">
      <div className='container'>
        <div className='content'>
          <h1>ChatGPT</h1>
          {data === "hello" &&
            <div className='typewriter'>
              <Typewriter
                speed={1}
                text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum '\n \n \n \n' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`}
              />
            </div>
          }

          {console.log(value.length)}

          <section className='wrapper'>
            <h4 style={{ color: "#eee", marginBottom: "12px" }}>Please type 'hello' in the input box</h4>

            <div className='input'>
              <input type='text' placeholder='Send a message' onChange={(e) => setValue(e.target.value)} />

              {value === "hello" ?
                (<button
                  onClick={() => setData("hello")}
                  className={`${value.length >= 1 ? "button-active" : "button"}`}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>)
                :
                <button
                  className={`${value.length >= 1 ? "button-active" : "button"}`}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              }
            </div>
            <p>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Version</p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
