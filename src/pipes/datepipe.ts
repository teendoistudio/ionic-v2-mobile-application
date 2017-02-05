import {Injectable, Pipe} from '@angular/core';

@Pipe({
    name: 'DatePipe'
})
@Injectable()
export class DatePipe {

    transform(value) {
        let month = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
        let date = value.split("-");
        return date[0] + " " + month[date[1]] + " " + date[2];
    }
}
