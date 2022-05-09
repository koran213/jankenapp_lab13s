$('#rangers').on('click', function(){
  location.reload();
});

$('#dakara').on('click', function(){
  const dakarat = document. querySelector('#dakarat');
  dakarat.style.fontSize = '28px';
  dakarat.style.fontWeight = 'bold';

  const r = Math.random()*15 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#phrase').html('何か引っかかる');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');  
    $('#comment').html('<p>もっかい見なおそ</p>')
  }
  if(n == 2){
    $('#phrase').html('好きにしよ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">'); 
    $('#comment').html('<p>追い風きてるよ</p>')   
  } 
  if(n == 3){
    $('#phrase').html('そういうこと');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">'); 
    $('#comment').html('<p>ふにおちた？</p>')        
  }
  if(n == 4){
    $('#phrase').html('探そ、きっとある');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">'); 
    $('#comment').html('<p>灯台もと暗し</p>')        
  } 
  if(n == 5){
    $('#phrase').html('その調子で');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">'); 
    $('#comment').html('<p>波乗りジョニー</p>')             
  }
  if(n == 6){
    $('#phrase').html('いいアイデアだ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');
    $('#comment').html('<p>原石輝いてる</p>')        
  } 
  if(n == 7){
    $('#phrase').html('めっちゃ面白い');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>じわじわくる</p>')        
  }
  if(n == 8){
    $('#phrase').html('正直にいこ');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');    
    $('#comment').html('<p>ぼくはキミの味方</p>')        
  } 
  if(n == 9){
    $('#phrase').html('無理しちゃいかん');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ひっとやっすみ～</p>')        
  } 
  if(n == 10){
    $('#phrase').html('遊んじゃおう！');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');       
    $('#comment').html('<p>カモン！レッツゴー</p>')        
  }
  if(n == 11){
    $('#phrase').html('しゃーない');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
    $('#comment').html('<p>そんなときもあるって</p>')        
  } 
  if(n == 12){
    $('#phrase').html('ゴロゴロ～ン');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');       
    $('#comment').html('<p>ぐりんぐりーん</p>')        
  }
  if(n == 13){
    $('#phrase').html('金持ちになろ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ゴールドラッシュ！</p>')        
  } 
  if(n == 14){
    $('#phrase').html('逃げ足はやっ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>フルスロットル！</p>')        
  }
  if(n == 15){
    $('#phrase').html('ふぇいるふぁーすと');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');    
    $('#comment').html('<p>なにはさておき</p>')        
  } 

  $('#demo, #shikamo, #tashika, #tsumari, #yappari, #tomoare').off('click');

  // document.getElementById("question").style.display="none";
  document.getElementById("question").innerHTML = "<p>こんなん出たで</p>";

});

$('#demo').on('click', function(){
  const demot = document. querySelector('#demot');
  demot.style.fontSize = '28px';
  demot.style.fontWeight = 'bold'; 

  const r = Math.random()*15 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#phrase').html('何か引っかかる');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');       
    $('#comment').html('<p>もっかい見なおそ</p>')
  }
  if(n == 2){
    $('#phrase').html('好きにしよ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>追い風きてるよ</p>')   
  } 
  if(n == 3){
    $('#phrase').html('そういうこと');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>ふにおちた？</p>')   
  }
  if(n == 4){
    $('#phrase').html('探そ、きっとある');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');    
    $('#comment').html('<p>灯台もと暗し</p>')     
  } 
  if(n == 5){
    $('#phrase').html('その調子で');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>波乗りジョニー</p>')          
  }
  if(n == 6){
    $('#phrase').html('いいアイデアだ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
    $('#comment').html('<p>原石輝いてる</p>')        
  } 
  if(n == 7){
    $('#phrase').html('めっちゃ面白い');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>じわじわくる</p>')        
  }
  if(n == 8){
    $('#phrase').html('正直にいこ');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');    
    $('#comment').html('<p>ぼくはキミの味方</p>')     
  } 
  if(n == 9){
    $('#phrase').html('無理しちゃいかん');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ひっとやっすみ ～</p>')       
  } 
  if(n == 10){
    $('#phrase').html('遊んじゃおう！');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');       
    $('#comment').html('<p>カモン！レッツゴー</p>')   
  }
  if(n == 11){
    $('#phrase').html('しゃーない');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
    $('#comment').html('<p>そんなときもあるって</p>')  
  } 
  if(n == 12){
    $('#phrase').html('ゴロゴロ～ン');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');       
    $('#comment').html('<p>ぐりんぐりーん</p>')        
  }
  if(n == 13){
    $('#phrase').html('金持ちになろ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ゴールドラッシュ！</p>')     
  } 
  if(n == 14){
    $('#phrase').html('逃げ足はやっ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>フルスロットル！</p>')  
  }
  if(n == 15){
    $('#phrase').html('ふぇいるふぁーすと');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');    
    $('#comment').html('<p>なにはさておき</p>')   
  }
  
  $('#dakara, #shikamo, #tashika, #tsumari, #yappari, #tomoare').off('click')

  // document.getElementById("question").style.display="none";
  document.getElementById("question").innerHTML = "<p>こんなん出たで</p>";

});

$('#shikamo').on('click', function(){
  const shikamot = document. querySelector('#shikamot');
  shikamot.style.fontSize = '28px';
  shikamot.style.fontWeight = 'bold'; 

  const r = Math.random()*4 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#phrase').html('いいアイデアだ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
    $('#comment').html('<p>原石輝いてる</p>')        
  } 
  if(n == 2){
    $('#phrase').html('めっちゃ面白い');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>じわじわくる</p>')           
  }
  if(n == 3){
    $('#phrase').html('逃げ足はやっ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>フルスロットル！</p>')     
  }
  if(n == 4){
    $('#phrase').html('ふぇいるふぁーすと');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">'); 
    $('#comment').html('<p>なにはさておき</p>')      
  }
  
  $('#dakara, #demo, #tashika, #tsumari, #yappari, #tomoare').off('click')

  // document.getElementById("question").style.display="none";
  document.getElementById("question").innerHTML = "<p>こんなん出たで</p>";

});

$('#tashika').on('click', function(){
  const tashikat = document. querySelector('#tashikat');
  tashikat.style.fontSize = '28px';
  tashikat.style.fontWeight = 'bold'; 

  const r = Math.random()*9 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#phrase').html('何か引っかかる');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');       
    $('#comment').html('<p>もっかい見なおそ</p>')
  }
  if(n == 2){
    $('#phrase').html('そういうこと');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
  }
  if(n == 3){
    $('#phrase').html('いいアイデアだ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
    $('#comment').html('<p>原石輝いてる</p>')        
  } 
  if(n == 4){
    $('#phrase').html('めっちゃ面白い');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>じわじわくる</p>')        
  }
  if(n == 5){
    $('#phrase').html('無理しちゃいかん');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ひっとやっすみ～</p>')       
  } 
  if(n == 6){
    $('#phrase').html('しゃーない');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
    $('#comment').html('<p>そんなときもあるって</p>')  
  } 
  if(n == 7){
    $('#phrase').html('金持ちになろ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ゴールドラッシュ！</p>')     
  } 
  if(n == 8){
    $('#phrase').html('逃げ足はやっ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>フルスロットル！</p>')  
  }
  if(n == 9){
    $('#phrase').html('ふぇいるふぁーすと');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');    
    $('#comment').html('<p>なにはさておき</p>')   
  }
  
  $('#dakara, #demo, #shikamo, #tsumari, #yappari, #tomoare').off('click')

  document.getElementById("question").innerHTML = "<p>こんなん出たで</p>";

});

$('#yappari').on('click', function(){
  const yapparit = document. querySelector('#yapparit');
  yapparit.style.fontSize = '28px';
  yapparit.style.fontWeight = 'bold'; 

  const r = Math.random()*15 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#phrase').html('何か引っかかる');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');       
    $('#comment').html('<p>もっかい見なおそ</p>')
  }
  if(n == 2){
    $('#phrase').html('好きにしよ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>追い風きてるよ</p>')   
  } 
  if(n == 3){
    $('#phrase').html('そういうこと');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>ふにおちた？</p>')   
  }
  if(n == 4){
    $('#phrase').html('探そ、きっとある');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');    
    $('#comment').html('<p>灯台もと暗し</p>')     
  } 
  if(n == 5){
    $('#phrase').html('その調子で');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>波乗りジョニー</p>')          
  }
  if(n == 6){
    $('#phrase').html('いいアイデアだ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
    $('#comment').html('<p>原石輝いてる</p>')        
  } 
  if(n == 7){
    $('#phrase').html('めっちゃ面白い');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>じわじわくる</p>')        
  }
  if(n == 8){
    $('#phrase').html('正直にいこ');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');    
    $('#comment').html('<p>ぼくはキミの味方</p>')     
  } 
  if(n == 9){
    $('#phrase').html('無理しちゃいかん');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ひっとやっすみ～</p>')       
  } 
  if(n == 10){
    $('#phrase').html('遊んじゃおう！');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');       
    $('#comment').html('<p>カモン！レッツゴー</p>')   
  }
  if(n == 11){
    $('#phrase').html('しゃーない');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
    $('#comment').html('<p>そんなときもあるって</p>')  
  } 
  if(n == 12){
    $('#phrase').html('ゴロゴロ～ン');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');       
    $('#comment').html('<p>ぐりんぐりーん</p>')        
  }
  if(n == 13){
    $('#phrase').html('金持ちになろ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ゴールドラッシュ！</p>')     
  } 
  if(n == 14){
    $('#phrase').html('逃げ足はやっ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>フルスロットル！</p>')  
  }
  if(n == 15){
    $('#phrase').html('ふぇいるふぁーすと');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');    
    $('#comment').html('<p>なにはさておき</p>')   
  }
  
  $('#dakara, #demo, #shikamo, #tashika, #tsumari, #tomoare').off('click')

  // document.getElementById("question").style.display="none";
  document.getElementById("question").innerHTML = "<p>こんなん出たで</p>";

});

$('#tomoare').on('click', function(){
  const tomoaret = document. querySelector('#tomoaret');
  tomoaret.style.fontSize = '28px';
  tomoaret.style.fontWeight = 'bold'; 

  const r = Math.random()*15 ;
  const n = Math.ceil(r);
  console.log(n);
  if(n == 1){
    $('#phrase').html('何か引っかかる');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');       
    $('#comment').html('<p>もっかい見なおそ</p>')
  }
  if(n == 2){
    $('#phrase').html('好きにしよ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>追い風きてるよ</p>')   
  } 
  if(n == 3){
    $('#phrase').html('そういうこと');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>ふにおちた？</p>')   
  }
  if(n == 4){
    $('#phrase').html('探そ、きっとある');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');    
    $('#comment').html('<p>灯台もと暗し</p>')     
  } 
  if(n == 5){
    $('#phrase').html('その調子で');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>波乗りジョニー</p>')          
  }
  if(n == 6){
    $('#phrase').html('いいアイデアだ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');    
    $('#comment').html('<p>原石輝いてる</p>')        
  } 
  if(n == 7){
    $('#phrase').html('めっちゃ面白い');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');       
    $('#comment').html('<p>じわじわくる</p>')        
  }
  if(n == 8){
    $('#phrase').html('正直にいこ');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');    
    $('#comment').html('<p>ぼくはキミの味方</p>')     
  } 
  if(n == 9){
    $('#phrase').html('無理しちゃいかん');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ひっとやっすみ～</p>')       
  } 
  if(n == 10){
    $('#phrase').html('遊んじゃおう！');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');       
    $('#comment').html('<p>カモン！レッツゴー</p>')   
  }
  if(n == 11){
    $('#phrase').html('しゃーない');
    $('#character').html('<img src="./img/Ranger_pink_w130.png" alt="">');    
    $('#comment').html('<p>そんなときもあるって</p>')  
  } 
  if(n == 12){
    $('#phrase').html('ゴロゴロ～ン');
    $('#character').html('<img src="./img/Ranger_green_w130.png" alt="">');       
    $('#comment').html('<p>ぐりんぐりーん</p>')        
  }
  if(n == 13){
    $('#phrase').html('金持ちになろ');
    $('#character').html('<img src="./img/Ranger_yellow_w130.png" alt="">');    
    $('#comment').html('<p>ゴールドラッシュ！</p>')     
  } 
  if(n == 14){
    $('#phrase').html('逃げ足はやっ');
    $('#character').html('<img src="./img/Ranger_blue_w130.png" alt="">');       
    $('#comment').html('<p>フルスロットル！</p>')  
  }
  if(n == 15){
    $('#phrase').html('ふぇいるふぁーすと');
    $('#character').html('<img src="./img/Ranger_red_w130.png" alt="">');    
    $('#comment').html('<p>なにはさておき</p>')   
  }
  
  $('#dakara, #demo, #shikamo, #tashika, #tsumari, #yappari').off('click')

  // document.getElementById("question").style.display="none";
  document.getElementById("question").innerHTML = "<p>こんなん出たで</p>";

});

