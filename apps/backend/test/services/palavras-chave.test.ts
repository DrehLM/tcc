import assert from 'assert';
import app from '../../src/app';

describe('\'palavras-chave\' service', () => {
  it('registered the service', () => {
    const service = app.service('palavras-chave');

    assert.ok(service, 'Registered the service');
  });
});
