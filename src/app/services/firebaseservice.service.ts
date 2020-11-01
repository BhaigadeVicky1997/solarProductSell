import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {
  private todosCollection: AngularFirestoreCollection;

  private todos;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection('services');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,  ...data };
        });
      })
    );
  }

  getTodos() {
    return this.todos;

  }

  getTodo(id) {
    return this.todosCollection.doc(id).valueChanges();
  }

}
