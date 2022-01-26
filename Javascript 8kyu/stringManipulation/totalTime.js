function totalTime(arr) {
//  let time = arr.join('').split(':');
//  return time.reduce((a,b) => a + b , 0) / 60


 var t=arr.reduce((s,w)=>s+w.split(':').reduce((c,p) => +p+c*60,0),0)
 console.log(t)
 if(!t) return '0';
 var pt=[t/86400|0,(t/3600|0)%24,(t/60|0)%60,t%60];
 return pt.map((r,i)=>r+' '+['day','hour','minute','second'][i]+(r===1?'':'s')).filter(r=>+r[0]).join(', ');

 console.log(time)
  }
console.log(totalTime(['60'])) //, '1 minute');
console.log(totalTime(['25:01:01'])) //, '1 day, 1 hour, 1 minute, 1 second');
//console.log(totalTime(['50:02:02'])) //, '2 days, 2 hours, 2 minutes, 2 seconds');
//console.log(totalTime(['01:20','03:10'])) //, '4 minutes, 30 seconds');
//console.log(totalTime(['00:50','00:30'])) //, '1 minute, 20 seconds');
//console.log(totalTime(['01:20:00','40:00'])) //, '2 hours');
//console.log(totalTime(['12:00:00','10:00:00','02:00:00'])) //, '1 day');
//console.log(totalTime(['24:00:00','24:00:00','07'])) //, '2 days, 7 seconds');
/**
 * Yesi Pseudo
 * str contains nums and stands for hrs,min, seconds
 * only if over 0 
 * else return 'zero'
 * dont check empty strings
 * if under 10 add 0 in front
 * add commas in between
 * '01 day, 03 hrs, 5 min'
 */