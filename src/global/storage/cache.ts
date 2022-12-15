import BrowserCookies from 'js-cookie';
class Cookies {
	static read(key: string): string {
		return BrowserCookies.get(key);
	}

	static write(key: string, value?: number | string): void {
		BrowserCookies.set(key, value);
	}
}

export default Cookies;
