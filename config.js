// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
       "Happy Birthday to the light of my life.",
        "Happy Birthday to the one who stole my heart! ",  
        "Happy Birthday to the one who makes my heart sing",
        "Your special day deserves all the joy it can hold",
        "To the one who completes my days ",
        " Happy Birthday! Here's to another year of adventures together",
        "Another year, another adventure. Happy Birthday to my partner in crime",
        "Happy Birthday, my love! Here's to another year of happiness together",
        "May your day be as special as you make mine every day. Happy Birthday",
        "Happy Birthday to the queen of my heart.",
        "Hamza ♥",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Beautiful One": "./imgs/Fatoom.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "OPEN",
        play: "PLAY",
        bannar_coming: "NEXT",
        balloons_flying: "CLICK ME",
        cake_fadein: "YLA ?",
        light_candle: "YLAAAAAAAAAAAAAAA ?",
        wish_message: "I LOVE YOU",
        story: "A MESSAGE FOR YOU",
    }
};
