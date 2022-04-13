const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 4; //총 질문 갯수
const select = [0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
    var result = select.indexOf(Math.max(...select));
    console.log(select)
    console.log(result)
    return result;
}
function setResult(){
    let point = calResult();
    const resultName = document.querySelector(".resultName");
    resultName.innerHTML =  infoList[point].name;
    const resultDesc = document.querySelector(".resultDesc");
    resultDesc.innerHTML =  infoList[point].desc;
}
function goResult() {
    qna.style.display = "none";
    result.style.display = "block";
    calResult();
    setResult()
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector(".answerBox");
    var answer = document.createElement("button");
    answer.classList.add("answerList")
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click", function () {
        var target = qnaList[qIdx].a[idx].type;
        for (let i = 0; i < target.length; i++) {
            select[target[i]] += 1;
        }

        var children = document.querySelectorAll(".answerList");
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = "none";
        }
        goNext(++qIdx)
    }, false)
}

function goNext(qIdx) {
    if (qIdx === endPoint) {
        goResult();
        return
    }
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i)
    }
    var status = document.querySelector(".statusBar");
    status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

function begin() {
    main.style.display = "none";
    qna.style.display = "block";
    //처음시작 1번째 배열부터
    let qIdx = 0;
    goNext(qIdx)
}
