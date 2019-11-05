import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slides'
})
export class SlidesPipe implements PipeTransform {

  /* se crea pipe que permite devolver un slide con 3 objetos "es decir 3 clientes  con sus respectivos datos"
    de esta forma lo trae a un campo mas real ya que se consulta la informacion 
    desde una api rest fake "jsonplaceholder" , asi aunque el slide active normalmente es de un objeto
    de esta forma se podria tener 3 clientes mostrandose en un slide o carousel multiuple
  */
  transform(arr: any[]): any[] {
    if (!arr) return
    const slides = arr.reduce((result, value, index, array) => {

      if (index % 3 === 0) {
        result.push(array.slice(index, index + 3));
      }
      return result;

    }, []);

    console.log('slides',slides);
    
    return slides;
  }

}
