if (navigator.appName === "Microsoft Internet Explorer" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {
  const warn = document.createElement("div");
  warn.innerHTML = "Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\"_blank\" style=\"color:white;\" rel=\"noopener noreferrer\" href=\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\">není bezpečné</a>, zvažte přechod na <a target=\"_blank\" style=\"color:white;\" rel=\"noopener noreferrer\" href=\"https://www.mozilla.org/cs/firefox/new/\">jiný prohlížeč</a>.";
  warn.style.cssText = "text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;";
  document.body.appendChild(warn);
}

if (window.innerWidth < 600) {
  document.getElementById("graf-1").innerHTML = '<img class="img" src="https://data.irozhlas.cz/nadeje-doziti-podle-vzdelani/graf_1_mob.svg">'
} else {
  document.getElementById("graf-1").innerHTML = '<img class="img" src="https://data.irozhlas.cz/nadeje-doziti-podle-vzdelani/graf_1_des.svg">'
}

if (window.innerWidth < 600) {
  document.getElementById("graf-2").innerHTML = '<img class="img" src="https://data.irozhlas.cz/nadeje-doziti-podle-vzdelani/graf_2_mob.svg">'
} else {
  document.getElementById("graf-2").innerHTML = '<img class="img" src="https://data.irozhlas.cz/nadeje-doziti-podle-vzdelani/graf_2_des.svg">'
}

if (window.innerWidth < 600) {
  document.getElementById("graf-3").innerHTML = '<img class="img" src="https://data.irozhlas.cz/nadeje-doziti-podle-vzdelani/graf_3_mob.svg">'
} else {
  document.getElementById("graf-3").innerHTML = '<img class="img" src="https://data.irozhlas.cz/nadeje-doziti-podle-vzdelani/graf_3_des.svg">'
}