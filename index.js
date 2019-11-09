const IdentityWallet = require('identity-wallet')
const Box = require('3box')

const privateKey = '4ccf180e6d9d20eb9e51f00f34a47fb6ba8b2370dbc70370b1a11aad2034776f'
const accountAddress = '0x925BFe6ebDC9171d4dECd8dCA8CB250A276Af39c'

;(async () => {

const idWallet = new IdentityWallet(res => {
  return true
}, {
  authSecret: privateKey,
  ethereumAddress: accountAddress
})

const threeIdProvider = idWallet.get3idProvider()
const box = await Box.openBox(null, threeIdProvider)
await box.syncDone

const space = await box.openSpace('demo')
//await space.public.set('foo', 'bar')
console.log(await space.public.get('foo'))

})();
