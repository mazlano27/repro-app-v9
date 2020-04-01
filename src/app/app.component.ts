import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {SwUpdate} from '@angular/service-worker';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'repro-app';
  destroyed$ = new Subject();

  constructor(private afs: AngularFirestore,
              private snackbar: MatSnackBar,
              private swUpdate: SwUpdate) {
  }

  ngOnInit(): void {
    this.afs.collection(`users`).valueChanges().subscribe(users => console.log(users));

    this.swUpdate.available
      .pipe(takeUntil(this.destroyed$))
      .subscribe(event => {
        const snack = this.snackbar.open('Update Available', 'Reload');
        snack.onAction()
          .pipe(takeUntil(this.destroyed$))
          .subscribe(() => {
            window.location.reload();
          });
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
