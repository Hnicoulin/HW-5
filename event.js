let friendlist = new Array ();

function formSubmitEvent(){
  let inputfriend = document.getElementById("fdname").value;
  let inputanimal = document.getElementById("favani").value;
  const inputfaves = new Favorites(inputfriend, inputanimal);
  
  console.log(inputfaves); 
    if (validate(inputfaves) == false){
  alert("Please fill out all input boxes.")
    }
    else{
      friendlist.push(inputfaves)
    }
}
jQuery(document).on("pagebeforeshow","#page2",function(event){
  let f = "";
  for (o = 0; o<friendlist.length; o++){
    let st = getAll(friendlist[o]);
    f += st + "<br>";
  }
  document.getElementById('list').innerHTML = f;
});
 // document.getElementById("loadlist").addEventListener("click", showFaveList());

//function showFaveList(){
 // let f = "";
  //for (o = 0; o<friendlist.length; o++){
  //  let st = getAll(friendlist[o]);
  //  f += st + "<br>";
//  }
//  document.getElementById('list').innerHTML = f;
  
//}

