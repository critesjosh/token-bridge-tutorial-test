# Token bridge tutorial

This is running through the token bridge tutorial off of aztec-packages `0.41.0` branch on June 3rd.

## Testing

### Update

Use 0.41.0build for `aztec-up`:

```bash
aztec-up
```

### Compile

#### Aztec contracts

```bash
cd packages/aztec-contracts/token_bridge
aztec-nargo compile
# the output is already committed in this repo, but you'll have to rerun this if you change anything in the contract
aztec-builder codegen target -o ../../src/test/fixtures
```

#### L1 contracts

```bash
yarn
cd l1-contract
npx hardhat compile
```

### Run

Run the sandbox

```bash
aztec-sandbox
```

Run the tests

```bash
cd packages/src
yarn
DEBUG='aztec:e2e_uniswap' yarn test
```
