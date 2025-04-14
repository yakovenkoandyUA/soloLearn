/* TASK - 1
 * Get any integer number from user.
 * After you get the number, show modal window with message about is number even or odd.
 */

const userNumber = parseInt(prompt("Введіть ціле число")) // NaN

if (!!userNumber) {
	if (userNumber % 2 === 0) {
		alert('number is even')
	} else {
		alert('number is odd')
	}
} else {
	console.error('it not a number');	
}
