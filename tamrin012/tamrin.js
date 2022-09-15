const summary = (text, chr) => {
  const ftext = text.substr(0, chr);
  const short = `${ftext}...`;
  return short;
};
console.log(summary("hello world", 7));

function secret(card) {
  let cardNum = card.slice(0, 12);
  let final = String(cardNum);
  return `${final}****`;
}
console.log(secret("1111111111111111"));
const censor = (text, cen) => {
  let fText = text.replaceAll(cen, "*".repeat(cen.length));
  return fText;
};
console.log(censor("hello world", "world"));
const level = function (years) {
  if (years <= 2) {
    return "junior";
  } else if (years <= 5) {
    return "mid level";
  } else {
    return "senior";
  }
};
console.log(level(8));
