const person = {

    name:'sakoul',
  
    age:123123123,
  
    address:{
  
    city:'M78',
  
    area:'???'
  
    },
  
                      
    title:['aoteman',{year:2021,title3:'dijia'}]
  
  }
  
  const{name}=person;
  const{age:year}=person
  const{address:{city}}=person;
  const{address:{area}}=person;
  const{title:[title1]}=person;
  const{title:[title2]}=person;
  const{title:[title3]}=person;
  
  
  
  console.log(name);
  
  console.log(year);
  
  console.log(city);
  
  console.log(area);
  
  console.log(title1);
  
  console.log(title2);
  
  console.log(title3);