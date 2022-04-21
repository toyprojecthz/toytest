function setShare() {
    const url = 'https://toyprojecthz.github.io/toytest/friendPersona/'
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;

    const shareTitle = '금쪽이 테스트!'
    const shareDes = infoList[resultAlt].title;
    const shareImage = url + 'img/image-' + resultAlt + '.jpg';
    const shareURL = url + 'result/result-' + resultAlt + '.html';


    Kakao.Link.sendCustom({
        // objectType: 'feed',
        templateId: 75003,
        templateArgs: {
            'title': shareTitle,
            'description': shareDes
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