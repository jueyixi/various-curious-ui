import { IndexManager } from "../packages/utils/IndexManager.js";
const _ = function() {
  const floatingContainer = document.createElement("div");
  const appendTo = document.body;
  const indexManager = new IndexManager();
  floatingContainer.classList.add("vc-floating-container");
  floatingContainer.style.zIndex = indexManager.nextIndex().toString();
  appendTo.appendChild(floatingContainer);
  return "＞﹏＜";
};
_();
