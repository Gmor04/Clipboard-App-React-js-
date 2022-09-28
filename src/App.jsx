import React, { useState } from "react";
import copy from "copy-to-clipboard";

function App() {
  
  const [copyText, setCopyText] = useState("");
  const [secondcopyText, setsecondcopyText] = useState("");

  const TextToCopy = (e) => {
    setCopyText(e.target.value);
  };

  const ClickToCopy = () => {
    copy(copyText);
  };



  const secondTextToCopy = (e) => {
    setsecondcopyText(e.target.value);
  };


  const secondClickToCopy = () => {
    navigator.clipboard.writeText(secondcopyText);
    alert(`Copied : ${secondcopyText}`)
  };


  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");
  if (toastTrigger) {
    toastTrigger.addEventListener("click", () => {
      const toast = new bootstrap.Toast(toastLiveExample);

      toast.show();
    });
  }

  return (
    <div className="App mt-5">
      <div>
        <h2 className="text-center">Clipboard</h2>
        <div className="mt-4 w-100 d-flex justify-content-center ">
          <input
            type="text"
            className="form-control w-25 "
            value={copyText}
            onChange={TextToCopy}
          />
          <button
            type="button"
            className="btn btn-outline-dark border border-0 rounded-end"
            onClick={ClickToCopy}
            id="liveToastBtn"
          >
            <i class="fa-solid fa-copy"></i>
          </button>
        </div>

        <div class="toast-container position-fixed top-0 start-0 p-3 ">
          <div
            id="liveToast"
            class="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div class="toast-body bg-dark text-light">Copied : {copyText}</div>
          </div>
        </div>
      </div>





      <div className="pt-5">
        <h2 className="text-center">Clipboard2</h2>
        <div className="mt-4 w-100 d-flex justify-content-center ">
          <input
            type="text"
            className="form-control w-25 "
            value={secondcopyText}
            onChange={secondTextToCopy}
          />
          <button
            type="button"
            className="btn btn-outline-dark border border-0 rounded-end"
            onClick={secondClickToCopy}
            
          >
            <i class="fa-solid fa-copy"></i>
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default App;
