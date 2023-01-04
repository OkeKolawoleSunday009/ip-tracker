// at_bMhXSfjEcuIlQkAy9MfJ4iYUWSGvf
// https://geo.ipify.org/api/v2/country?apiKey=at_bMhXSfjEcuIlQkAy9MfJ4iYUWSGvf&ipAddress=8.8.8.8
//  console.log(shayo)
var spinner = function () {
  setTimeout(function () {
      if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
      }
  }, 1);
};
spinner();

//map to display





$(function(){


 
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([9.050522, 7.464550]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


  var api_key = 'at_bMhXSfjEcuIlQkAy9MfJ4iYUWSGvf';
  var ip = $('#ip_input');
 
  var url = "https://geo.ipify.org/api/v2/country"
  

$('#submit').click(function(e) { 


    
      e.preventDefault();
      console.log('goclicked');
      

        $.ajax({    
          
          url: url,  
          data: {
            apiKey: api_key, 
            ipAddress:  ip.val()
          },   
          success: function(data) {  

            var ipDisplay = JSON.stringify(data.ip).slice(1, -1);  
            var locationDisplay = JSON.stringify(data.location.country).slice(1, -1);  
            var timezoneDisplay = JSON.stringify(data.location.timezone).slice(1, -1);  
            var ispDisplay = JSON.stringify(data.isp).slice(1, -1);  
        
           
              $("#ipaddress").text(ipDisplay);
              $("#location").text(locationDisplay );
              $("#timezone").text(timezoneDisplay)
              $("#isp").text(ispDisplay);
              
                  console.log(data)

           } ,  
         
           error: function(){
           console.log("something is wrong");
           
           }
          
          }); 

         

          //  ip = $('#ip').val("");
         

      });

      


});
    //  https://geo.ipify.org/api/v2?apiKey=at_bMhXSfjEcuIlQkAy9MfJ4iYUWSGvf&ipAddress=8.8.8.8
