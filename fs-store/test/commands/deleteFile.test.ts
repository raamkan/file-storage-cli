import {expect, test} from '@oclif/test'

describe('deleteFile', () => {
  test
  .stdout()
  .command(['deleteFile'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['deleteFile', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
