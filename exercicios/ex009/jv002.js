let d = new Date();
let hour = d.getHours();
console.log(`Agora são exatamente ${hour} Horas`)
if (hour < 12) {
    console.log('Bom dia')

} else if (hour > 12 && hour <= 18) {
    console.log('Boa tarde')
} else if (hour > 18 && hour < 24) {
    console.log('Boa noite')
}