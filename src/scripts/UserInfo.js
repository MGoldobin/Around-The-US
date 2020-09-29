class UserInfo {
	constructor() {
		this._nameSelector = '.profile__name';
		this._jobSelector = '.profile__about';
	}

	getUserInfo() {
		const name = document.querySelector(this._nameSelector).textContent;
		const job = document.querySelector(this._jobSelector).textContent;
		return {name, job};
	}

	setUserInfo({name, job}) {
		document.querySelector(this._nameSelector).textContent = name;
		document.querySelector(this._jobSelector).textContent = job;
	}
}

export default UserInfo;