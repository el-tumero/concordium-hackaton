# Task 1

## My mainnet address for payout

``` 4f1fKZA4kT2s2knPHUJ2addLDpwH7kPe2SQQHrT8oY8yGEuji4 ```

## rustup installation and setup

I downloaded rustup for my os from [rustup.rs](https://rustup.rs/)

![1.png](/1.png)

![2.png](/2.png)

### rustup target add wasm32-unknown-unknown

![3.png](/3.png)

## cargo-concordium

I downloaded cargo-concorordium for my os from [here](https://developer.concordium.software/en/mainnet/net/installation/downloads-testnet.html#cargo-concordium-testnet)

Making script exectuable:

```bash
sudo chmod +x cargo-concordium
```

Move it to ``` ~/.cargo/bin ```

```bash
mv cargo-concordium ~/.cargo/bin
```

![4.png](/4.png)

## concordium-client

I downloaded concorordium-client for my os from [here](https://developer.concordium.software/en/mainnet/net/installation/downloads-testnet.html#concordium-node-and-client-download-testnet)

I installed it via .pkg file

```bash
concordium-client --help
```

![5.png](/5.png)

### connect to testnet node

```bash
concordium-client consensus status --grpc-port 10000 --grpc-ip node.testnet.concordium.com
```

![6.png](/6.png)

## web wallet

I created testnet ID and wallet account

![7.png](/7.png)

### Claming 2000 CCDs from faucet

![8.png](/8.png)

### Exported key

![9.png](/9.png)

## Importing key to concordium-client

```bash
concordium-client config account import 4V8wj2tZuJLw8uxwT8BbtfQeEXD8HsHYSNzwgf4EY5qSgQozcD.export --name wlt0
```

![10.png](/10.png)
