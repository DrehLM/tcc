import assert from 'assert';
import app from '../../src/app';

describe('\'escritas\' service', () => {
  it('registered the service', () => {
    const service = app.service('escritas');

    assert.ok(service, 'Registered the service');
  });
});
