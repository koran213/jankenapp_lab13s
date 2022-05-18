// RESETボタンreload
$('#rangers').on('click', function(){
  location.reload();
});

// 接続詞共通clickイベント
$('.common').on('click', function(){
  document.getElementById("question").innerHTML = "<p>こんなん出たで</p>"
});

// 接続詞別clickイベント
$('.dakara').on('click', function(){
  $('.demo, .shikamo, .tashika, .tsumari, .yappari,.tomoare').off('click');
  const dakarat = document. querySelector('.dakarat');
  dakarat.style.fontSize = '28px', fontWeight = 'bold';
});

$('.demo').on('click', function(){
  $('.dakara, .shikamo, .tashika, .tsumari, .yappari,.tomoare').off('click');
  const demot = document. querySelector('.demot');
  demot.style.fontSize = '28px', fontWeight = 'bold';
});

$('.shikamo').on('click', function(){
  $('.dakara, .demo, .tashika, .tsumari, .yappari,.tomoare').off('click');
  const shikamot = document. querySelector('.shikamot');
  shikamot.style.fontSize = '28px', fontWeight = 'bold';
});

$('.tashika').on('click', function(){
  $('.dakara, .demo, .shikamo, .tsumari, .yappari,.tomoare').off('click');
  const tashikat = document. querySelector('.tashikat');
  tashikat.style.fontSize = '28px', fontWeight = 'bold';
});

$('.yappari').on('click', function(){
  $('.dakara, .demo, .tashika, .tsumari, .tashika,.tomoare').off('click');
  const yapparit = document. querySelector('.yapparit');
  yapparit.style.fontSize = '28px', fontWeight = 'bold';
});

$('.tomoare').on('click', function(){
  $('.dakara, .demo, .shikamo,.tashika, .tsumari, .yappari').off('click');
  const tomoaret = document. querySelector('.tomoaret');
  tomoaret.style.fontSize = '28px', fontWeight = 'bold';
});

// result毎の定義
const idea = {'no':0,'phrase':'いいアイデアだ', 'character':'<img src="./img/Ranger_blue_w130.png" alt="">', 'comment':'<p>原石輝いてる</p>'};

const funny = {'no':1,'phrase':'めっちゃ面白い', 'character':'<img src="./img/Ranger_pink_w130.png" alt="">', 'comment':'<p>じわじわくる</p>'};

const nige = {'no':2,'phrase':'逃げ足はやっ', 'character':'<img src="./img/Ranger_blue_w130.png" alt="">', 'comment':'<p>フルスロットル！</p>'};

const fail = {'no':3,'phrase':'ふぇいるふぁーすと', 'character':'<img src="./img/Ranger_red_w130.png" alt="">', 'comment':'<p>なにはさておき</p>'};

const nanika = {'no':4,'phrase':'何か引っかかる', 'character':'<img src="./img/Ranger_green_w130.png" alt="">', 'comment':'<p>もっかい見なおそ</p>'};

const soyukoto = {'no':5,'phrase':'そういうこと', 'character':'<img src="./img/Ranger_blue_w130.png" alt="">', 'comment':'<p>ふにおちた？</p>'};

const muri = {'no':6,'phrase':'無理しちゃいかん', 'character':'<img src="./img/Ranger_yellow_w130.png" alt="">', 'comment':'<p>ひっとやっすみ～</p>'};

const shanai = {'no':7,'phrase':'しゃーない！', 'character':'<img src="./img/Ranger_pink_w130.png" alt="">', 'comment':'<p>そんなときもあるって</p>'};

const rich = {'no':8,'phrase':'金持ちになろ', 'character':'<img src="./img/Ranger_yellow_w130.png" alt="">', 'comment':'<p>ゴールドラッシュ！</p>'}

const suki = {'no':9,'phrase':'好きにしよ', 'character':'<img src="./img/Ranger_yellow_w130.png" alt="">', 'comment':'<p>追い風きてるよ</p>'};

const sagaso = {'no':10,'phrase':'探そ、きっとある', 'character':'<img src="./img/Ranger_red_w130.png" alt="">', 'comment':'<p>灯台もと暗し</p>'};

const choshi = {'no':11,'phrase':'その調子で', 'character':'<img src="./img/Ranger_pink_w130.png" alt="">', 'comment':'<p>波乗りジョニー</p>'};

const honest = {'no':12,'phrase':'正直にいこ', 'character':'<img src="./img/Ranger_green_w130.png" alt="">', 'comment':'<p>ぼくはキミの味方</p>'};

const play = {'no':13,'phrase':'遊んじゃおう！', 'character':'<img src="./img/Ranger_red_w130.png" alt="">', 'comment':'<p>カモン！レッツゴー</p>'};

const goro = {'no':14,'phrase':'ゴロゴロ～ン', 'character':'<img src="./img/Ranger_green_w130.png" alt="">', 'comment':'<p>ぐりんぐりーん</p>'};

// resultの組合せset別クリックイベント

$('.set_a').one('click', function(){

  const set_a =[nanika, suki, soyukoto, sagaso, choshi, idea, funny, honest, muri,play, shanai, goro, rich, nige, fail];
  let n = Math.floor(Math.random()* set_a.length);
  let result = {
    0:idea,
    1:funny,
    2:nige,
    3:fail,
    4:nanika,
    5:soyukoto,
    6:muri,
    7:shanai,
    8:rich,
    9:suki,
    10:sagaso,
    11:choshi,
    12:honest,
    13:play,
    14:goro
   };

  if(result[n].no == String(n)){
    $('#phrase').html(result[n].phrase);
    $('#character').html(result[n].character);  
    $('#comment').html(result[n].comment);
  };
});

$('.set_b').one('click', function(){

  const set_b =[idea, funny, nige, fail];
  let n = Math.floor(Math.random()* set_b.length);
  let result = {
    0:idea,
    1:funny,
    2:nige,
    3:fail
   };

   if(result[n].no == String(n)){
    $('#phrase').html(result[n].phrase);
    $('#character').html(result[n].character);  
    $('#comment').html(result[n].comment);
  };
});

$('.set_c').one('click', function(){

  const set_c =[nanika, soyukoto, idea, funny, muri, shanai, rich, nige, fail]; 
  let n = Math.floor(Math.random()* set_c.length);
  let result = {
    0:idea,
    1:funny,
    2:nige,
    3:fail,
    4:nanika,
    5:soyukoto,
    6:muri,
    7:shanai,
    8:rich
  };

  if(result[n].no == String(n)){
    $('#phrase').html(result[n].phrase);
    $('#character').html(result[n].character);  
    $('#comment').html(result[n].comment);
  };
});
