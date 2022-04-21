Kakao.init('3fcf47defed830f6458c713c6391420b');
Kakao.isInitialized();
function setShare() {
    const url = 'https://toyprojecthz.github.io/toytest/geumjjock/'
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;

    const shareTitle = '금쪽이 테스트!'
    const shareDes = infoList[resultAlt].title;
    const shareImage = url + 'img/image-' + resultAlt + '.jpg';
    const shareURL = url + 'result/result-' + resultAlt + '.html';
    const sharePATH = '/toytest/geumjjock/result/result-' + resultAlt + '.html';


    Kakao.Link.sendCustom({
        // objectType: 'feed',
        templateId: 75003,
        templateArgs: {
            'shareTitle': shareTitle,
            'shareDes': shareDes,
            'shareImage': shareImage,
            'shareURL': shareURL,
            'sharePATH': sharePATH
        }

        // content: {
        //     title: shareTitle,
        //     description: shareDes,
        //     imageUrl: shareImage,
        //     link: {
        //         webUrl: url,
        //         mobileWebUrl: url,
        //     },
        // },

        // buttons: [{
        //     title: '결과 확인하기',
        //     link: {
        //         webUrl: shareURL,
        //         mobileWebUrl: shareURL,
        //     },
        // }]
    });


}