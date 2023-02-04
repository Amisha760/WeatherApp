const submitbtn=document.getElementById("submitbtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("cityname");

const temp=document.getElementById("temp");
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    console.log(cityVal);
    if(cityVal==="")
    {
        city_name.innerHTML=`please write name before search`;
    }
    else{
    
            let url=`api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=163f47007f3c45e512235803f9c29367`;
            const response=await fetch(url);
            const data= await response.json();

            console.log(response);
           

        
        
    }
}
submitbtn.addEventListener('click',getInfo);