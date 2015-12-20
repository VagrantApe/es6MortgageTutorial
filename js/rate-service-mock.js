let rates = [
	{
		"name": "30 years fixed",
		"rate": "13",
		"years": "30"
	},
	{
		"name": "20 years fixed",
		"rate": "2.8",
		"years": "20"	
	}	
];

export let findAll = () => new Promise((resolve, reject) => {
	rates ? resolve(rates) : reject("No rates");
});