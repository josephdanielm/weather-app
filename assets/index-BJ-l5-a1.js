(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();async function K(c){const r=await c,n=r.location,e=r.current,o=r.forecast.forecastday,t=o[0],a=o[1],m=o[2];function d(s){const[i,l]=s.split(":");return`${i%12||12}:${l} ${i>=12?"PM":"AM"}`}return{location:{name:n.name,region:n.region,country:n.country,localtime:d(n.localtime.slice(-5))},current:{temp_f:`${Math.round(e.temp_f)} F`,temp_c:`${Math.round(e.temp_c)} C`,is_day:e.is_day,condition:e.condition,wind_mph:`${e.wind_mph} mph`,wind_dir:e.wind_dir,precip_in:`${e.precip_in}" rainfall`,humidity:`${e.humidity}% Humidity`,cloud:e.cloud,feelslike_c:e.feelslike_c,feelslike_f:e.feelslike_f,uv:`UV: ${e.uv}`},forecast:{today:{date:t.date.slice(-5),maxtemp_c:`Max:
 ${Math.round(t.day.maxtemp_c)} C`,maxtemp_f:`Max:
 ${Math.round(t.day.maxtemp_f)} F`,mintemp_c:`Min:
 ${Math.round(t.day.mintemp_c)} C`,mintemp_f:`Min:
 ${Math.round(t.day.mintemp_f)} F`,avgtemp_c:`Avg:
 ${Math.round(t.day.avgtemp_c)} C`,avgtemp_f:`Avg:
 ${Math.round(t.day.avgtemp_f)} F`,maxwind_mph:t.day.maxwind_mph,totalprecip_in:t.day.totalprecip_in,avghumidity:t.day.avghumidity,chanceofrain:`${t.day.daily_chance_of_rain}%
CoR`,condition:t.day.condition,uv:t.day.uv},tomorrow:{date:a.date.slice(-5),maxtemp_c:`Max:
 ${Math.round(a.day.maxtemp_c)} C`,maxtemp_f:`Max:
 ${Math.round(a.day.maxtemp_f)} F`,mintemp_c:`Min:
 ${Math.round(a.day.mintemp_c)} C`,mintemp_f:`Min:
 ${Math.round(a.day.mintemp_f)} F`,avgtemp_c:`Avg:
 ${Math.round(a.day.avgtemp_c)} C`,avgtemp_f:`Avg:
 ${Math.round(a.day.avgtemp_f)} F`,maxwind_mph:a.day.maxwind_mph,totalprecip_in:a.day.totalprecip_in,avghumidity:a.day.avghumidity,chanceofrain:`${a.day.daily_chance_of_rain}%
CoR`,condition:a.day.condition,uv:a.day.uv},overmorrow:{date:m.date.slice(-5),maxtemp_c:`Max:
 ${Math.round(m.day.maxtemp_c)} C`,maxtemp_f:`Max:
 ${Math.round(m.day.maxtemp_f)} F`,mintemp_c:`Min:
 ${Math.round(m.day.mintemp_c)} C`,mintemp_f:`Min:
 ${Math.round(m.day.mintemp_f)} F`,avgtemp_c:`Avg:
 ${Math.round(m.day.avgtemp_c)} C`,avgtemp_f:`Avg:
 ${Math.round(m.day.avgtemp_f)} F`,maxwind_mph:m.day.maxwind_mph,totalprecip_in:m.day.totalprecip_in,avghumidity:m.day.avghumidity,chanceofrain:`${m.day.daily_chance_of_rain}%
CoR`,condition:m.day.condition,uv:m.day.uv}}}}async function y(c){try{const r=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b43a9d1e821b4ba5b2b04526241803&q=${c}&days=3&aqi=no&alerts=no`,{mode:"cors"});if(!r.ok)throw new Error(`${r.status}`);const n=await r.json();return K(n)}catch(r){console.error(r)}return null}async function U(c,r){const n=document.getElementById("loadingOverlay");n.style.display="absolute";const e=await r,o=document.getElementById("currentName"),t=document.getElementById("currentRegion"),a=document.getElementById("currentCountry"),m=document.getElementById("currentTime"),d=document.getElementById("currentCondition"),s=document.getElementById("currentTempF"),i=document.getElementById("currentTempC"),l=document.getElementById("currentWindDirection"),f=document.getElementById("currentWindMPH"),g=document.getElementById("currentInchesRain"),_=document.getElementById("todayDate"),v=document.getElementById("todayCondition"),h=document.getElementById("todayMinTempF"),x=document.getElementById("todayMinTempC"),T=document.getElementById("todayAvgTempF"),w=document.getElementById("todayAvgTempC"),M=document.getElementById("todayMaxTempF"),E=document.getElementById("todayMaxTempC"),C=document.getElementById("todayChanceOfRain"),I=document.getElementById("tomorrowDate"),B=document.getElementById("tomorrowCondition"),F=document.getElementById("tomorrowMinTempF"),$=document.getElementById("tomorrowMinTempC"),A=document.getElementById("tomorrowAvgTempF"),O=document.getElementById("tomorrowAvgTempC"),D=document.getElementById("tomorrowMaxTempF"),b=document.getElementById("tomorrowMaxTempC"),L=document.getElementById("tomorrowChanceOfRain"),R=document.getElementById("overmorrowDate"),S=document.getElementById("overmorrowCondition"),P=document.getElementById("overmorrowMinTempF"),W=document.getElementById("overmorrowMinTempC"),k=document.getElementById("overmorrowAvgTempF"),q=document.getElementById("overmorrowAvgTempC"),N=document.getElementById("overmorrowMaxTempF"),H=document.getElementById("overmorrowMaxTempC"),j=document.getElementById("overmorrowChanceOfRain");o.innerText=c,t.innerText=e.location.region,a.innerText=e.location.country,m.innerText=e.location.localtime,d.innerText=e.current.condition.text,s.innerText=e.current.temp_f,i.innerText=e.current.temp_c,l.innerText=e.current.wind_dir,f.innerText=e.current.wind_mph,g.innerText=e.current.precip_in,_.innerText=e.forecast.today.date,v.innerText=e.forecast.today.condition.text,h.innerText=e.forecast.today.mintemp_f,x.innerText=e.forecast.today.mintemp_c,T.innerText=e.forecast.today.avgtemp_f,w.innerText=e.forecast.today.avgtemp_c,M.innerText=e.forecast.today.maxtemp_f,E.innerText=e.forecast.today.maxtemp_c,C.innerText=e.forecast.today.chanceofrain,I.innerText=e.forecast.tomorrow.date,B.innerText=e.forecast.tomorrow.condition.text,F.innerText=e.forecast.tomorrow.mintemp_f,$.innerText=e.forecast.tomorrow.mintemp_c,A.innerText=e.forecast.tomorrow.avgtemp_f,O.innerText=e.forecast.tomorrow.avgtemp_c,D.innerText=e.forecast.tomorrow.maxtemp_f,b.innerText=e.forecast.tomorrow.maxtemp_c,L.innerText=e.forecast.tomorrow.chanceofrain,R.innerText=e.forecast.overmorrow.date,S.innerText=e.forecast.overmorrow.condition.text,P.innerText=e.forecast.overmorrow.mintemp_f,W.innerText=e.forecast.overmorrow.mintemp_c,k.innerText=e.forecast.overmorrow.avgtemp_f,q.innerText=e.forecast.overmorrow.avgtemp_c,N.innerText=e.forecast.overmorrow.maxtemp_f,H.innerText=e.forecast.overmorrow.maxtemp_c,j.innerText=e.forecast.overmorrow.chanceofrain,n.style.display="none"}function V(){const c=document.getElementById("locationSearchForm"),r=document.getElementById("locationSearchInput"),n=document.getElementById("loadingOverlay");c.addEventListener("submit",e=>{e.preventDefault(),r.blur(),c.blur(),n.style.display="block";const o=r.value;r.value="",console.log("searching: ",o),y(o).then(t=>{console.log(t),U(t.location.name,t),n.style.display="none"}).catch(t=>{console.log(t)}).finally(t=>{n.style.display="none",console.log(t)})})}let u="c";function p(){const c=document.querySelectorAll(".tempC"),r=document.querySelectorAll(".tempF");u==="f"?(u="c",r.forEach(n=>{n.style.display="none"}),c.forEach(n=>{n.style.display="block"})):(u="f",r.forEach(n=>{n.style.display="block"}),c.forEach(n=>{n.style.display="none"}))}V();y("Lafayette").then(c=>{console.log(c)}).catch(c=>{console.log(c)});document.getElementById("locationSearchForm").addEventListener("click",()=>{document.getElementById("locationSearchInput").focus()});p();document.getElementById("tempWrapper").addEventListener("click",p);
