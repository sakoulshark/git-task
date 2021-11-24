function createFrontend(name, age) {
	let o = new Object();
	o.name = name;
	o.age = age;
	o.ask = () => {
    	console.log("what is the future of frontend");
  };
  o.answer = () => {
    	console.log(this.name);
  };
	return o;
}
const jies = createFrontend("jiescript", 18);
const lunix = createFrontend("lomirus",18)
console.log("jies:",jies);
console.log("lunix:",lunix);