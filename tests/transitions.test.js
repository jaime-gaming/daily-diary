import test from 'node:test';
import assert from 'node:assert/strict';
import {createTransitionGuard} from '../src/utils/transitions.js';

test('una navegación nueva invalida los callbacks de una transición anterior',()=>{
  const guard=createTransitionGuard();
  const first=guard.begin();
  assert.equal(guard.isCurrent(first),true);
  guard.cancel();
  assert.equal(guard.isCurrent(first),false);
  const second=guard.begin();
  assert.notEqual(second,first);
  assert.equal(guard.isCurrent(first),false);
  assert.equal(guard.isCurrent(second),true);
});
