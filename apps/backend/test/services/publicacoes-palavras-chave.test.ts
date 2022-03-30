import assert from 'assert';
import app from '../../src/app';

describe('\'publicacoes-palavras-chave\' service', () => {
  it('registered the service', () => {
    const service = app.service('publicacoes-palavras-chave');

    assert.ok(service, 'Registered the service');
  });
});
