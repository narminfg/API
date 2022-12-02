let product = document.querySelector('#product')
btn.onclick=function(){
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> {
				console.log(data);
				let html =''
				data.forEach(element => {
					let elementtitle=element.title.length>20 ?element.title.slice(0,20) + '....' : element.title
					let elementname=element.description.length>20 ?element.description.slice(0,20) + '....' : element.description
					html +=`
					<div class="col-lg-4 box">
					<div class="card" >
					<img class="card-img-top" src="${element.image}" alt="Card image cap">
					<div class="card-body">
					  <h5 class="card-title">${elementtitle}</h5>
					  <p class="card-text">${elementname}</p>
					  <p>${element.category}</p>
					  <p class="bg-warning price">${element.price} AZN</p>
					 
					</div>
				  </div>
				</div>
					`
				});
				document.getElementById('product').innerHTML=html
			
			})
			.catch( () =>{
				product.innerHTML = `<h3 class="error"> Couldn't Find The Word </h3>`;
			})
		}