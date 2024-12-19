# Token bridge tutorial

This is running through the token bridge tutorial off of aztec-packages `0.47.0` branch on July 29.

## Requirements

- node.js version 18.x.x
- Aztec sandbox, install with:

```bash
  bash -i <(curl -s install.aztec.network)
```

## Testing

### Update

Use 0.47.0 build for `aztec-up`:

```bash
aztec-up
```

or

```bash
VERSION=0.47.0 aztec-up
```

#### Dependencies

- Update dependencies in Nargo.toml in `packages/aztec-contracts/token_bridge` to your version.
- Update @aztec package versions in `packages/src/package.json` to your version.

### Compile

#### Aztec contracts

```bash
cd packages/aztec-contracts/token_bridge_contract
aztec-nargo compile
# the output is already committed in this repo, but you'll have to rerun this if you change anything in the contract
aztec codegen target -o ../../src/test/fixtures
```

#### L1 contracts

- Install foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
```

- Compile

```bash
cd packages/l1-contracts-forge
forge build
```

### Run

:warning: You might need to restart the sandbox between testing runs, since the test will produce the same note commitments and nullifiers, which the sequencer will reject.

Run the sandbox

```bash
aztec start --sandbox
```

Run the tests

```bash
cd packages/src
yarn
DEBUG='aztec:e2e_uniswap' yarn test
```

## Updated

1. Set up L1 contracts
2. Set up Aztec contracts
   1. `cp packages/l1-contracts/lib/aztec-packages/noir-projects/noir-contracts/contracts/ packages/aztec-contracts/ -r`
   2. Replace `Nargo.toml` with a nargo.toml that points to the correct versions of the packages
3. copy fixtures: `cp packages/l1-contracts/lib/aztec-packages/yarn-project/end-to-end/src/fixtures/fixtures.ts packages/src/test/fixtures`
4. Copy cross chain messaging test: `cp packages/l1-contracts/lib/aztec-packages/yarn-project/end-to-end/src/e2e_cross_chain_messaging/ packages/src/test -r`
