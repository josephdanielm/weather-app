(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();async function U(a){const r=await a,n=r.location,e=r.current,o=r.forecast.forecastday,t=o[0],c=o[1],m=o[2];return{location:{name:n.name,region:n.region,country:n.country,localtime:n.localtime.slice(-10)},current:{temp_f:`${e.temp_f} F`,temp_c:`${e.temp_c} C`,is_day:e.is_day,condition:e.condition,wind_mph:`${e.wind_mph} mph`,wind_dir:e.wind_dir,precip_in:`${e.precip_in}" rainfall`,humidity:`${e.humidity}% Humidity`,cloud:e.cloud,feelslike_c:e.feelslike_c,feelslike_f:e.feelslike_f,uv:`UV: ${e.uv}`},forecast:{today:{date:t.date.slice(-5),maxtemp_c:`Max: ${t.day.maxtemp_c} C`,maxtemp_f:`Max: ${t.day.maxtemp_f} F`,mintemp_c:`Min: ${t.day.mintemp_c} C`,mintemp_f:`Min: ${t.day.mintemp_f} F`,avgtemp_c:`Avg: ${t.day.avgtemp_c} C`,avgtemp_f:`Avg: ${t.day.avgtemp_f} F`,maxwind_mph:t.day.maxwind_mph,totalprecip_in:t.day.totalprecip_in,avghumidity:t.day.avghumidity,chanceofrain:`${t.day.daily_chance_of_rain}% CoR`,condition:t.day.condition,uv:t.day.uv},tomorrow:{date:c.date.slice(-5),maxtemp_c:`Max: ${c.day.maxtemp_c} C`,maxtemp_f:`Max: ${c.day.maxtemp_f} F`,mintemp_c:`Min: ${c.day.mintemp_c} C`,mintemp_f:`Min: ${c.day.mintemp_f} F`,avgtemp_c:`Avg: ${c.day.avgtemp_c} C`,avgtemp_f:`Avg: ${c.day.avgtemp_f} F`,maxwind_mph:c.day.maxwind_mph,totalprecip_in:c.day.totalprecip_in,avghumidity:c.day.avghumidity,chanceofrain:`${c.day.daily_chance_of_rain}% CoR`,condition:c.day.condition,uv:c.day.uv},overmorrow:{date:m.date.slice(-5),maxtemp_c:`Max: ${m.day.maxtemp_c} C`,maxtemp_f:`Max: ${m.day.maxtemp_f} F`,mintemp_c:`Min: ${m.day.mintemp_c} C`,mintemp_f:`Min: ${m.day.mintemp_f} F`,avgtemp_c:`Avg: ${m.day.avgtemp_c} C`,avgtemp_f:`Avg: ${m.day.avgtemp_f} F`,maxwind_mph:m.day.maxwind_mph,totalprecip_in:m.day.totalprecip_in,avghumidity:m.day.avghumidity,chanceofrain:`${m.day.daily_chance_of_rain}% CoR`,condition:m.day.condition,uv:m.day.uv}}}}async function s(a){try{const r=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b43a9d1e821b4ba5b2b04526241803&q=${a}&days=3&aqi=no&alerts=no`,{mode:"cors"});if(!r.ok)throw new Error(`${r.status}`);const n=await r.json();return U(n)}catch(r){console.error(r)}return null}async function V(a,r){const n=document.getElementById("loadingOverlay");n.style.display="absolute";const e=await r,o=document.getElementById("currentName"),t=document.getElementById("currentRegion"),c=document.getElementById("currentCountry"),m=document.getElementById("currentTime"),y=document.getElementById("currentCondition"),p=document.getElementById("currentTempF"),u=document.getElementById("currentTempC"),f=document.getElementById("currentWindDirection"),g=document.getElementById("currentWindMPH"),_=document.getElementById("currentInchesRain"),i=document.getElementById("displayConditionBar"),v=document.getElementById("todayDate"),x=document.getElementById("todayCondition"),T=document.getElementById("todayMinTempF"),w=document.getElementById("todayMinTempC"),h=document.getElementById("todayAvgTempF"),E=document.getElementById("todayAvgTempC"),C=document.getElementById("todayMaxTempF"),I=document.getElementById("todayMaxTempC"),B=document.getElementById("todayChanceOfRain"),M=document.getElementById("tomorrowDate"),F=document.getElementById("tomorrowCondition"),$=document.getElementById("tomorrowMinTempF"),A=document.getElementById("tomorrowMinTempC"),D=document.getElementById("tomorrowAvgTempF"),L=document.getElementById("tomorrowAvgTempC"),O=document.getElementById("tomorrowMaxTempF"),b=document.getElementById("tomorrowMaxTempC"),R=document.getElementById("tomorrowChanceOfRain"),S=document.getElementById("overmorrowDate"),N=document.getElementById("overmorrowCondition"),P=document.getElementById("overmorrowMinTempF"),W=document.getElementById("overmorrowMinTempC"),k=document.getElementById("overmorrowAvgTempF"),q=document.getElementById("overmorrowAvgTempC"),H=document.getElementById("overmorrowMaxTempF"),j=document.getElementById("overmorrowMaxTempC"),K=document.getElementById("overmorrowChanceOfRain");o.innerText=a,t.innerText=e.location.region,c.innerText=e.location.country,m.innerText=e.location.localtime,y.innerText=e.current.condition.text,p.innerText=e.current.temp_f,u.innerText=e.current.temp_c,f.innerText=e.current.wind_dir,g.innerText=e.current.wind_mph,_.innerText=e.current.precip_in,e.current.is_day===0?(i.classList.contains("isDay")&&i.classList.remove("isDay"),i.classList.add("isNight")):(i.classList.contains("isNight")&&i.classList.remove("isNight"),i.classList.add("isDay")),v.innerText=e.forecast.today.date,x.innerText=e.forecast.today.condition.text,T.innerText=e.forecast.today.mintemp_f,w.innerText=e.forecast.today.mintemp_c,h.innerText=e.forecast.today.avgtemp_f,E.innerText=e.forecast.today.avgtemp_c,C.innerText=e.forecast.today.maxtemp_f,I.innerText=e.forecast.today.maxtemp_c,B.innerText=e.forecast.today.chanceofrain,M.innerText=e.forecast.tomorrow.date,F.innerText=e.forecast.tomorrow.condition.text,$.innerText=e.forecast.tomorrow.mintemp_f,A.innerText=e.forecast.tomorrow.mintemp_c,D.innerText=e.forecast.tomorrow.avgtemp_f,L.innerText=e.forecast.tomorrow.avgtemp_c,O.innerText=e.forecast.tomorrow.maxtemp_f,b.innerText=e.forecast.tomorrow.maxtemp_c,R.innerText=e.forecast.tomorrow.chanceofrain,S.innerText=e.forecast.overmorrow.date,N.innerText=e.forecast.overmorrow.condition.text,P.innerText=e.forecast.overmorrow.mintemp_f,W.innerText=e.forecast.overmorrow.mintemp_c,k.innerText=e.forecast.overmorrow.avgtemp_f,q.innerText=e.forecast.overmorrow.avgtemp_c,H.innerText=e.forecast.overmorrow.maxtemp_f,j.innerText=e.forecast.overmorrow.maxtemp_c,K.innerText=e.forecast.overmorrow.chanceofrain,n.style.display="none"}function z(){const a=document.getElementById("locationSearchForm"),r=document.getElementById("locationSearchInput"),n=document.getElementById("loadingOverlay");a.addEventListener("submit",e=>{e.preventDefault(),r.blur(),a.blur(),n.style.display="block";const o=r.value;r.value="",console.log("searching: ",o),s(o).then(t=>{console.log(t),V(t.location.name,t),n.style.display="none"}).catch(t=>{console.log(t)}).finally(t=>{n.style.display="none",console.log(t)})})}let d="c";function l(){const a=document.querySelectorAll(".tempC"),r=document.querySelectorAll(".tempF");d==="f"?(d="c",r.forEach(n=>{n.style.display="none"}),a.forEach(n=>{n.style.display="block"})):(d="f",r.forEach(n=>{n.style.display="block"}),a.forEach(n=>{n.style.display="none"}))}z();s("Lafayette").then(a=>{console.log(a)}).catch(a=>{console.log(a)});document.getElementById("locationSearchForm").addEventListener("click",()=>{document.getElementById("locationSearchInput").focus()});l();document.getElementById("tempWrapper").addEventListener("click",l);