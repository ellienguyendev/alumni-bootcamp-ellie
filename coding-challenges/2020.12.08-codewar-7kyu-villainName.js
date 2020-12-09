function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

    const first = m[birthday.getMonth()]
    const date = birthday.getDate().toString()
    let idx = date.length === 1 ? 0 : 1
    const last = d[date[idx]]
    
    return `The ${first} ${last}`
  }

  console.log(getVillainName(new Date("July 1")));