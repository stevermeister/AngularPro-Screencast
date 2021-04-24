// https://github.com/angular/angular/blob/master/packages/core/src/zone/ng_zone.ts#L337
// ngzone simplified

function onEnter() {
  _nesting++;
}

function onLeave() {
  _nesting--;
  checkStable();
}

function checkStable() {
  if (zone._nesting == 0 && !zone.hasPendingMicrotasks) {
    onMicrotaskEmpty.emit(null);
  }
}



//https://github.com/angular/angular/blob/7954c8dfa3c85d12780949c75f1448c8d783a8cf/packages/core/src/application_ref.ts#L628