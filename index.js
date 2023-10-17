class DiagramaCarro {
Marca
Modelo
Categoria
Ano
Quilometragem
Valor
constructor(marca,modelo,categoria,ano,quilometragem,valor){
this.Marca = marca
this.Modelo = modelo
this.Categoria = categoria
this.Ano = ano
this.Quilometragem = quilometragem
this.Valor = valor
}
}
function Get() {

    return fetch('https://apigenerator.dronahq.com/api/BGAV2tEK/data')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }
  function GetById(id) {

    return fetch(`https://apigenerator.dronahq.com/api/BGAV2tEK/data/${id}`)
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }
  
  async function postData( data = {}) {

    const response = await fetch('https://apigenerator.dronahq.com/api/BGAV2tEK/data', {
  
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  async function PutData( id, data = {}) {

    const response = await fetch(`https://apigenerator.dronahq.com/api/BGAV2tEK/data/${id}`, {
  
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  async function DeleteData( id, data = {}) {

    const response = await fetch(`https://apigenerator.dronahq.com/api/BGAV2tEK/data/${id}`, {
  
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }
  let Carro = new DiagramaCarro ('BestCars' , 'FamilyVan' , 'Minivan' , 2021 , 15500, 50000)
  postData(Carro)
    .then((data) => {
      console.log(data);  
  
  });
  PutData(1 , Carro)
    .then((data) => {
      console.log(data);  
  
  });
  DeleteData(1)
    .then((data) => {
      console.log(data);  
  
  });
  Get()
    .then((data) => {
      console.log(data)
    })
  GetById(1)
  .then((data) => {
      console.log(data)
    })
 
  
