
const loadPlayers=()=>{
    document.getElementById("sppiner").style.display="block"
    if(document.getElementById("input-field").value==''){
        document.getElementById("sppiner").style.display="none"
        document.getElementById("error-msg").textContent='please enter a name'
        document.getElementById("payer-list").innerHTML=''
    }
    else{
        const inputField=document.getElementById("input-field").value
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputField}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPlayer(data.player))
    document.getElementById("input-field").value=''
    document.getElementById("sppiner").style.
    display="none"
    }
}
const displayPlayer=(players)=>{
    console.log(players);
  
    document.getElementById("payer-list").innerHTML=''
    // document.getElementById("right-side").innerHTML=''
    if(players==null){
        document.getElementById("sppiner").style.display="block"
        
     setTimeout(() => {
        const error=document.getElementById("error-msg")
       error.textContent='not found any players'
       document.getElementById("sppiner").style.display="none"
    }, 1000);
    }
 
   for(const player of players){
    // console.log(player);
  
    const playerList=document.getElementById("payer-list")
    const div=document.createElement("div")
    div.innerHTML=  player.strThumb?`  <div class="card" style="width: 18rem;">
    <img src="${player.strThumb}" class="card-img-top w-75" alt="">
    <div class="card-body">
    <h1>Name:${player.strPlayer}</h1>
    <h5>Nationality:${player.strNationality}</h5>
    
    <button onclick="deleteButton(this)"class="btn-danger">delete</button>
    <button onclick="loadDetail('${player.idPlayer}')"  class="btn-primary">details</button>
    
    </div>
    </div>`:''
  
playerList.appendChild(div)
    
}
}
const loadDetail=(info)=>{
    console.log(info)
const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
console.log(url);
fetch(url)
.then(res=>res.json())
.then(data=>displayDetail(data.
    players[0]))
}
const displayDetail=(player)=>{
    console.log(player);
    document.getElementById("player-detail").innerHTML=''
   
    if(player.strGender=='Male'){
        document.getElementById("male").style.display="block"
        document.getElementById("female").style.display="none"

    }
    else{
        document.getElementById("male").style.display="none"
        document.getElementById("female").style.display="block"
    }
    const playerDetail=document.getElementById("player-detail")
    console.log(playerDetail);
    const div=document.createElement("div")
    div.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${player.strThumb}" class="card-img-top" alt="...">
  <div class="card-body">
  <h2>Name:${player.strPlayer}</h2>
    <h5>Date of Birth:${player.dateBorn}</h5>
    <h5>Position:${player.strTeam}</h5>
    <a href="${player.strFacebook}" class="card-link">FACEBOOK</a>
  </div>
</div>`

playerDetail.appendChild(div)
}
const deleteButton=(e)=>{
    // console.log(e.parentNode.parentNode.parentNode);
    e.parentNode.parentNode.style.display="none"
    document.getElementById("right-side").innerHTML=''
}