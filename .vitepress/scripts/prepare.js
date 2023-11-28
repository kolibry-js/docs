const fs = require('fs-extra')

async function main(){
  await fs.remove('.vitepress/@kolibry')
  await fs.copy('node_modules/@kolibry', '.vitepress/@kolibry', { dereference: true })
}

main()
