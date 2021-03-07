
function shareToQQ() {
    let shareBtn;
    while (!shareBtn) {

        if (!id('share_btn').exists()) {
            // 点击视频界面
            click(500, 500);
            sleep(200);
        } else {
            shareBtn = id('share_btn').findOne();
        }
    }

    // 点击分享按钮
    shareBtn.click();
    sleep(500);

    let QQ = text("QQ").findOne().bounds();
    click(QQ.centerX(), QQ.centerY());
    sleep(1000);

    if (text('QQ').exists()) {
        let QQ2 = text("QQ").findOne().bounds();
        click(QQ2.centerX(), QQ2.centerY());
        sleep(1000);
    }

    if (text('帐号不一致').exists()) {
        text('继续').findOne().click();
    }
    let nick = text("🥝奇异果果子").findOne().bounds();
    click(nick.centerX(), nick.centerY());
    sleep(1000);

    if (text('发送给：').exists()) {
        text('发送').findOne().click();
    }

    sleep(1000);
    if (text('返回虎牙直播').exists()) {
        text('返回虎牙直播').findOne().click();
    }
}

let time = 15;
for(let i=0;i<15;i++) {
    shareToQQ()
}

// 选择QQ分享
// text('QQ').findOne().parent.click();
// const videoView = id('space').findOne().click();
// alert(videoView)
// const share = id('share_btn').findOne();
// alert(share)
// if (share) {
//     share.findOne().click();
// }