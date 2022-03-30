import assert from 'assert';
import app from '../../src/app';

describe('\'orientacoes\' service', () => {
  it('registered the service', () => {
    const service = app.service('orientacoes');

    assert.ok(service, 'Registered the service');
  });
});
