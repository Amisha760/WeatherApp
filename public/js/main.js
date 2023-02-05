const submitbtn=document.getElementById("submitbtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("cityname");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");

const datahide=document.querySelector(".middle_layer");

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    console.log(cityVal);
    if(cityVal==="")
    {
        city_name.innerHTML=`please write name before search`;
        datahide.classList.add("data_hide");
    }
    else{
            try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=163f47007f3c45e512235803f9c29367`;
            const response=await fetch(url);
            const data=await response.json();
            const arrData=[data];
            
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
            temp.innerHTML=arrData[0].main.temp;
         
            
            const tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML="<i class='fa-solid fa-sun'></i>";
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML="<i class='fa-solid fa-clouds' ></i>";
            } else if(tempMood=="Rain"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' ></i>";
            }
            else if(tempMood=="smoke")
                temp_status.innerHTML="<i class='fa-solid fa-clouds'></i>";
            datahide.classList.remove("data_hide");
            
            }
            catch(err){
                console.log(err);
                cityName.innerText="please enter valid city";
                datahide.classList.add("data_hide");
            }
           
           

        
        
    }
}
submitbtn.addEventListener('click',getInfo);