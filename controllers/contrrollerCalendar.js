exports.calendar = (req, res) =>{
    const res = await fetch('../assets/js/controllerCalendar')
    const data = await res.json()
    console.log(data)
}
