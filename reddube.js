/* Reddit suggestion in youtube
 * Parse subreddit json 
 * nk@V0.1 | https://github.com/webdev23/reddube
 * */

var reds = ["/r/videos","/r/unknownvideos","/r/DeepIntoYouTube","/r/ChannelWatch","/r/newsreels","/r/fullmoviesonyoutube","/r/SF_Videos","/r/classicfilms","/r/Documentaries","/r/artdocumentaries","/r/ShowsonYT","/r/YTPL","/r/NotTimAndEric","/r/youtubehaiku","/r/PlayItAgainSam","/r/ObscureMedia","/r/360video","/r/AccidentalComedy","/r/amibeingdetained","/r/ArtisanVideos","/r/AwfulCommercials","/r/BestOfLiveleak","/r/bestofworldstar","/r/cringe","/r/CommercialCuts","/r/contagiouslaughter","/r/cookingvideos","/r/curiousvideos","/r/deepintoyoutube","/r/documentaries","/r/educativevideos","/r/FastWorkers","/r/fightporn","/r/FuckingWithNature","/r/fullmoviesonyoutube","/r/happycrowds/","/r/idiotsfightingthings","/r/IMGXXXX","/r/lectures","/r/mealtimevideos","/r/motivationvideos","/r/ObscureMedia","/r/playitagainsam","/r/Prematurecelebration","/r/PublicFreakout","/r/Roadcam","/r/streetfights","/r/sweetjustice","/r/TheWayWeWereOnVideo","/r/trailers","/r/UnexpectedThugLife","/r/video","/r/videos","/r/videoporn","/r/vids","/r/vine","/r/vines","/r/virtualfreakout","/r/woahtube","/r/youtubehaiku"]  
var rview = ["","/new/","/rising/","/controversial/","/top/"]  
related.innerHTML = "<div style='filter: sepia(38%) invert(100%) saturate(100%) brightness(1) grayscale(0%) hue-rotate(360deg) contrast(100%)'><span id='subR' data-ccc='25' style='color:white;background:#141e1b;font-size:1.44em;width:20px'></span><input type='range' value='0' max='60' id ='redR' style='float:right;width:230px' onchange='redList.innerHTML=\"\";redd(this.value)'><br><span onclick='redList.innerHTML=\"\";' style='float:right;margin:3px 0 0 0'><button id='rflt' data-filter='0' onclick='this.dataset.filter=0;redd(redR.value)'>hot</button><button onclick='rflt.dataset.filter=1;redd(redR.value)'>new</button><button onclick='rflt.dataset.filter=2;redd(redR.value)'>rising</button><button onclick='rflt.dataset.filter=3;redd(redR.value)'>controversial</button><button onclick='rflt.dataset.filter=4;redd(redR.value)'>top</button></span><hr /><hr /><hr /><hr /><tr><br></div><div id='redList'>"

function redd(it){
 console.log(it)    
 console.log(reds[1])
 
 subR.innerHTML = reds[it]
  
  xhr = new XMLHttpRequest
  xhr.open("GET","https://www.reddit.com"+reds[it]+rview[rflt.dataset.filter]+".json?limit=200",true)
  xhr.send(null)
  xhr.onreadystatechange = function() {
   if (xhr.readyState === xhr.DONE) {
    if(this.status === 200) {
     
      vids = JSON.parse(xhr.responseText) 
   
   cc = subR.dataset.ccc

    for (var j=0;j<=cc;j++){
     try{ 
      var rt = vids['data']['children'][j]['data']['title'],
	  rl = vids['data']['children'][j]['data']['url'],
	  rp = vids['data']['children'][j]['data']['secure_media']['oembed']['thumbnail_url']
      
      redList.innerHTML += "<td><a href='"+rl+"'><img style='width:150px;height:auto;max-width:120px' src='"+rp+"'></img></a><span style='max-width:68%;float:right;text-align:center;font-size:1.23em'><a class='yt-simple-endpoint style-scope ytd-compact-video-renderer' style='text-decoration:bold;font-size:1.23em;text-align:left;min-width:260px' href='"+rl+"'>"+rt+"</a></span></td><br>"
	 }catch(e){console.log(e)}
	 
	}	
      }
    }
  }
}

related.innerHTML += "</tr><button onclick='redList.innerHTML=\"\";redd(redR.value)'>Load more</button>"
redd(0)
 
window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop + window.innerHeight;
  var height = d.offsetHeight;

  console.log('offset = ' + offset);
  console.log('height = ' + height);

  if (offset >= '2000' && offset <= '2300') {
     console.log("1960!")
  
     subR.dataset.ccc = 25
     
     
  }

  if (offset >= '2000' && offset <= '2100') {
     console.log("1960!")
  
     subR.dataset.ccc = 50
     
    
  }
  if (offset >= '3400' && offset <= '3500') {
     console.log("1960!")
  
     subR.dataset.ccc = 100
     
     
  }
  if (offset >= '5400' && offset <= '5500') {
     console.log("2900!")
  
     subR.dataset.ccc = 150
     
    
  }
  if (offset >= '7400' && offset <= '7500') {
     console.log("2900!")
  
     subR.dataset.ccc = 200
     
    
  }
}
