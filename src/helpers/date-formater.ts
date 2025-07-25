export class DateFormater {

    static formater = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    });

    static getDDMMMYYYY(date:Date): string {
        return this.formater.format(date);
    };
    
};