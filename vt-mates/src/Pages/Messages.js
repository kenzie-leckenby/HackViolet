import React from "react";
import DirectMsg from "../Components/DirectMsg";

function Messages() {
  return(
    <div>
      <DirectMsg />
      <div class="input-row">
          <input id="console-input" type="text" placeholder="/..."></input>
      </div>
    </div>
  )
}

export default Messages;