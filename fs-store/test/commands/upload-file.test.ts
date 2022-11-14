import {expect, test} from '@oclif/test'

describe('upload-file', () => {
  test
  .stdout()
  .command(['upload-file'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['upload-file', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
