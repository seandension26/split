/*****************************************************************************************************
Account Module, Manages the account profile, creation and editiong of splits as well as the split function.
******************************************************************************************************/

import {User, Purchase, Split} from './split';

class Client {
    constructor(name,password,user_id, profile) {
        this.name = name, 
	this.password = password,
	this.user_id = user_id, 
	this.profile = profile || {}
  }

}
