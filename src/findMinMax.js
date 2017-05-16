function findMinMax(arr)
{
  
  arr = arr.sort((a, b) => a - b);
  //console.log(arr);
  //onsole.log(arr[0]);
  let max = arr[arr.length-1]
  let min = arr[0];
  
  
  if(min !== max)
  {
    let answer =[];
    answer.push(min);
    answer.push(max);
    
    return answer;
  }
  else
  {
    let newAnswer = [min];

    return newAnswer;
  }
  
    
}