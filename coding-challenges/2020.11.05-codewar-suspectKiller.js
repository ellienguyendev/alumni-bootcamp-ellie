const suspectInfo = {james: ['Jacob', 'Bill', 'Lucas'],
                      johnny: ['David', 'Kyle', 'Lucas'],
                      peter: ['Lucy', 'Kyle']}
const deadFolks = ['Lucas', 'Bill']

function killer(suspectInfo, deadFolks) {
  let suspects = []

  Object.keys(suspectInfo).forEach(function(person){
      for(name in deadFolks){
        if(suspectInfo[person].includes(deadFolks[name])){
          suspects.push(person)
      }
    }
  })
  var killer = mostFrequent(suspects)
  console.log(killer)
}

function mostFrequent(names){
  var counts = {};
  var compare = 0;
  var mostFrequent;
   for(var i = 0; i < names.length; i++){
       var name = names[i];

       if(counts[name] === undefined){
           counts[name] = 1;
       }else{
           counts[name] = counts[name] + 1;
       }
       if(counts[name] > compare){
             compare = counts[name];
             mostFrequent = names[i];
       }
    }
  return mostFrequent;
}

killer(suspectInfo, deadFolks)
