
function temp(){

    setTimeout(function () {
        try {
            console.log("Hola");
            throw new Error('error!');
        } catch (e) {
            console.error(e);
        }
    }, 300)
}
temp()