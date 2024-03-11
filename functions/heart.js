
function life (emoji,nbHeart){
    let newP = document.createElement("p");
    document.body.append(newP);
    for (let i = 0; i < nbHeart ; i++){
        newP.innerHTML += emoji ;
    
    }
  
}

export {life}

