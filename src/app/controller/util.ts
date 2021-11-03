export class Util {

    static addZero = v => v.toString().length === 1 ? '0' + v : v;

    static dataParaString(date: Date) {
        return `${date.getFullYear()}-${Util.addZero(date.getMonth() + 1)}-${date.getDate()}`
    }

    static dataParaStringComZero(date: Date) {
        return `${date.getFullYear()}-${Util.addZero(date.getMonth() + 1)}-${Util.addZero(date.getDate())}`
    }

}
