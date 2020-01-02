auto();

//启动app
launchApp("支付宝");
waitForActivity("com.eg.android.AlipayGphone.AlipayLogin");
sleep(5000);
var w = text("蚂蚁森林").className("android.widget.TextView").findOne();
var b = w.bounds();
if (w == null) {
    log("null");
}

//点击蚂蚁森林
if (click(b.centerX(), b.centerY())) {
    log("点击成功");
} else {
    log("点击失败");
}

//收集自己的能量
sleep(5000);
var width = device.width;
var i, j;

//盲点收自己的能量
for (i = 450; i <= 800;) {//y方向点击范围
    threads.start(function () {
        for (j = 200; j < width - 200;) {//x方向点击范围
            click(j, i);
            j = j + 150;
        }
    });
    sleep(1000);
    i = i + 100;
}
toastLog("收集能量完成");
sleep(2000);
back();
sleep(2000);
back();
sleep(2000);

//关闭应用，仅在root权限下有效
shell("am force-stop com.eg.android.AlipayGphone", true);
exit();