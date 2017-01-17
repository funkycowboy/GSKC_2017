import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
  name: 'textfilter'
})

export class TextFilterPipe implements PipeTransform {
  transform(items:any[], args:string[]):any[] {
    //if(args[1].toString().length === 0)
    //  return items;
    //return items.filter(item => item[args[0]].indexOf(args[1]) !== -1);

    if (typeof items === 'object') {
            var resultArray:any = [];
            if (args.length === 0) {
                resultArray = items;
            }
 
            else {
                for (let item of items) {
                    if (item.name != null && item.name.match(new RegExp(''+args, 'i'))) {
                        resultArray.push(item);
                    }
                }
            }
 
            return resultArray;
        }
        else {
            return null;
        }

  }
}