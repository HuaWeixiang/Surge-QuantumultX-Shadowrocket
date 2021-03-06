let url = "http://ip-api.com/json"

$httpClient.get(url, function(error, response, data){
  let jsonData = JSON.parse(data)
  let country = jsonData.country
  let emoji = getFlagEmoji(jsonData.countryCode)
  let city = jsonData.city
  let isp = jsonData.isp
  let ip = jsonData.query
  let panel = {
    title: "节点信息",
    content: `IP ➟ ${ip}\nISP ➟ ${isp}\n位置 ➟ ${emoji}${country}-${city}`,
    icon: "globe.asia.australia.fill"
  }
  if (typeof $argument != "undefined") {
    let arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));
    if (arg.title) panel.title = arg.title;
    if (arg.icon) panel.icon = arg.icon;
    if (arg.color) panel["icon-color"] = arg.color;
  }
  $done(panel);
});

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
