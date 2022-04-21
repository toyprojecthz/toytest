const main = document.querySelector("#intro");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 4; //총 질문 타입 갯수
const totalPoint = 12; //총 질문 갯수
const select = [{
        type: [0, 0]
    },
    {
        type: [0, 0]
    },
    {
        type: [0, 0]
    },
    {
        type: [0, 0]
    }
]; //총 타입 갯수


keyTypes()

function keyTypes() {
    const list = [1, 0];
    const pick = 4;
    const result = [];

    function pwr(items) {
        if (items.length === pick) {
            result.push(items);
            return;
        }

        for (let i = 0; i < list.length; i++) {
            pwr(`${items}${list[i]}`);
        }
    }

    pwr("");
}

function calResult() {
    var newArr = [];
    var result = [];
    for (let i = 0; i < select.length; i++) {
        var comparedArr = select[i].type.indexOf(Math.max(...select[i].type));
        newArr.push(comparedArr);
    }
    result.push(newArr.join(""));
    return result
}




function setResult(statusIdx) {
    var infoResult = infoList.find(({
        key
    }) => key === calResult()[0]);

    console.log(calResult)
    console.log(infoResult)

    const imgDiv = document.querySelector("#resultImg");
    const resultImg = document.querySelector("#resultImg iframe");

    var imgURL = infoResult.imgUrl;
    resultImg.src = imgURL;
    resultImg.alt = statusIdx;
    resultImg.classList.add("img-fluid");

    const resultTitle = document.querySelector(".resultTitle");
    resultTitle.innerHTML = infoResult.title;
    const resultDesc1 = document.querySelector(".resultDesc ul li:nth-child(1)");
    const resultDesc2 = document.querySelector(".resultDesc ul li:nth-child(2)");
    resultDesc1.innerHTML = infoResult.desc1;
    resultDesc2.innerHTML = infoResult.desc2;
    console.log(infoResult.desc1)
    console.log(infoResult.desc2)
}

function goResult(statusIdx) {
    qna.style.display = "none";
    result.style.display = "block";
    setResult(statusIdx)
}

function addAnswer(answerText, qIdx, idx, aIdx, statusIdx) {
    var aBox = document.querySelector(".aBox");
    var answer = document.createElement("button");
    answer.classList.add("answerList")
    aBox.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click", function () {
        var target = qnaList[qIdx].mbtiType[idx].qna.a[aIdx].type;
        select[qIdx].type[target] += 1;

        var children = document.querySelectorAll(".answerList");
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = "none";
        }
        //세번째 일때 그다음 순번1로
        if (idx === 2) {
            let idx = 0;
            goNext(++qIdx, idx, ++statusIdx);
        } else {
            goNext(qIdx, ++idx, ++statusIdx);
        };
    }, false)
}

function addQuestion(questionText) {
    var qBox = document.querySelector(".qBox");
    qBox.innerHTML = questionText;
}

function goNext(qIdx, idx, statusIdx) {
    if (qIdx === endPoint) {
        goResult(statusIdx);
        return
    }

    var mbtiTypeArr = qnaList[qIdx].mbtiType[idx]
    addQuestion(mbtiTypeArr.qna.q);

    for (let i = 0; i < mbtiTypeArr.qna.a.length; i++) {
        var a = mbtiTypeArr.qna.a[i];
        addAnswer(a.answer, qIdx, idx, i, statusIdx);
    }
    var status = document.querySelector(".statusBar span");
    status.style.width = (100 / totalPoint) * (statusIdx) + "%";

    var statusNumb = document.querySelectorAll(".status-wrap .numb span")[0];
    var totalNumb = document.querySelectorAll(".status-wrap .numb span")[1];
    statusNumb.innerHTML = statusIdx
    totalNumb.innerHTML = totalPoint
}

function begin() {
    main.style.display = "none";
    qna.style.display = "block";
    //처음시작 1번째 배열부터
    let qIdx = 0;
    let idx = 0;
    let statusIdx = 1;
    goNext(qIdx, idx, statusIdx)
}
