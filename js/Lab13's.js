$('#dakara').on('click', function(){
  const dakarat = document. querySelector('#dakarat');
  dakarat.style.fontSize = '20px';
  dakarat.style.fontWeight = 'bold';

  const r = Math.random()*15 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#sentense').html('何か引っかかるんだ');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 2){
    $('#sentense').html('好きにしちゃいな');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 3){
    $('#sentense').html('そういうことなんだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 4){
    $('#sentense').html('探そう、あきらめるな');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  } 
  if(n == 5){
    $('#sentense').html('その調子でいこう');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 6){
    $('#sentense').html('いいアイデアだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
  } 
  if(n == 7){
    $('#sentense').html('めっちゃ面白い');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 8){
    $('#sentense').html('正直でいんじゃない？');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');    
  } 
  if(n == 9){
    $('#sentense').html('無理しちゃいかんのよ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 10){
    $('#sentense').html('遊んじゃおう！');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');       
  }
  if(n == 11){
    $('#sentense').html('しゃーない、あきらめよ');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
  } 
  if(n == 12){
    $('#sentense').html('ゴロゴロ～ダラダラ～');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 13){
    $('#sentense').html('金持ちになっちゃえば？');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 14){
    $('#sentense').html('逃げ足はやっ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 15){
    $('#sentense').html('ふぇいるふぁーすと');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  } 

  $('#demo, #shikamo, #tashika, #tsumari, #yappari, #tomoare').off('click')

});

$('#demo').on('click', function(){
  const demot = document. querySelector('#demot');
  demot.style.fontSize = '20px';
  demot.style.fontWeight = 'bold'; 

  const r = Math.random()*15 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#sentense').html('何か引っかかるんだ');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 2){
    $('#sentense').html('好きにしちゃいな');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 3){
    $('#sentense').html('そういうことなんだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 4){
    $('#sentense').html('探そう、あきらめるな');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  } 
  if(n == 5){
    $('#sentense').html('その調子でいこう');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 6){
    $('#sentense').html('いいアイデアだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
  } 
  if(n == 7){
    $('#sentense').html('めっちゃ面白い');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 8){
    $('#sentense').html('正直でいんじゃない？');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');    
  } 
  if(n == 9){
    $('#sentense').html('無理しちゃいかんのよ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 10){
    $('#sentense').html('遊んじゃおう！');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');       
  }
  if(n == 11){
    $('#sentense').html('しゃーない、あきらめよ');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
  } 
  if(n == 12){
    $('#sentense').html('ゴロゴロ～ダラダラ～');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 13){
    $('#sentense').html('金持ちになっちゃえば？');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 14){
    $('#sentense').html('逃げ足はやっ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 15){
    $('#sentense').html('ふぇいるふぁーすと');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  }
  
  $('#dakara, #shikamo, #tashika, #tsumari, #yappari, #tomoare').off('click')

});

$('#shikamo').on('click', function(){
  const shikamot = document. querySelector('#shikamot');
  shikamot.style.fontSize = '20px';
  shikamot.style.fontWeight = 'bold'; 

  const r = Math.random()*4 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#sentense').html('いいアイデアだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
  } 
  if(n == 2){
    $('#sentense').html('めっちゃ面白い');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 3){
    $('#sentense').html('逃げ足はやっ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 4){
    $('#sentense').html('ふぇいるふぁーすと');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  }
  
  $('#dakara, #demo, #tashika, #tsumari, #yappari, #tomoare').off('click')

});

$('#tashika').on('click', function(){
  const tashikat = document. querySelector('#tashikat');
  tashikat.style.fontSize = '20px';
  tashikat.style.fontWeight = 'bold'; 

  const r = Math.random()*9 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#sentense').html('何か引っかかるんだ');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 2){
    $('#sentense').html('そういうことなんだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 3){
    $('#sentense').html('いいアイデアだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
  } 
  if(n == 4){
    $('#sentense').html('めっちゃ面白い');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 5){
    $('#sentense').html('無理しちゃいかんのよ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 6){
    $('#sentense').html('しゃーない、あきらめよ');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
  } 
  if(n == 7){
    $('#sentense').html('金持ちになっちゃえ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 8){
    $('#sentense').html('逃げ足はやっ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 9){
    $('#sentense').html('ふぇいるふぁーすと');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  }
  
  $('#dakara, #demo, #shikamo, #tsumari, #yappari, #tomoare').off('click')

});

$('#tsumari').on('click', function(){
  const tsumarit = document. querySelector('#tsumarit');
  tsumarit.style.fontSize = '20px';
  tsumarit.style.fontWeight = 'bold'; 

  const r = Math.random()*12 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#sentense').html('何か引っかかるんだ');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 2){
    $('#sentense').html('好きにしちゃいな');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 3){
    $('#sentense').html('そういうことなんだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 4){
    $('#sentense').html('いいアイデアだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
  } 
  if(n == 5){
    $('#sentense').html('めっちゃ面白い');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 6){
    $('#sentense').html('正直でいんじゃない？');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');    
  } 
  if(n == 7){
    $('#sentense').html('無理しちゃいかんのよ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 8){
    $('#sentense').html('しゃーない、あきらめよ');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
  } 
  if(n == 9){
    $('#sentense').html('ゴロゴロ～ダラダラ～');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 10){
    $('#sentense').html('金持ちになっちゃえば？');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 11){
    $('#sentense').html('逃げ足はやっ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 12){
    $('#sentense').html('ふぇいるふぁーすと');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  }
  
  $('#dakara, #demo, #shikamo, #tashika, #yappari, #tomoare').off('click')

});

$('#yappari').on('click', function(){
  const yapparit = document. querySelector('#yapparit');
  yapparit.style.fontSize = '20px';
  yapparit.style.fontWeight = 'bold'; 

  const r = Math.random()*15 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#sentense').html('何か引っかかるんだ');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 2){
    $('#sentense').html('好きにしちゃいな');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 3){
    $('#sentense').html('そういうことなんだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 4){
    $('#sentense').html('探そう、あきらめるな');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  } 
  if(n == 5){
    $('#sentense').html('その調子でいこう');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 6){
    $('#sentense').html('いいアイデアだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
  } 
  if(n == 7){
    $('#sentense').html('めっちゃ面白い');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 8){
    $('#sentense').html('正直でいんじゃない？');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');    
  } 
  if(n == 9){
    $('#sentense').html('無理しちゃいかんのよ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 10){
    $('#sentense').html('遊んじゃおう！');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');       
  }
  if(n == 11){
    $('#sentense').html('しゃーない、あきらめよ');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
  } 
  if(n == 12){
    $('#sentense').html('ゴロゴロ～ダラダラ～');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 13){
    $('#sentense').html('金持ちになっちゃえ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 14){
    $('#sentense').html('逃げ足はやっ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 15){
    $('#sentense').html('ふぇいるふぁーすと');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  }
  
  $('#dakara, #demo, #shikamo, #tashika, #tsumari, #tomoare').off('click')

});

$('#tomoare').on('click', function(){
  const tomoaret = document. querySelector('#tomoaret');
  tomoaret.style.fontSize = '20px';
  tomoaret.style.fontWeight = 'bold'; 

  const r = Math.random()*15 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#sentense').html('何か引っかかるんだ');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 2){
    $('#sentense').html('好きにしちゃいな');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 3){
    $('#sentense').html('そういうことなんだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 4){
    $('#sentense').html('探そう、あきらめるな');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  } 
  if(n == 5){
    $('#sentense').html('その調子でいこう');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 6){
    $('#sentense').html('いいアイデアだ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
  } 
  if(n == 7){
    $('#sentense').html('めっちゃ面白い');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
  }
  if(n == 8){
    $('#sentense').html('正直でいんじゃない？');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');    
  } 
  if(n == 9){
    $('#sentense').html('無理しちゃいかんのよ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 10){
    $('#sentense').html('遊んじゃおう！');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');       
  }
  if(n == 11){
    $('#sentense').html('しゃーない、あきらめよ');
    $('#judgment').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
  } 
  if(n == 12){
    $('#sentense').html('ゴロゴロ～ダラダラ～');
    $('#judgment').html('<img src="./img/Ranger_green_w130.png" alt="">');       
  }
  if(n == 13){
    $('#sentense').html('金持ちになっちゃえ');
    $('#judgment').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
  } 
  if(n == 14){
    $('#sentense').html('逃げ足はやっ');
    $('#judgment').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 15){
    $('#sentense').html('ふぇいるふぁーすと');
    $('#judgment').html('<img src="./img/Ranger_red_w130.png" alt="">');    
  }
  
  $('#dakara, #demo, #shikamo, #tashika, #tsumari, #yappari').off('click')

});

