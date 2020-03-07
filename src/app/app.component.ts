import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'repro-app';

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.afs.collection(`users`).valueChanges().subscribe(users => console.log(users));
  }
}
