import { IndexManager } from 'vc-utils';

const _ = function () {
    const floatingContainer: HTMLElement = document.createElement('div');
    const appendTo = document.body;
    const indexManager = new IndexManager();

    floatingContainer.classList.add('vc-floating-container');
    floatingContainer.style.zIndex = indexManager.nextIndex().toString();
    appendTo.appendChild(floatingContainer);
    return "＞﹏＜";
}

export default _();