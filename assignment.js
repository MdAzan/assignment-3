


// kilometerToMeter
function kilometerToMeter(km){
  let result = '';

  if(km < 0){
    const error = "Distance can't be negative";
    result = error;
  }else{
    const meter = km * 1000;
    result = meter;
  }

  return result;
} 






//  budgetCalculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){
  // assigning value to each products
  let watchPrice = 50;
  let phonePrice = 100;
  let laptopPrice = 500;

  let totalPrice = '';
  // Check while products quantitis are negative value
  if(watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0){
    const error = "Negative values are not allowed";
    totalPrice = error;
  }else{
    // multiply a single product's price with it's quantity
    watchPrice = watchPrice * watchQuantity;
    phonePrice = phonePrice * phoneQuantity;
    laptopPrice = laptopPrice * laptopQuantity;

    totalPrice = watchPrice + phonePrice + laptopPrice;
  }
 
  return totalPrice;
}







// hotelCost
function hotelCost(day){
  // per night's rent
  const rentOfFirstTen = 100;
  const rentOfSecondTen = 80;
  const rentOfAfterTwenty = 50;

  let hotelCost = '';
  // Start Checking when day's value is negative
  if(day < 0){
    const error = "Day can't have negative value";
    hotelCost = error;

  }else{
      // hotelCost calculation start from here
      if(day <= 10){   // LESS THAN OR EQUAL 10 DAYS
        hotelCost = rentOfFirstTen * day;

      } else if(day > 10 && day <= 20){   // 11 To 20 DAYS
        let firsTenDays = 10;
        let existingDays =  day - 10;
        hotelCost = (rentOfFirstTen * firsTenDays) + (rentOfSecondTen * existingDays);

      }else{  //  MORE THAN 20 DAYS
        let firsTenDays = 10;
        let secondTenDays = 10;
        let existingDays = day - (firsTenDays + secondTenDays);  // I also can use 20 directly instead of (firsTenDays + secondTenDays)
        hotelCost = (rentOfFirstTen * firsTenDays) + (rentOfSecondTen * secondTenDays) + (rentOfAfterTwenty * existingDays);
        return hotelCost;
      }
  }

  return hotelCost;
}





// megaFriend function
const friends = ['Masum Munna', 34, 'Ahosan Habib', 'Sazzadul Islam Pulok', 'Rafiul Azam', 'Ibne Sabit Al Sifat', 'Afsana Mimi', '', true, false, 8584, 'last one'];

function megaFriend(friendList) {
  // Just Keep the STRING and remove the rest
  let validNames = [];
  for(var i = 0; i < friendList.length; i++){
    if(typeof friendList[i] == 'string' && friendList[i] != ''){
      validNames.push(friendList[i])
    }
  } // Now we have got an array named validNames which contains just string type values


  // find a name from validNames Array which has the highestCharecters
  let highestChars = validNames[0].length;
  for(var i = 0; i < validNames.length; i++){
    let element = validNames[i].length;
    if(element > highestChars){
      highestChars = element;
    }
  } //  higestChars variable contains the numbers of chars of the longName


  // finally get the long name
  let longName = '';
  for(var i = 0; i < validNames.length; i++){
    if(validNames[i].length == highestChars){
      longName = validNames[i];
    }
  } // Now return the long name


  return longName;
}