// const square = x => x * x
// console.log(square(3))
const event = {
    name:'Birthday Party',
    guestList:['Andy','Jean','Mike'],
    printGuestList() {
        console.log('Guest List for '+ this.name)
        this.guestList.forEach((guest) => {
            console.log(guest +' is attending '+ this.name)
        })
    }
}
event.printGuestList()