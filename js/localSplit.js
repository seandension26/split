/******************************\
Preliminary Split module to perform split actions on the server that will eventually be used by the client as well 
\******************************/

//split on local machine module

import {Split, User, Purchase} from './split';
let fs = require('fs');

fs.readFile('./splits/' + process.argv[2] + '.json', 'utf8', function(err,data) {
	if (err)
		console.log(err);
	else {
		let thisSplit = buildSplitfromJSON(data),
		totalCategories = thisSplit.getCategTotalsString();

		
		console.log(thisSplit.getSplitString());
	
	
		//fs.writefile(process.argv[2] + 'json', thisSplit, )
		console.log(thisSplit);
	}
});

function buildSplitfromJSON (data) {
	let file = JSON.parse(data),
	title = file.title,
	categories = file.categories,
	users = Object.keys(file.users)
		      .map((user) => {
				let purchases = file.users[user].purchases.map((p) => {return new Purchase('NA',p.date,p.category,p.vendor,p.amount,user);})
				return new User (user,purchases);     
				     });
	  
	return new Split(title, "Ziggy", users, categories);
}





function buildSplitfromJSON (data) {
    let file = JSON.parse(data),
    title = file.title,
    categories = file.categories;

    console.log(file);

    let users = Object.keys(file.users)
              .map((user) => {
                let purchases = file.users[user].purchases.map((p) => {return new Purchase('NA',p.date,p.category,p.vendor,p.amount);})
                return new User (user,purchases);
                     });

    return new Split(title, "Ziggy", users, categories);
}
