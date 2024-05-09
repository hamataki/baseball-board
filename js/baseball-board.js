// 1.乱数
// 2.クリックする
// 3.コンピュータが選ぶ
// 4.結果を表示
let blink

// 左上
$("#gu_t").on("click", function () {
    let num = Math.ceil(Math.random() * 1);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num == 1) {
        $("#pc_hands").html("命中！");
        let hit = Math.ceil(Math.random() * 1);

        if (hit == 1) {
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit === 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 2 || num == 4) {
        $("#pc_hands").html("命中！");
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink = setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 3 || num >= 5) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
});

// 中央上
$("#cho_t").on("click", function () {
    let num = Math.ceil(Math.random() * 9);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num == 1 || num == 4 || num >= 6) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
    else if (num == 2) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4)  {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 3 || num == 5) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2){
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink = setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }

});

// 右上
$("#par_t").on("click", function () {
    let num = Math.ceil(Math.random() * 9);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num == 1 || num == 4 || num == 5 || num >= 7) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
    else if (num == 2 || num == 6) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink = setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 3) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1){
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4)  {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
});

// 左中央
$("#gu_c").on("click", function () {
    let num = Math.ceil(Math.random() * 9);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num == 1 || num == 5 || num == 7) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink = setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 2 || num == 3 || num == 6 || num >= 8) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
    else if (num == 4) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4)  {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
});

// 中央
$("#cho_c").on("click", function () {
    let num = Math.ceil(Math.random() * 9);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num <= 4 || num >= 7) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
    else if (num == 5) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 6) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink = setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
});

// 中央右
$("#par_c").on("click", function () {
    let num = Math.ceil(Math.random() * 9);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num <= 2 || num == 4 || num == 7 || num == 8) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
    else if (num == 3 || num == 5 || num == 9) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink = setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 6) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4)  {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
});

// 左下
$("#gu_u").on("click", function () {
    let num = Math.ceil(Math.random() * 9);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num <= 3 || num == 5 || num == 6 || num == 9) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
    else if (num == 7) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1){
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4)  {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 4 || num == 8) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink = setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
});

// 中央下
$("#cho_u").on("click", function () {
    let num = Math.ceil(Math.random() * 9);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num <= 4 || num == 6) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
    else if (num == 8) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4)  {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 5 || num == 7 || num == 9) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink = setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
});

// 右下
$("#par_u").on("click", function () {
    let num = Math.ceil(Math.random() * 9);
    $('#particles-js').hide();
    //紙吹雪を非表示にする

    if (num <= 5 || num == 7) {
        $("#pc_hands").html("ストライク");
        clearInterval(blink);
        $("#result").html("");
        console.log("ストライク");
    }
    else if (num == 9) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $('#particles-js').css('display', 'block').css('opacity', 1);
            //紙吹雪を表示する
            $("#result").html("ホームラン");
            clearInterval(blink);
            console.log("ホームラン");
            $("#sound").get(0).play();
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("二塁打")
            clearInterval(blink);
            console.log("二塁打");
            blink = setInterval(function () {
                $("#twobase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4)  {
            $("#result").html("三塁打");
            clearInterval(blink);
            console.log("三塁打");
            blink = setInterval(function () {
                $("#threebase").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
    else if (num == 6 || num == 8) {
        $("#pc_hands").html("命中！")
        let hit = Math.ceil(Math.random() * 4);
        if (hit == 1) {
            $("#result").html("ファール");
            clearInterval(blink);
            console.log("ファール");
        }
        else if (hit == 2) {
            $("#result").html("ヒット");
            clearInterval(blink);
            console.log("ヒット");
            blink = setInterval(function () {
                $("#shit").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 3) {
            $("#result").html("内野ゴロ");
            clearInterval(blink);
            console.log("内野ゴロ");
            blink =  setInterval(function () {
                $("#grounder").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
        else if (hit == 4) {
            $("#result").html("外野フライ");
            clearInterval(blink);
            console.log("外野フライ");
            blink = setInterval(function () {
                $("#flyball").fadeOut(300, function () { $(this).fadeIn(300) })
            }, 1000);
        }
    }
});

// 紙吹雪の設定
// $("#particles-js").show(confetti); // 紙吹雪の表示を有効化する
// confetti = particlesJS("particles-js",{
//     "particles":{
//       "number":{
//         "value":125,//この数値を変更すると紙吹雪の数が増減できる
//         "density":{
//           "enable":false,
//           "value_area":400
//         }
//       },
//       "color": {
//           "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
//       },
//       "shape":{
//         "type":"polygon",//形状はpolygonを指定
//         "stroke":{
//           "width":0,
//         },
//         "polygon":{
//           "nb_sides":5//多角形の角の数
//         }
//         },
//         "opacity":{
//           "value":1,
//           "random":false,
//           "anim":{
//             "enable":true,
//             "speed":20,
//             "opacity_min":0,
//             "sync":false
//           }
//         },
//         "size":{
//           "value":5.305992965476349,
//           "random":true,//サイズをランダムに
//           "anim":{
//             "enable":true,
//             "speed":1.345709068776642,
//             "size_min":0.8,
//             "sync":false
//           }
//         },
//         "line_linked":{
//           "enable":false,
//         },
//         "move":{
//           "enable":true,
//         "speed":10,//この数値を小さくするとゆっくりな動きになる
//         "direction":"bottom",//下に向かって落ちる
//         "random":false,//動きはランダムにならないように
//         "straight":false,//動きをとどめない
//         "out_mode":"out",//画面の外に出るように描写
//         "bounce":false,//跳ね返りなし
//           "attract":{
//             "enable":false,
//             "rotateX":600,
//             "rotateY":1200
//           }
//         }
//       },
//       "interactivity":{
//         "detect_on":"canvas",
//         "events":{
//           "onhover":{
//             "enable":false,
//           },
//           "onclick":{
//             "enable":false,
//           },
//           "resize":true
//         },
//       },
//       "retina_detect":true
//     });