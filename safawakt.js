const safawakt = function (req, res, next) {
    /*
    const currentDate = new Date(Date.now())
    const currentHours = currentDate.getHours()
    const currentDay = currentDate.getDay()
    */
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();

    if (( hour < 17 && hour > 9) && ( dayOfWeek > 0 && dayOfWeek < 6)){
        console.log('rani  nikhdem', hour, dayOfWeek)
        next();
    }else(
        console.log('ouuuuuuuuh!!')
    )
}

module.exports = safawakt;