import assert from 'assert';
import app from '../../src/app';

describe('\'edicoes\' service', () => {
  it('registered the service', () => {
    const service = app.service('edicoes');

    assert.ok(service, 'Registered the service');
  });
});
