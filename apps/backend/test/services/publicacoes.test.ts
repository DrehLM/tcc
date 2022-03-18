import assert from 'assert';
import app from '../../src/app';

describe('\'publicacoes\' service', () => {
  it('registered the service', () => {
    const service = app.service('publicacoes');

    assert.ok(service, 'Registered the service');
  });
});
