import assert from 'assert';
import app from '../../src/app';

describe('\'instituicoes\' service', () => {
  it('registered the service', () => {
    const service = app.service('instituicoes');

    assert.ok(service, 'Registered the service');
  });
});
