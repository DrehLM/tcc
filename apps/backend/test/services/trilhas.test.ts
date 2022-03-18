import assert from 'assert';
import app from '../../src/app';

describe('\'trilhas\' service', () => {
  it('registered the service', () => {
    const service = app.service('trilhas');

    assert.ok(service, 'Registered the service');
  });
});
