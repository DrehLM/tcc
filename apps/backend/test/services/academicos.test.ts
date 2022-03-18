import assert from 'assert';
import app from '../../src/app';

describe('\'academicos\' service', () => {
  it('registered the service', () => {
    const service = app.service('academicos');

    assert.ok(service, 'Registered the service');
  });
});
