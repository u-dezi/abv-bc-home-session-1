function aritGeo(arr){
 
  //variables to determine if its arithmethic or geometric
  let arithmethicCount = 0;
  let geometricCount = 0;
  //Check if array is empty
      if(arr.length <=0)
      {
        return 0;
      }
  
  for (let i = 0; i<arr.length - 2; i++ )
  
  {
      
      
      //statements to determine if the array is in arithmethic form 
      if((arr[i+1] - arr[i]) === (arr[i+2] - arr[i+1]))
      {
        arithmethicCount++;
      }
      //statements to determine if the array is in geometricCount form 
      else if((arr[i] / arr[i+1]) === (arr[i+1] / arr[i+2]))
      {
        geometricCount++;
      }
      else 
      {
        //console.log( "It is not arithmethic nor geometric");
        return -1;
      }
    
  }
  if(arithmethicCount == (arr.length-2))
  {
    return "Arithmetic"
  }
  else if (geometricCount ==(arr.length-2))
  {
    return "Geometric";
  }
}