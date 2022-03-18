import assert from 'assert';
import app from '../../src/app';

describe('\'publicacoes-tags\' service', () => {
  it('registered the service', () => {
    const service = app.service('publicacoes-tags');

    assert.ok(service, 'Registered the service');
  });
});
