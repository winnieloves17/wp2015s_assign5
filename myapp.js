/*
Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.
http://darkskyapp.github.io/skycons/
*/
var skycons = new Skycons();

  // Array 中 key:value
  // on Android, a nasty hack is needed: {"resizeClear": true}

  // you can add a canvas by it's ID...
  skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("day1", Skycons.CLEAR_DAY);
  skycons.add("day2", Skycons.CLOUDY);
  skycons.add("day3", Skycons.RAIN);

  // start animation!
  skycons.play();
  
  // want to change the icon? no problem:
  skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
  
/*
Get value from Bootstrap dropdown menu
*/
$('#dropdown li').on('click', function(){
    
});

var cityArr = [ '臺北市',
                '新北市',
                '台中市',
                '臺南市',
                '高雄市',
                '基隆市',
                '桃園區',
                '新竹市',
                '新竹縣',
                '苗栗縣',
                '彰化縣',
                '南投縣',
                '雲林縣',
                '嘉義市',
                '嘉義縣',
                '屏東縣',
                '宜蘭縣',
                '花蓮縣',
                '台東縣',
                '澎湖縣',
                '金門縣',
                '連江縣'
                ];       

    $.ajax('https://query.yahooapis.com/v1/public/yql', {
         method: 'GET',
         data: {
           q: 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + cityArr[2] + '") and u="c"',
           format: 'json'
         },
         success: function (data) {
      var  weatherInfo = data.query.results.channel,

        date0 = weatherInfo.item.forecast[0].date,
        high0 = weatherInfo.item.forecast[0].high,
        low0  = weatherInfo.item.forecast[0].low,
        text0 = weatherInfo.item.forecast[0].text,

        date1 = weatherInfo.item.forecast[1].date,
        high1 = weatherInfo.item.forecast[1].high,
        low1  = weatherInfo.item.forecast[1].low,
        text1 = weatherInfo.item.forecast[1].text,

        date2 = weatherInfo.item.forecast[2].date,
        high2 = weatherInfo.item.forecast[2].high,
        low2  = weatherInfo.item.forecast[2].low,
        text2 = weatherInfo.item.forecast[2].text,

        date3 = weatherInfo.item.forecast[3].date,
        high3 = weatherInfo.item.forecast[3].high,
        low3  = weatherInfo.item.forecast[3].low,
        text3 = weatherInfo.item.forecast[3].text,

        codelist =[weatherInfo.item.forecast[0].code,weatherInfo.item.forecast[1].code,weatherInfo.item.forecast[2].code,weatherInfo.item.forecast[3].code];

        //回傳 onClick, find("name or num")
         $('.date').text(date0);
         $('#dateDay1').text(date1);
         $('#dateDay2').text(date2);
         $('#dateDay3').text(date3);
  
         $('.temperature').text(low0+"-"+high0);
         $('#tempDay1').text(low1+"-"+high1);
         $('#tempDay2').text(low2+"-"+high2);
         $('#tempDay3').text(low3+"-"+high3);

        //設定Skykons對應的API資料
         for (var i=0;i<code.length;i+=1){
          var code = codelist[i],
              dayArr =["today","day1","day2","day3"];
         switch(code)
         {
          case'1':  //tropical storm
          case'2':  //hurricane
          case'3':  //severe thunderstorms
          case'4':  //thunderstorms
          case'8':  //freezing drizzle
          case'9':  //drizzle
          case'10':  //freezing rain
          case'11':  //showers
          case'12':  //showers
          case'37':  //isolated thunderstorms
          case'38':  //scattered thunderstorms
          case'39':  //scattered thunderstorms
          case'40':  //scattered showers
          case'45':  //thundershowers
          case'46':  //snow showers
          case'47':  //isolated thundershowers
        skycons.set(dayArr[i], Skycons.Skycons.RAIN);

          case'13':  //snow flurries
          case'14':  //light snow showers
          case'15':  //blowing snow
          case'16':  //snow
          case'41':  //heavy snow
          case'42':  //scattered snow showers
          case'43':  //heavy snow
        skycons.set(dayArr[i], Skycons.Skycons.SNOW);

          case'17':  //hail
          case'18':  //sleet
        skycons.set(dayArr[i], Skycons.Skycons.SLEET);

          case'19':  //dust
          case'20':  //foggy
          case'21':  //haze
          case'22':  //smoky
        skycons.set(dayArr[i], Skycons.Skycons.FOG);

          case'23':  //blustery
          case'24':  //windy
        skycons.set(dayArr[i], Skycons.Skycons.WIND);

          case'25':  //cold
          case'26':  //cloudy
        skycons.set(dayArr[i], Skycons.Skycons.CLOUDY);

          case'27':  //mostly cloudy (night)
          case'29':  //partly cloudy (night)
        skycons.set(dayArr[i], Skycons.Skycons.PARTLY_CLOUDY_NIGHT );

          case'28':  //mostly cloudy (day)
          case'30':  //partly cloudy (day)
          case'44':  //partly cloudy
        skycons.set(dayArr[i], Skycons.Skycons.PARTLY_CLOUDY_DAY);

          case'31':  //clear (night)
          case'33':  //fair (night)
        skycons.set(dayArr[i], Skycons.Skycons.CLEAR_NIGHT);

          case'32':  //sunny
          case'34':  //fair (day)
          case'36':  //hot
        skycons.set(dayArr[i], Skycons.Skycons.CLEAR_DAY);

          break;

         }}

         }
       });

       
























