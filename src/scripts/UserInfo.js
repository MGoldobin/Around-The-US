class UserInfo {
	constructor() {
		this._profileName = document.querySelector('.profile__name').textContent;
		this._profileAbout = document.querySelector('.profile__about').textContent;
	}

	getUserInfo() {
		const profileName = this._profileName;
		const profileAbout = this._profileAbout;
		return {profileName, profileAbout};
	}

	setUserInfo({unputProfileName, unputProfileAbout}) {
		this._profileName = unputProfileName;
		this._profileAbout = unputProfileAbout;
	}
}

export default UserInfo;