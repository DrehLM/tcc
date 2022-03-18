import assert from 'assert';
import app from '../../src/app';

describe('\'eventos\' service', () => {
  it('registered the service', () => {
    const service = app.service('eventos');

    assert.ok(service, 'Registered the service');
  });
});
