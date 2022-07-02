let prime = "Not Prime";
for (let N = prompt("Number to check for prime"), R = 2; R < N; R++) {
  //zero isn't prime. but zero / anything = zero
  if (N == "0") {
    prime = "Not Prime";
    break;
  }
  if (N % R != 0) {
    prime = "Prime";
  } else {
    prime = "Not Prime";
    break;
  }
}
(prime == "Prime") ? alert(prime) : alert("Not Prime"); 
