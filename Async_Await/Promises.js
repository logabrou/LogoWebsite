
// Extra Credit 1
// create function with a returned promise
let getRandomNumber = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let ranNum = Math.floor(Math.random() * 100);
        resolve(ranNum)
      }, 5000);
    });
  };
  
//   call the promise function
  async function asyncfunction () {
    //   await the return 
    let result = await getRandomNumber();
    console.log(result);
  };
  
  asyncfunction();
  
  
  

  
// Extra Credit 2  
  let getCity = async (city) => {
    let result = await fetch (`https://geocode.xyz/${city}?json=1`)
    if (result.ok) {
      let jSon = await result.json();
      console.log(`The longitude of ${city} is ${jSon.longt} and the lattitude is ${jSon.latt}`);
    }
   };
  let city = prompt("Choose a city.")
  getCity(city);
  