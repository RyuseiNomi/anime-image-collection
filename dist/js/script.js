$('.bigbanner_panel').remove();
$('#player_bg_outer').css('margin-left', '50px');
$('#player_bg_outer.anime_sw_right').css('right', '-290px');
$('#body_main_inner').css('margin-left', '50px');
$('.content').prepend("<div class=\"twitter-images\" style=\"float: right;margin-right: 50px;width: 250px;height: 250px;\"></div>");

$.ajax({
    url: 'http://localhost:3000/samples', 
    type: 'GET',
    //dataType: 'json',
    // フォーム要素の内容をハッシュ形式に変換
    //data: $('form').serializeArray(),
    //timeout: 5000,
  })
  .done(function(data) {
      console.log(data);
      var l = data.length;
      for(var i=0; i<l; i++){
          console.log("<a href=\"" + data[i] + "\" download><img src=\"" + data[i] + "\" style=\"width: 250px\" /></a>");
          //$('.twitter-images').prepend("<a href=\"" + data[i] + "\" download=\"sample\"><img src=\"" + data[i] + "\" style=\"width: 250px\" alt=\"sample\" /></a>");
          $('.twitter-images').prepend("<div class=\"image\"><a href=\"" + data[i] + "\"><img src=\"" + data[i] + "\" style=\"width: 250px\" /></a></div>");
      }
  })
  .fail(function(data) {
      alert('サーバとの接続に失敗しました');
  });

$('.twitter-images').css({
    'float': 'right',
    'margin-right': '50px'
});

//画像のDL
//$('head').html(
//'<script>\
//$(function () {\
//    $(".image").on("click", function(e){\
//        window.open('https://pbs.twimg.com/media/Dg1IUfQU0AAfKko.jpg');
//    });\
//});\
//</script>\
//'
//)
