const url = "https://toyprojecthz.github.io/simple-test/"

function setShare() {
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = "테스트결과"
    const shareDes = infoList[resultAlt].title;
    const shareImage = '"' + "https://toyprojecthz.github.io/simple-test/" + "img/image-" + resultAlt + ".jpg" + '"';
    const shareURL = '"' + "https://toyprojecthz.github.io/simple-test/" + 'result/result-' + resultAlt + '.html' + '"';
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
        },

        buttons: [{
            title: '결과 확인하기',
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL,
            },
        }]
    });


}