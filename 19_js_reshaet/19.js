// Пришло время для третьей собственной программы, которая поможет Кексу правильно запастись протеином на любой период, например, на 15 или на 25 дней.

// Программа усложняется тем, что Кекс принимает протеин не каждый день, а раз в три дня, да ещё и разное количество в будние дни и в выходные. Впрочем, вот техническое задание, написанное его лапой:

// Мяу! Программа должна считать количество протеина необходимое на период.

// Во-первых, расчёт всегда начинается с понедельника. Это первый день.

// Во-вторых, я принимаю протеин каждый третий день:
// 1 день, понедельник — нет,		1
// 2 день, вторник — нет,			2
// 3 день, среда — да, 200			3 ---- 0
// 4 день, четверг — нет,			1
// 5 день, пятница — нет,			2
// 6 день, суббота — да, 100		3 -----	0
// 7 день, воскресенье — нет,		1
// 8 день, понедельник — нет,		2
// 9 день, вторник — да 200			3------0
// и так далее.

// В-третьих, известно, сколько протеина я съедаю в будние и сколько в выходные дни.

// В-четвёртых, период задаётся целым числом, от одного до бесконечности (хотя планы дальше чем на месяц я обычно не строю).

// Программа должна возвращать общее количество протеина за период, записанное в переменную total.

// Количество дней хранится в переменной days, количество протеина для буднего дня — в переменной workDayAmount, для выходного — в переменной weekendAmount, период получения протеина — в переменной period, а результат необходимо записать в переменную total.

const days = 9; // Дней в периоде
const period = 3; // Как часто я ем протеин (раз в три дня)
const workDayAmount = 200; // Количество протеина в будние
const weekendAmount = 100; // Количество протеина в выходные

let total = 0;
let count = 1;
for (let i=1; i<=days; i++){
	if (count == period){
		if (i%6 == 0 || i%7 ==0) total += weekendAmount;
		else total += workDayAmount;
		count = 0;
	}
	count++;
}

console.log(total);