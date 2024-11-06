fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    // .then((data)=>{
    //     data.map((value)=>{
    //         console.log(value.category)
    //     })
    // })
    .then((data)=>{
        data.map((value)=>{
            let card =`<div class="card col-5" style="width: 18rem;">
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${value.title}</h5>
              <p class="card-text">${value.description}</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>`
          document.getElementById("main-div").innerHTML += card;
        })
    })