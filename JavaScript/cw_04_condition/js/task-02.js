/* TASK - 2
 * Ask user in witch language he wants to see the list of the days.
 * User should enter one of three values, they are - ua, en, fr
 * Show the list of days on selected language.
 * */

let daysUa = 'Понеділок'
let daysEn = 'Monday'
let daysFr = 'Crouasnt'

let languageUser = prompt('what is your language?')

// if (languageUser === 'ua') {
// 	console.log(daysUa)
// } else if (languageUser === 'en') {
// 	console.log(daysEn)
// } else if (languageUser === 'fr') {
// 	console.log(daysFr)
// } else {
// 	console.log('мова не вибрана')
// }
//!'',
//! null,
//! 2
// NaN === NaN //false
// if (languageUser === null || languageUser === '' || !isNaN(languageUser)) {
// 	alert('Ввод невірний')
// } else {
// 	switch (languageUser) {
// 		case 'ua':
// 			console.log(daysUa)
// 			break
// 		case 'en':
// 			console.log(daysEn)
// 			break
// 		case 'fr':
// 			console.log(daysFr)
// 			break
// 		default:
// 			console.log('мова не вибрана')
// 	}
// }
if (languageUser !== null || languageUser !== '' || isNaN(languageUser)) {
	switch (languageUser) {
		case 'ua':
			console.log(daysUa)
			break
		case 'en':
			console.log(daysEn)
			break
		case 'fr':
			console.log(daysFr)
			break
		default:
			console.log('мова не вибрана')
	}
} else {
	alert('Ввод невірний')
}
