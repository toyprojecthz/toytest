function setShare() {
    // const url = "https://toyprojecthz.github.io/toytest/friendPersona/"
    const url = "https://www.naver.com/"
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;
    console.log(resultAlt)
    console.log('"' + url + "img/image-" + resultAlt + ".jpg" + '"')
    console.log('"' + url + 'result/result-' + resultAlt + '.html' + '"')
    const shareTitle = "금쪽이 테스트!"
    const shareDes = infoList[resultAlt].title;
    const shareImage = '"' + url + "img/image-" + resultAlt + ".jpg" + '"';
    // const shareURL = '"' + url + 'result/result-' + resultAlt + '.html' + '"';
    // const shareURL = url;


    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                webUrl: url,
                mobileWebUrl: url,
            },
        },

        buttons: [{
            title: '결과 확인하기',
            link: {
                webUrl: url,
                mobileWebUrl: url,
            },
        }]
    });


}