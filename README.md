# Fork of Smart contracts for Rarible Protocol

## Compile, Test, Deploy

```shell
yarn
yarn bootstrap
```

then use truffle to compile, test: cd into directory and then

```shell
truffle test --compile-all
```

## Process  
-> Read through the config file 
-> Updated the config file to use path instead of os module, this was so I could upload the .ethereum folder and the code can run without needing any extra setup
-> Run ```truffle compile --all``` to compile all smart contracts 
-> Run ```truffle migrate --network <rinkeby||ropsten>``` in the desired folder to migrate/deploy smart contract in the specified network. 

## License
Smart contracts for Rarible protocol are available under the [MIT License](LICENSE.md).
