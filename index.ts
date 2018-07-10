import {Observable, interval} from 'rxjs'
import {map } from 'rxjs/operators';


const interval$ =  interval(1000);

const disposable = interval$
  .pipe(
    map(x => x * 3),
  )
  .subscribe(val => console.log('first ', val));


/*let observable = Observable.create(
  observer => {
    observer.next('Observables rock!');
    observer.complete();
  }
);

observable.subscribe( 
  val   => console.log(val),
  error    => console.error(error)
);*/