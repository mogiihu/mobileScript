
let zhidubaoIcon = desc('支付宝').findOne();
zhidubaoIcon.click();
sleep(200);

let gengduoText = text('更多').findOne();
let gengduoIcon = gengduoText.parent();
gengduoIcon.click();
sleep(200);

let mayisenlinText = text('蚂蚁森林').findOne();
let mayisenlinIcon = mayisenlinText.parent().parent();
mayisenlinIcon.click();

let huzhuorui;
let more;
let name = 'Sakura';
while(!huzhuorui && !more) {

    huzhuorui = text(name).findOnce();
    more = text('查看更多好友').findOnce();

    if (huzhuorui) {
        huzhuorui.click();
        sleep(500);
        giveWater();
    } else if (more) {
        more.click();
        sleep(500);
        findSakura();
    } else {
        scrollDown(0)
    }
}

function findSakura () {
    while(!huzhuorui) {
        huzhuorui = text(name).findOnce();
        if (huzhuorui) {
            huzhuorui.click();
            sleep(500);
            giveWater();
        } else {
            scrollDown(0)
        }
    }
}

function giveWater() {
    var water = text("浇水").findOne().bounds();
    click(water.centerX(), water.centerY());
    sleep(1000);

    let maxWeight = text('18克').findOnce();
    if (maxWeight) {
        maxWeight.click();
        sleep(1000);

        let doIt = text('浇水送祝福').findOnce();
        doIt.click();
        sleep(500);
        giveWater();
    }  else {
        alert('帮弟弟浇完水啦！')
    }

}
