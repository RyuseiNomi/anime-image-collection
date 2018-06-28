$('.bigbanner_panel').remove();
$('#player_bg_outer').css('margin-left', '50px');
$('#player_bg_outer.anime_sw_right').css('right', '-290px');
$('#body_main_inner').css('margin-left', '50px');
$('.content').prepend("<div class=\"twitter-images\"><img src=\"http://placehold.jp/250x250.png\"></div>");
$.getScript("../webRTC/app.js");
//$.ajax({
//    url: 'file://Users/nomi.ryusei/workspace/hackathon/anime-image-collection-server/webRTC/app.js',
//    type: 'GET',
//    dataType: 'json',
//    // フォーム要素の内容をハッシュ形式に変換
//    //data: $('form').serializeArray(),
//    //timeout: 5000,
//  })
//  .done(function(data) {
//      alert('ほげ');
//  })
//  .fail(function() {
//      alert('ふが');
//  });

$('.twitter-images').css({
    'float': 'right',
    'margin-right': '50px'
});
