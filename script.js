//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/xensidenbts.tk";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Сервер оффлайн! Возможно на нем Тех.Неполадки.');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  } 
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Игроков Онлайн:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});