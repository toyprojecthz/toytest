const url = "https://toyprojecthz.github.io/toytest/friendPersona/"

function setShare() {
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;
    console.log(resultAlt)
    console.log('"' + url + "img/image-" + resultAlt + ".jpg" + '"')
    console.log('"' + url + 'result/result-' + resultAlt + '.html' + '"')
    const shareTitle = "금쪽이 테스트!"
    const shareDes = infoList[resultAlt].title;
    const shareImage = '"' + url + "img/image-" + resultAlt + ".jpg" + '"';
    const shareURL = '"' + url + 'result/result-' + resultAlt + '.html' + '"';
    Kakao.Link.sendDefault({
        objectType: 'feed', // 메시지 형식 : 피드 타입
        content: {
          title: shareTitle,
          description: shareDes,
          imageUrl: "https://toyprojecthz.github.io/toytest/friendPersona/img/image-5.jpg",
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
        buttons: [
          {
            title: '나도 테스트 해보기', // 버튼 이름
            link: {
              webUrl: shareURL,
              mobileWebUrl: shareURL,
            },
          },
        ],
      });    
    // Kakao.Link.sendDefault({
    //     objectType: 'feed',
    //     content: {
    //         title: shareTitle,
    //         description: shareDes,
    //         imageUrl: "https://toyprojecthz.github.io/toytest/friendPersona/img/image-5.jpg",
    //         // link: {
    //         //     mobileWebUrl: shareURL,
    //         //     webUrl: shareURL,
    //         // },
    //     },

    //     buttons: [{
    //         title: '결과 확인하기',
    //         link: {
    //             mobileWebUrl: shareURL,
    //             webUrl: shareURL,
    //         },
    //     }]
    // });


}