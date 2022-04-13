const url = "https://toyprojecthz.github.io/simple-test/"

function setShare() {
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = "테스트결과"
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + "img/image-" + resultAlt + "jpg";
    const shareURL = url + "page/result-" + resultAlt + ".html";

}

function kakaoShare() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                WebUrl: shareURL,
            },
        },

        buttons: [{
            title: '결과 확인하기',
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
            },
        }]
    });


}