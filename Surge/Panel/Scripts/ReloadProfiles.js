$httpAPI("POST", "/v1/profiles/reload", {}, data => {
  let panel = {
	title: "配置重载",
	content: "successed at "+getCurrentDate(),
	icon: "pencil.and.outline",
	"icon-color": "#FF9500",
  };
  if (typeof $argument != "undefined") {
	let arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));
	if (arg.title) panel.title = arg.title;
	if (arg.icon) panel.icon = arg.icon;
	if (arg.color) panel["icon-color"] = arg.color;
  }
  $done(panel);

  function getCurrentDate() {
	var d = new Date()
	var year = d.getFullYear()
	var month = d.getMonth()
	month = month + 1 > 12 ? 1 : month + 1
	month = month > 9 ? month : '0' + month.toString()
	var day = d.getDate()
	var hour = d.getHours()
	hour = hour > 9 ? hour : '0' + hour.toString()
	var minute = d.getMinutes()
	minute = minute > 9 ? minute : '0' + minute.toString()
	var second = d.getSeconds()
	return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
});
